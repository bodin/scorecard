<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card no-body>
          <b-container class="text-center">                   
            <Row ref="rowRed" class="pb-2 pt-2" 
              id="red"
              color="danger"
              @mark="mark('red', $event)"                  
            ></Row>
            <Row ref="rowYellow" class="pb-2"
              id="yellow"
              color="warning"
              @mark="mark('yellow', $event)"                
            ></Row>      

            <hr class="my-1 py-1"/>

            <Row ref="rowGreen" class="pb-2"
              id="green"
              color="success"
              :reverse=true
              @mark="mark('green', $event)"
            ></Row>         
            <Row ref="rowBlue" class="pb-2"
              id="blue"
              color="primary"
              :reverse=true
              @mark="mark('blue', $event)"                
            ></Row>        
          </b-container>
          <div slot="footer">
            <div>
              <b-button-group size="lg">  
                <b-button :disabled=true variant='danger'>{{totalRed}}</b-button>                   
                <b-button :disabled=true variant='warning'>{{totalYellow}}</b-button> 
                <b-button :disabled=true variant='success'>{{totalGreen}}</b-button> 
                <b-button :disabled=true variant='primary'>{{totalBlue}}</b-button> 
              </b-button-group>     
          
              <b-button-group size="lg" class="ml-3">  
                <b-button variant='outline-secondary' @click="strike">Strike {{strikes}}</b-button>
              </b-button-group>

              <b-button-group size="lg" class="float-right">  
                <b-button variant='outline-success' :disabled=true>{{total}}</b-button>
              </b-button-group>
            </div>
          </div>          
        </b-card>
      </b-col>
    </b-row>
      
  </b-container>
</template>

<script>
  import Row from './QwaxxRow.vue'
  import Store from '../../Store.js'

  export default {
    components: {
      Row
    },
    methods:{
      mark: function(k, v){       
        this.$set(this.marks, k, v)
        this.saveGame();
      },
      strike: function(){
        this.strikes++;
      },
      saveGame() {
        
      },
      newGame: function(){
        this.marks = {};
        this.strikes = 0;
        this.$refs.rowRed.newGame();
        this.$refs.rowYellow.newGame();
        this.$refs.rowGreen.newGame();
        this.$refs.rowBlue.newGame();

      },
      score: function(i){
        if(i <= 0) return 0;
        if(i == 1) return 1;
        return this.score(i-1) + i;
      }      
    },
    computed:{
      
      totalRed: function(){        
        if(this.marks['red']){
          return this.score(this.marks['red']);
        }
        return 0;
      },
      totalYellow: function(){        
        if(this.marks['yellow']){
          return this.score(this.marks['yellow']);
        }
        return 0;
      },
      totalGreen: function(){        
        if(this.marks['green']){
          return this.score(this.marks['green']);
        }
        return 0;
      },
      totalBlue: function(){        
        if(this.marks['blue']){
          return this.score(this.marks['blue']);
        }
        return 0;
      },
      total: function(){                
        return this.totalRed + this.totalYellow + this.totalGreen + this.totalBlue - (5*this.strikes);
      }
    },    
    mounted: function() {
      this.store.currentGame=this
      this.store.games['qwaxx']=this
    },
    data: () => ({
        name: "Qwaxx",
        store : Store.data,
        marks : {},
        strikes: 0        
    })
  }
</script>

<style>
  .container {
    max-width:100%;
  }
</style>
