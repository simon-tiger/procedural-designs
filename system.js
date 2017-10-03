function publish(sketch, designName, authorName) {
  let div = document.createElement("div");
  div.className = "w3-panel w3-white";
  document.getElementById("designs").appendChild(div);
  let design = new p5(sketch, div);

  design.createElement("h2", designName);
  design.createElement("h4", "by " + authorName);
}
