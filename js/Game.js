class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref('playerCount').once("value")
      if (playerCountRef.exists()){
playerCount=playerCountRef.val();
player.getCount();
      }
      
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    text("game start",120,100)
    Player.getPlayerInfo();
    if(allPlayer==defined){
      var display_position=130
      for (var plr in allPlayer){
if (plr=="player"+player.index){
fill("red")
}else{
  fill("black")
display_position=display_position+20;
textsize(15)
text(allPlayer[plr].name+":"+allPlayer[plr].distance,120,display_position)

}
}
if (keyISDown(UP_ARROW) && player.index==null){
player.distance=player.distance+50;
player.update()
}
}
}
}
