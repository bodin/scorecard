<template>
  <b-input-group>
      <b-input-group-prepend>
        <div class="input-group-text">{{label}}</div>
      </b-input-group-prepend>
      <b-form-input 
        v-model="score"
        type="number"
        :placeholder="description"
        @change="changeScore"
        >    
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
      score: null
    }),
    beforeMount : function(){
      if(this.initialScore >= 0){
        this.score = this.initialScore;
      }
    },
    methods: {
      changeScore: function() {
        this.setScore(this.score);
        document.activeElement.blur();
      },
      setScore: function(value) {
        this.score = value;
        this.$emit('score', this.score);
      }
    }
  }
</script>

<style scoped>
  .form-control {
    border-radius:0px;
  }
  .input-group-text {
    width: 75px;
    border-radius: 0px;
  }
</style>
