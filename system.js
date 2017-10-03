// Publisher
function publish(sketch, designName, authorName) {
  // Create the <div> element
  // for the design
  let div = document.createElement("div");
  document.getElementById("designs").appendChild(div);
  let design = new p5(sketch, div);
  
  // Adding some info
  design.createElement("h2", designName);
  design.createElement("h4", "by " + authorName);
}
