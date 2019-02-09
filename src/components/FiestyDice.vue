<template>
  <b-container>
        <b-row :key="index" v-for="(item, index) in this.rows"> 
          <b-col>       
            <Row 
              :display="item.display"
              :initialScore="item.score"
              @score="score(index, $event)"                
            ></Row>
          </b-col>
        </b-row>      
        <b-row>
          <b-col>       
            {{total()}}
          </b-col>            
        </b-row>
  </b-container>
</template>

<script>
  import Row from './ScoreRow.vue'

  export default {
    components: {
      Row
    },
    methods:{
      score: function(k, v){  
        this.rows[k].score =  Number(v)
      }
    },
    data: () => ({
      rows: [
        {key:0, display: 'Dice 6', score:null},
        {key:1, display: 'Dice 5', score:null},
        {key:2, display: 'Dice 4', score:null},
        {key:1, display: 'Dice 3', score:null},
        {key:1, display: 'Dice 2', score:null},
        {key:1, display: 'Dice 1', score:null},
        {key:1, display: 'Run', score:null},
        {key:1, display: 'Set', score:null},
        {key:1, display: 'Sum', score:null},
        {key:1, display: 'Red', score:null}
      ],

      rolls: 0,
      total: function(){
        return 5 * (30-this.rolls) + Object.values(this.rows).reduce((t, n) => t + n.score , 0);
      }
    })
  }

</script>

<style>

</style>
