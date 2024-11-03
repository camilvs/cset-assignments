const canvas= document.querySelector('canvas');
const context =  canvas.getContext("2d");
let x1 = 100;
let y1 =100;
let x2 = 200;
let y2 =200;
let directionx1= 1;
let directiony1= 1;
let directionx2= 1;
let directiony2= 1;
let ballColor1='lightblue';
let ballColor2='blue';
let radius= 10;
let speedx = 1;
let speedy = 1;
let FPS= 60;
function animate(){
    clear();
    ball1();
    ball2();
    update();
    update2();

} 
function update(){
    if (y1+ radius >=canvas.height){// bottom wall
    
        directiony1= -1;
    }
    if (y1- radius <=0){//top wall
    
        directiony1= 1
    }
    if (x1+ radius >=canvas.width){//right wall
    
        directionx1= -1;
    }

    if(x1- radius <= 0){//left wall
        directionx1=1;
    }
    x1+=speedx*directionx1;
    y1+=speedy*directiony1;

}
function update2(){
    if (y2+ radius >=canvas.height){// bottom wall
    
        directiony2= -1;
    }
    if (y2- radius <=0){//top wall
    
        directiony2= 1
    }
    if (x2+ radius >=canvas.width){//right wall
    
        directionx2= -1;
    }

    if(x2- radius <= 0){//left wall
        directionx2=1;
    }
    x2+=speedx*directionx2;
    y2+=speedx*directiony2;

}
function clear(){
    context.fillStyle = 'rgb(0,0,0,0.3)';
    context.fillRect(0,0,canvas.width,canvas.height);

}
//function definition
function ball1(){
    context.fillStyle = ballColor1;
    context.beginPath();
    context.arc(x1,y1,radius,0, 2*Math.PI);
    context.fill();
    context.closePath();
}
function ball2(){
    context.fillStyle = ballColor2;
    context.beginPath();
    context.arc(x2,y2,radius,0, 2*Math.PI);
    context.fill();
    context.closePath();

}

window.setInterval(animate, FPS/1000);