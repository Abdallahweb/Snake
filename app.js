
var Score = 0;
class Item {
constructor(shape, x, y) {
this.shape = shape;
this.x = x;
this.y = y;
this.shape.style.left = x + "px";
this.shape.style.top = y + "px";
}
}

class Game extends Item{
constructor(shape, x, y) {
super(shape, x, y);
}

redirect(){
this.x = Random(window.innerWidth - 80);
this.y = Random(window.innerHeight - 80);
this.shape.style.left = this.x + "px";
this.shape.style.top = this.y + "px";
}


moveUp(){
this.y -= 80;
this.shape.style.top = this.y + "px";
document.getElementById("SnakeImg").style.rotate = "0deg";
document.getElementById("SnakeImg").style.rotate = "-90deg";

}
moveDown(){
this.y += 80;
this.shape.style.top = this.y + "px";
document.getElementById("SnakeImg").style.rotate = "0deg";
document.getElementById("SnakeImg").style.rotate = "90deg";

}

moveLeft(){
this.x -= 80;
this.shape.style.left = this.x + "px";
document.getElementById("SnakeImg").style.rotate = "0deg";
document.getElementById("SnakeImg").style.rotate = "180deg";

}

moveRight(){
this.x += 80;
this.shape.style.left = this.x + "px";
document.getElementById("SnakeImg").style.rotate = "0deg";

}


Eat(){

if(Snake.x === Food.x && Snake.y === Food.y){
  Score +=50;
  Food.redirect() ;
  document.getElementById("Score").innerHTML = "Score : " + Score   ;

}

}



}




function Random(end) {
let value = Math.round(Math.random() * end);
return value - (value % 80);
}
let Food = new Game(document.getElementById("FoodImg"), Random(window.innerWidth - 80), Random(window.innerHeight - 80));

let Snake = new Game( document.getElementById("SnakeImg"), Random(window.innerWidth - 80), Random(window.innerHeight - 80));

let ToTop = document.getElementById("ToTop").addEventListener("click" ,Top );
let ToLeft = document.getElementById("ToLeft").addEventListener("click" ,Left );
let ToDown = document.getElementById("ToDown").addEventListener("click" ,Down );
let ToRight = document.getElementById("ToRight").addEventListener("click" ,Right );


function Top(){
if(Snake.y > 0){
Snake.moveUp();
Snake.Eat();
}}

function Left(){
if(Snake.x > 0 ){
Snake.moveLeft();
Snake.Eat();
}}

function Down(){
 if(Snake.y < window.innerHeight - 150){
Snake.moveDown();
Snake.Eat();
}}

function Right(){
if(Snake.x < window.innerWidth - 150){
Snake.moveRight();
Snake.Eat();
}}



window.addEventListener("keydown",e=>{
switch(e.keyCode){
case 38:{
if(Snake.y > 0){
Snake.moveUp();
Snake.Eat();
// setTimeout(Snake.Eat, 2000);

}

break;
}
case 40:{
  if(Snake.y < window.innerHeight - 150){
Snake.moveDown();
Snake.Eat();
// setTimeout(Snake.Eat, 2000);

}

break;
}
case 37:{
if(Snake.x > 0 ){
Snake.moveLeft();
Snake.Eat();
// setTimeout(Snake.Eat, 2000);

}

break;
}
case 39:{
    if(Snake.x < window.innerWidth - 150){
Snake.moveRight();
Snake.Eat();
// setTimeout(Snake.Eat, 2000);

    }
break;
}
}


})



$(document).onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
};
$(document).keypress("u",function(e) {
  if(e.ctrlKey)
  {
return false;
}
else
{
return true;
}
});

document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);


$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});

 document.addEventListener("keydown", function (event){

  if (event.ctrlKey){

     event.preventDefault();

  }

  if(event.keyCode == 123){

     event.preventDefault();

  }

})

