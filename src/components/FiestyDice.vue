<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-sheet elevation=3>
          <v-layout row wrap pa-3>          
            <v-flex xs12>
              <Row 
                display="Dice 6"
                @score="score('six', $event)"
              ></Row>
            </v-flex>
            <v-flex xs12>
              <Row 
                display="Dice 5"
                @score="score('five', $event)"
              ></Row>
            </v-flex>
            <v-flex xs12>
             {{total()}}
            </v-flex>
          </v-layout>
        </v-sheet>        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Row from './ScoreRow.vue'

  export default {
    components: {
      Row
    },
    methods:{
      score: function(k, v){        
        this.$set(this.rows, k, Number(v))        
      }
    },
    data: () => ({
      rows: {},
      rolls: 0,
      total: function(){
        return 5 * (30-this.rolls) + Object.values(this.rows).reduce((t, n) => t + n , 0);
      }
    })
  }

</script>

<style>

</style>
