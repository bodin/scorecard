<template>
<div>
  <b-navbar variant="secondary" type="dark" toggleable="md">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">{{currentGameName}}</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#" @click="newGame">New Game</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Select Game" right>          
          <b-dropdown-item><router-link to="/fiesty">Fiesty Dice</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/qwaxx">Qwaxx</router-link></b-dropdown-item>        
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  <b-container id="cont" class="mt-5 mb-5">  
    <b-row>
        <b-col lg="3" md="0" sm="0"></b-col>
        <b-col lg="6" md="12" sm="12">
          <router-view>           
          </router-view>          
        </b-col>
        <b-col lg="3" md="0" sm="0"></b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>

import Store from './Store.js'

export default {
  name: 'App',
  data : () => ({
    shared : Store.data
  }),
  computed: {
    currentGameName: function(){
      if(this.shared.currentGame){
        return this.shared.currentGame.name
      }else{
        return "Select Game"
      }
    }
  },
  methods: {
    newGame: function(){
      Store.newGame();
    }
  }
}
</script>

<style scoped>
  .container {
    max-width:100%;
  }
</style>
