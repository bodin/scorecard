export default {
  data: {
    currentGame: null,
    games:{}
  },
  newGame: function(){
    this.data.currentGame.newGame();
  }
}
