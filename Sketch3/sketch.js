function setup() {
	  createCanvas(500,150)
	  startX = 100
	  stopX = 400
	  background(255,255,255);
	  for (var i = 0; i < 10; i++ ) {
		      line(startX,i*10,stopX,i*10)
          }
}

function draw() {

}
