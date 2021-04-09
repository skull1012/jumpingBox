var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){

    music=loadSound("music.mp3")
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "cyan";

    block4 = createSprite(740,580,200,30);
    block4.shapeColor = "red";



 

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255)
    ball.velocityX=4
    ball.velocityY=4
    //write code to add velocityX and velocityY

}

function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        music.play();
        ball.bounceOff(block1)
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "cyan";
        music.stop();
        ball.velocityX=0
        ball.velocityY=0

    }

    if(block4.isTouching(ball)){
        ball.shapeColor = "red";
        music.play();
        ball.bounceOff(block4)
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        music.play();
        ball.bounceOff(block2)
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
