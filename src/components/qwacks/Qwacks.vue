<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card no-body>
          <b-container class="text-center">                   
            <Row class="pb-2 pt-2" 
              color="danger"
              @score="score(index, $event)"                  
            ></Row>
            <Row class="pb-2"
              color="warning"
              @score="score(index, $event)"                
            ></Row>      
            <Row class="pb-2"
              color="success"
              @score="score(index, $event)"                
            ></Row>         
            <Row class="pb-2"
              color="primary"
              @score="score(index, $event)"                
            ></Row>        
          </b-container>
          <div slot="footer">
            <div class="float-left">
              <b-input-group size="lg">  
                <b-input-group-prepend>               
                  <div class="input-group-text border-success text-success bg-light rounded bold" variant="primary"><b>{{total()}}</b></div>              
                </b-input-group-prepend>
              </b-input-group>              
            </div>

            <div class="float-right">
              <b-input-group size="lg">   
                <b-input-group-prepend>
                  <div class="input-group-text bg-light border-primary">
            
                  </div>
                </b-input-group-prepend>
                <b-input-group-append>
                  
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
  import Row from './QwacksRow.vue'
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
      saveGame() {
        
      },
      newGame: function(){
          
      },
      total: function(){
        return 0;
      }
    },
    mounted: function() {
      Store.data.currentGame=this
      Store.data.games['qwacks']=this
    },
    data: () => ({
     
    })
  }
</script>

<style>

</style>
