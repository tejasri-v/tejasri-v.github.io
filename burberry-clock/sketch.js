// setup() is called once at page-load
function setup() {
    createCanvas(600,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();
    
    background(241, 231, 226);
    noStroke();
    
    //hours
    fill(226, 195, 155, 127);
    rect(0,0, 600, 600);
    rect((hr*25)-600,0, 600, 600);
    stroke(226, 195, 155);
    strokeWeight(4);
  
    line(12*25,0,12*25,600);

    noStroke();
    //minutes
    let minWidth = 600/55;
    //vertical
    fill(51, 46, 42, 127);
    rect((min-1)*minWidth, 0, minWidth, 600);
    rect((min-1)*minWidth - 2*minWidth, 0, minWidth, 600);
    rect((min-1)*minWidth - 4*minWidth, 0, minWidth, 600);
    fill(250, 246, 237, 127);
    rect((min-1)*minWidth - 1*minWidth, 0, minWidth, 600);
    rect((min-1)*minWidth - 3*minWidth, 0, minWidth, 600);
    //horizontal
    fill(51, 46, 42, 127);
    rect(0, 600-min*minWidth, 600, minWidth);
    rect(0, 600-min*minWidth + 2*minWidth, 600, minWidth);
    rect(0, 600-min*minWidth + 4*minWidth, 600, minWidth);
    fill(250, 246, 237, 127);
    rect(0, 600-min*minWidth + 1*minWidth, 600, minWidth);
    rect(0, 600-min*minWidth + 3*minWidth, 600, minWidth);
    
    //seconds
    let secWidth = 600/59;
    fill(123, 36, 29, 127);
    //vertical
    rect((sec-1)*secWidth, 0, secWidth, 600);
    //horizontal
    rect(0,600-sec*secWidth,600,secWidth);
  
}
