function publish(sketch, designName, authorName) {
  let div = document.createElement("div");
  document.getElementById("designs").appendChild(div);
  let design = new p5(sketch, div);

  design.createElement("h2", designName);
  design.createElement("h4", "by " + authorName);
}
