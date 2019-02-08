<template>
  <v-text-field 
    :label="display" 
    v-model="score" 
    @change="$emit('score', score)"
    outline></v-text-field>
</template>

<script>
  export default {
    props:['display'],
    data: () => ({
      score: 0
    }),
    methods:{
      
    }
  }
</script>

<style>

</style>
