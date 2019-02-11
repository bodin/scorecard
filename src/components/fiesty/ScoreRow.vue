<template>
  <b-input-group :prepend="label">
    <b-form-input 
      v-model="score"
      type="number"
      :placeholder="description"
      @change="changeScore">    
    </b-form-input>
  </b-input-group>  
</template>

<script>
  export default {
    props : {
      label: String, 
      description: String, 
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
    methods: {
      changeScore: function() {
        this.$emit('score', this.score);
        document.activeElement.blur();
      }
    }
  }
</script>

<style scoped>
  .form-control {
    border-radius:0px;
  }
  .input-group-text {
    width: 100px;
    border-radius: 0px;
  }
</style>
