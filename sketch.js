var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    // carregue o som aqui
    music = loadSound("music.mp3",musica);
}

function setup(){
    tela = createTela(800,600);

    bloco1 = createSprite(0,580,200,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(200,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(400,580,200,30);
    bloco3.shapeColor = "pink";

    bloco4 = createSprite(600,580,200,30);
    bloco4.shapeColor = "red";

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    bola.velocityX = 4;
    bola.velocityY = 4;

}

function draw() {
    background(rgb(169,169,169));
    arestas=createArestasprites();
    bola.bounceOff(arestas);

    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        bola.velocityX = 0
        music.play();
    }

    
    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "pink";
        music.play();
    }
    
    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "red";
        music.play();
    }
    drawSprites();
}