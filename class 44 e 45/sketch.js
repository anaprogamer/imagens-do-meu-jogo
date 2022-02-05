var bibliotecaimg, biblioteca, garotadeipanema, garotadeipanemaimg, estanteimg, estante;

function preload(){
 
  bibliotecaimg = loadImage("img/biblioteca.jpg");
  garotadeipanemaimg = loadImage("img/boneca.png");
  estanteimg = loadImage("img/estante.png");
}

function setup(){
createCanvas(1200,800);

biblioteca = createSprite(600,400);
garotadeipanema = createSprite(570,600);
estante = createSprite(220,500);

garotadeipanema.addImage("boneca",garotadeipanemaimg);
garotadeipanema.scale = 0.1;
biblioteca.addImage ("biblioteca", bibliotecaimg);
biblioteca.scale = 4;
estante.addImage ("estante", estanteimg);
estante.scale = 0.5;
}

function draw(){
  background("green");

  drawSprites();
}
