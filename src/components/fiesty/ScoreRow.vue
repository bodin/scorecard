<template>
  <b-form-input 
    v-model="score"
    type="number"
    :placeholder="display"
    @change="$emit('score', score)">
  </b-form-input>
</template>

<script>
  export default {
    props : {
      display: String, 
      initialScore: Number,
    },
    data: () => ({
      score: ''
    }),
    beforeMount : function(){
      if(this.initialScore >= 0){
        this.score = this.initialScore;
      }
    },
    methods:{
      
    }
  }
</script>

<style>

</style>
