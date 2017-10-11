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
      p.rect(p.width/2, p.height/2, 150, 100, 20);
    }
  }

  // Instead of: new p5(rectangle);
  // Call the publish function. publish receives:
  //  sketch (what the design does)
  //  designName (the title of the design)
  //  authorName (the name of the author of the design)
  publish(rectangle, "Example", "Example");
  
  /* -------- Add your own designs below! -------- */
  
  function wigglingCloud(p) {
    p.yoff = 0;
    
    p.setup = function() {
      p.createCanvas(600, 600);
    }
    
    p.draw = function() {
      p.background(175, 205, 255);
      p.fill(255);
      p.noStroke();
      
      // The real bit
  
      // How many points?
      let num = 256;
      let xoff = 0;
      
      let r = 200;
      let rZero = r + 50 * p.noise(0, p.yoff);
      
      p.beginShape(); // Draw the shape
      for (let i = 0; i < num; i++) {
        
        let a = p.map(i, 0, num, 0, p.TWO_PI);
        
        // Perlin Noise
        let n = r + 50 * p.noise(xoff, p.yoff);
        
        // Making it a loop (so you don't
        // see any cut on the right)
        if (i == 0) {
          rZero = n;
        } else if (i > num*0.95) {
          let percent = p.map(i, num*0.95, num, 0, 1);
          n = p.lerp(n, rZero, percent);
        }
        
        // Polar to Cartesian
        // coordinate transformation
        let x = p.width/2 + n * p.cos(a);
        let y = p.height/2 + n * p.sin(a);
        
        p.vertex(x, y);
    
        p.xoff += 0.1;
      }
      p.endShape(p.CLOSE);
      
      p.yoff += 0.05;
    }
  }
  
  publish(wigglingCloud, "Wiggling Cloud", "Simon Tiger Houben");
  
  function bubble_raindrops(p) {
    p.r = 275;
    p.innerR = 4;
    
    p.setup = function() {
      p.createCanvas(749, 768);
    }
    
    p.draw = function() {
      p.background(0, 191, 255);
      p.translate(p.width/2, p.height/2);
      
      p.fill(255, 150);
      p.noStroke();
      p.ellipse(0, 0, p.r*2, p.r*2);
      
      for (let i = 0; i < 100; i++) {
        let v = p5.Vector.random2D();
        v.mult(p.random(0, p.r-p.innerR));
        
        p.ellipse(v.x, v.y, p.innerR*2, p.innerR*2);
      }
      
      p.noLoop();
    }
  }
  
  publish(bubble_raindrops, "Bubble with Raindrops", "Simon Tiger Houben");
  
  function the_storm(p) {
    
    p.setup = function () { 
      p.createCanvas(400, 400);
    }

    function drawWater() {
  
      p.strokeWeight(2);
      for (var i = 350; i < 400; ++i) {
    
        // Which way should the gradient go?
        var s = p.random() > 0.5 ? 1 : -1;
        var b = p.floor(s == -1 ? p.random(100, 255) : p.random(50, 100)); // Tone increment
        for (var j = 0; j < 400; ++j) {
      
          p.stroke(0, 0, b);
          p.point(j, i + p.random(-20, 20)); // Random height change
          b+=(s * 5);            
        }
      }
    }

    function drawRain()
    {
	    
      p.strokeWeight(2);
  	  for (var i = 0; i < 400; i+=5) {
    	
        // Random positio, inclnation and height
        p.stroke(p.random(25, 100));
        p.push();
        p.rotate(p.random(-p.PI / 10, p.PI / 10));
        p.line(i, p.floor(p.random(0, 150)), i, p.floor(p.random(175, 375)));
        p.pop();
      }
    }

    p.draw = function () { 
  
      p.push();
      p.noStroke();
      
      for (var i = 0; i < 6; ++i) {
  	
        p.fill(20 + (i * 10));
        p.rect(0, i * 50, 400, 50);
      }
  
      drawWater();
      drawRain();
      p.pop();
    }
  }
  
  publish(the_storm, "The Storm", "Juan Robles");
}
