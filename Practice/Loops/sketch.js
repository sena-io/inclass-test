function setup(){
    createCanvas (600, 400);
}

function draw(){
    background(0);
    strokeWeight(2);
    stroke(255);

    // var x = 0;
    // while (x <= width ){
    //     ellipse(x, 200, 25, 25);
    //     x = x + 50;
    // }
    for ( i = 0; i <= width; i =i ++) {
        fill(255,25,255)
        ellipse(i, 200, 25, 25);
    }

}