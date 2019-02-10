<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <h6 slot="header">Rolls Taken {{rolls}}</h6>
          
          <Row :key="index" v-for="(item, index) in this.rows"
            :display="item.display"
            :initialScore="item.score"
            @score="score(index, $event)"                
          ></Row>                       
          
          <div slot="footer">
            <h6>
              Bonus {{bonus()}}
            </h6>
            <h4>
              Total {{total()}}
            </h4>
          </div>          
        </b-card>
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
      rolls:5,
      rows: [
        {key:0, display: 'Dice 6', score:null},
        {key:1, display: 'Dice 5', score:null},
        {key:2, display: 'Dice 4', score:null},
        {key:3, display: 'Dice 3', score:null},
        {key:4, display: 'Dice 2', score:null},
        {key:5, display: 'Dice 1', score:null},
        {key:6, display: 'Run', score:null},
        {key:7, display: 'Set', score:null},
        {key:8, display: 'Sum', score:null},
        {key:9, display: 'Red', score:null}
      ],
      bonus: function(){
        return 5 * (30-this.rolls);
      },
      total: function(){
        return this.bonus() + Object.values(this.rows).reduce((t, n) => t + n.score , 0);
      }
    })
  }

</script>

<style>

</style>
