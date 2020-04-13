class Form {
  constructor() {
    this.input=createInput("name");
    this.button = createButton('Play');
     this.greeting = createElement('h3');
  }
hide(){
  this.greeting.hide();
  this.input.hide();
      this.button.hide();
}
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2, 0);
    
    
    
    this.input.position(displayWidth/2, 160);
   this.button.position(displayWidth/2, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      var name = this.input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + name )
      this.greeting.position(displayWidth/2, 160)
    });

  }
}
