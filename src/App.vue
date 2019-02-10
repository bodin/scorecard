<template>
<div>
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">{{game}}</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#">New Game</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Select Game" right>
          <b-dropdown-item href="#">Fiesty Dive</b-dropdown-item>
          <b-dropdown-item href="#">Yotze</b-dropdown-item>          
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  <b-container class="mt-5">  
    <b-row>
        <b-col lg="3" sm="0"></b-col>
        <b-col lg="6" sm="12">
          <FiestyDice/>
        </b-col>
        <b-col lg="3" sm="0"></b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import FiestyDice from './components/FiestyDice'

export default {
  name: 'App',
  components: {
    FiestyDice
  },
  data () {
    return {
      game: "Fiesty Dice"
    }
  }
}
</script>
