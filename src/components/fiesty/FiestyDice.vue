<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card no-body>
          <Row ref="row" :key="index" v-for="(item, index) in this.rows"
            :label="item.label"
            :description="item.description"
            :initialScore="item.score"
            @score="score(index, $event)"                
          ></Row>                       
          
          <div slot="footer">
            <div class="float-left">
              <b-input-group size="lg">  
                <b-input-group-prepend>               
                  <div class="input-group-text border-success text-success bg-light rounded"><b>{{total()}}</b></div>              
                </b-input-group-prepend>
              </b-input-group>
            </div>

            <div class="float-right">
              <b-input-group size="lg">   
                <b-input-group-prepend>
                  <div class="input-group-text bg-light border-primary">
                    <span v-if="rolls>1">{{rolls}} Left</span>
                    <span v-else-if="rolls==1">{{rolls}} Left!</span>
                    <span v-else>No Rolls!</span>
                  </div>
                </b-input-group-prepend>
                <b-input-group-append>
                  <b-button :disabled="rolls<=0" variant="primary" @click="roleTaken">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</b-button>
                  <b-button :disabled="rolls>=30" variant="outline-primary" @click="roleTakenBack">+</b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          </div>          
        </b-card>
      </b-col>
    </b-row>
      
  </b-container>
</template>

<script>
  import Row from './FiestyRow.vue'
  import Store from '../../Store.js'

  export default {
    components: {
      Row
    },
    methods:{
      score: function(k, v){
        if(v == null || v == ''){
          this.rows[k].score =  null
        }else{
          this.rows[k].score =  Number(v)
        }
        
        this.saveGame();
      },
      roleTaken: function(){
        this.rolls--
        this.saveGame()
      },
      roleTakenBack: function(){
        this.rolls++
        this.saveGame()
      },
      saveGame() {
        const parsed = JSON.stringify({rolls: this.rolls, rows: this.rows});
        localStorage.setItem('fiesty', parsed);
      },
      newGame: function(){
          for(var i=0; i < this.rows.length; i++){           
            this.$refs.row[i].newGame()           
          }
          this.rolls = 30
      },
      bonus: function(){
        return 5 * (this.rolls);
      },
      total: function(){
        return this.bonus() + Object.values(this.rows).reduce((t, n) => t + n.score , 0);
      }
    },
    mounted: function() {
      Store.data.currentGame=this
      Store.data.games['qwacks']=this

      if (localStorage.getItem('fiesty')) {
        try {
          var d = JSON.parse(localStorage.getItem('fiesty'));

          for(var i=0; i < this.rows.length; i++){
            if(d.rows[i].score != null){
              this.$refs.row[i].setScore(d.rows[i].score)
            }
          }          
                   
          this.rolls = d.rolls;          
        } catch(e) {
          localStorage.removeItem('fiesty');
        }
      }
    },
    data: () => ({
      name: "Fiesty Dice",
      rolls:30,
      rows: [
        {key:0, label: '6', score:null, description: 'Red doubles, 75 for 6 (50 any other)'},
        {key:1, label: '5', score:null, description: 'Red doubles, 75 for 6 (50 any other)'},
        {key:2, label: '4', score:null, description: 'Red doubles, 75 for 6 (50 any other)'},
        {key:3, label: '3', score:null, description: 'Red doubles, 50 for 6 (25 any other)'},
        {key:4, label: '2', score:null, description: 'Red doubles, 50 for 6 (25 any other)'},
        {key:5, label: '1', score:null, description: 'Red doubles, 50 for 6 (25 any other)'},
        {key:6, label: 'Run', score:null, description: '21 Points - red eligible'},
        {key:7, label: 'Set', score:null, description: '2|2|2, 3|3, 4|2 - red eligible'},
        {key:8, label: 'Sum', score:null},
        {key:9, label: 'Red', score:null, description: '10 Points per red number'}
      ]
    })
  }

</script>

<style>

</style>
