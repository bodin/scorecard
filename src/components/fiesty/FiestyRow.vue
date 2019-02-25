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
      <template v-if="score != null && score != ''">      
        <span class="fas fa-check form-control-feedback" style="color:green"></span>
      </template>  
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
      },
      newGame: function() {
        this.setScore(null)
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
  .form-control {
    padding-right: 30px;
  }

  .form-control + .fas {
    position: absolute;
    right: 0;
    padding: 8px 10px;
  }
</style>
