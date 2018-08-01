
function setup() {
	  createCanvas(500,150);
	  var startX = 100;
	  var stopX = 400;
	  background(255,255,255);
	  strokeWeight(2);
	  for ( var i = 0; i < 10; i++ ) {
             if ( i%2 == 0 ) {
               stroke(255,0,0);
	     } else {
	       stroke(0,0,255);
	     }
	   line(startX,i*10,stopX,i*10);
	  }
}

function draw() {

}
