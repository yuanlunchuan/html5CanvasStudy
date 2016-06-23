var canvas = document.getElementById('coordinate'),
    ORIGIN_X = 10,
    ORIGIN_Y = 400,
    X_LENGTH = 990,
    context = canvas.getContext('2d');

function drawx() {
  context.moveTo(ORIGIN_X, ORIGIN_Y);
  context.lineTo(X_LENGTH, ORIGIN_Y);
  context.stroke();

  for(var x=ORIGIN_X; x<X_LENGTH+10; x+=10){
    context.moveTo(x, ORIGIN_Y);
    if (x%100) {
      context.lineTo(x, ORIGIN_Y-10);
    }else{
      context.lineTo(x, ORIGIN_Y-20);
    }
    context.stroke();
  }
}

function drawy() {
  context.moveTo(ORIGIN_X, 10);
  context.lineTo(ORIGIN_X, ORIGIN_Y);
  context.stroke();

  for(var y = 10; y<ORIGIN_Y; y+=10){
    context.moveTo(ORIGIN_X, y);
    if (y%100) {
      context.lineTo(ORIGIN_X+10, y);
    }else{
      context.lineTo(ORIGIN_X+20, y);
    }
    context.stroke();
  }
}

function drawSin() {
  var x = Math.PI/2.0;
  var y = 50*Math.sin(0.01*Math.PI);
  context.moveTo(10, y+200);

  for(var i=1; i<500;i++){
    x = i*(Math.PI/2.0)+10;
    y = 50*Math.sin(0.01*Math.PI*x);
    context.lineTo(x, y+200);
  }
  context.stroke();
}

drawx();
drawy();
drawSin();
















var paint = false;
var i=1;

canvas.addEventListener('mousedown', function(e){
  paint = true;
  console.info("-----------e: "+JSON.stringify(e));
  context.moveTo(100,100);
});

canvas.addEventListener('mousemove', function(){
  if (paint) {
    i++;
    context.lineTo(100+10*i,100+10*i);
    console.info("--------start draw---"+100+10*i);
    context.stroke();
  }
});

canvas.addEventListener('mouseup', function(){
  paint = false;
});
