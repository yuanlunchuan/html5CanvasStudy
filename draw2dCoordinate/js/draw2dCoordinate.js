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

drawx();
drawy();