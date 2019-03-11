<template>
      <b-button-group>
        <b-button :key="index" v-for="(item, index) in this.numbers"
          :variant=varientNumber(item)
          :disabled=disabledNumber(item)
          @click=mark(item)>
          {{item.display}}
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
    props : {
      id: String,
      color: String,
      reverse:Boolean
    },
    
    beforeMount : function(){
      if(this.reverse){
        for(var i=0; i < this.numbers.length; i++){         
          this.numbers[i].display = '' + (12-i);
        }
      }
    },
    methods: {
      disabledNumber: function(n){        
        return this.locked 
        || n.key < this.highest
        || this.marks < n.required;
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
        if(n.key == 12){
          this.locked=n.marked;
        }
        
        this.$emit('mark', this.marks);

        document.activeElement.blur();
      },
      newGame: function(){
        this.locked = false;
        for(var i=0; i < this.numbers.length; i++){         
          this.numbers[i].marked = false;
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
        },
        marks: function(){
          var result = 0;
          for(var i=0; i < this.numbers.length; i++){
            if(this.numbers[i].marked) result ++            
          }
          
          if(this.numbers[this.numbers.length-1].marked) result++;

          return result;
        }
    },
    data: () => ({
      name: "Quacks",     
      locked: false,
      numbers: [    
        {key:2, display:'2', marked: false, required: 0},
        {key:3, display:'3', marked: false, required: 0},        
        {key:4, display:'4', marked: false, required: 0},        
        {key:5, display:'5', marked: false, required: 0},   
        {key:6, display:'6', marked: false, required: 0},
        {key:7, display:'7', marked: false, required: 0},
        {key:8, display:'8', marked: false, required: 0},
        {key:9, display:'9', marked: false, required: 0},
        {key:10, display:'10', marked: false, required: 0},
        {key:11, display:'11', marked: false, required: 0},
        {key:12, display:'12', marked: false, required: 5},
      ]
    })
  }
</script>

<style scoped>
  .btn {  
    padding:0px;   
    min-width: 50px;
    min-height: 50px;    
    
  }
</style>
