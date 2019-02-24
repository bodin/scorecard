<template>
      <b-button-group>
        <b-button :key="index" v-for="(item, index) in this.numbers"
          :variant=varientNumber(item)
          :disabled=disabled(item)
          @click=mark(item)>
          {{item.key}}
        </b-button>            
        <b-button 
          :variant=varientLock()
          @click=lock>
          X
        </b-button>  
      </b-button-group>
</template>

<script>
  export default {
    /**
     *        <span v-if="rolls>1">{{rolls}} Left</span>
                    <span v-else-if="rolls==1">{{rolls}} Left!</span>
                    <span v-else>No Rolls!</span>
     */
    props : {
      color: String
    },
    
    beforeMount : function(){
    
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
      disabled: function(n){        
        return this.locked || n.key <= this.highest || this.checks < n.required;
      },
      varientNumber: function(n){        
        if(n.marked){
          return this.color
        }else{
          return "outline-" + this.color
        }
      },
      varientLock: function(){        
        if(this.locked){
          return "secondary"
        }else{
          return "outline-secondary"
        }
      },
      lock: function(){
        this.locked =! this.locked;
      },
      mark: function(n){
        n.marked=!n.marked;
        if(n.marked){
          this.checks ++;
        }
        if(n.key == 12){
          this.locked=true;
        }
      }
    },
    computed: {
        highest: function(){
          var result = 0;
          for(var i=0; i < this.numbers.length; i++){
            if(this.numbers[i].marked){
              result = this.numbers[i].key;
            }
          }
          return result;
        }
    },
    data: () => ({
      name: "Quacks",
      checks: 0,
      locked: false,
      numbers: [    
        {key:2, marked: false, required: 0},
        {key:3, marked: false, required: 0},        
        {key:4, marked: false, required: 0},        
        {key:5, marked: false, required: 0},   
        {key:6, marked: false, required: 0},
        {key:7, marked: false, required: 0},
        {key:8, marked: false, required: 0},
        {key:9, marked: false, required: 0},
        {key:10, marked: false, required: 0},
        {key:11, marked: false, required: 0},
        {key:12, marked: false, required: 5},
      ]
    })
  }
</script>

<style scoped>
  button {
    /* 
    min-width: 50px;
    min-height: 50px;
    */
  }
</style>
