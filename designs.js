// Edit this file to publish a design

window.onload = () => {

  // Example rounded rectangle design
  function rectangle(p) {
    p.setup = function() {
      p.createCanvas(200, 200);
    }

    p.draw = function() {
      p.background(102);
      p.rectMode(p.CENTER);
      p.rect(width/2, height/2, 150, 100, 20);
    }
  }

  // Instead of: new p5(rectangle);
  // Call the publish function. publish receives:
  //  sketch (what the design does)
  //  designName (the title of the design)
  //  authorName (the name of the author of the design)
  publish(rectangle, "Example", "Example");

}
