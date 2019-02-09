<template>
  <b-container>
      <b-row>
          <b-col></b-col>
          <b-col>
            <FiestyDice/>
          </b-col>
          <b-col></b-col>
      </b-row>
  </b-container>
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
      //
    }
  }
}
</script>
