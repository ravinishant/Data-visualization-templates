 var w = 300;
var h = 300;
var padding = 2;
var dataset = [5,10,14,20,25, 10, 23, 20, 21, 5, 8];
var svg = d3.select("body").append("svg")
            .attr("width",w)
            .attr("height",h);

function colorPicker(v) {
  if(v<=20) { return "#666666"; }
  else if(v>20) {return "#FF0033";}
}

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
.attr({
  x: function(d,i) { return i * (w/dataset.length);},
      y: function(d,i) {    return h - d*6;  },
      width: w/dataset.length - padding,
      height: function (d,i) {   return d*6;},
fill: function(d) {  
  //return "rgb(50, " + (d*d) + ", 20)";}
  return colorPicker(d);
}
});

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function (d) {
  return d;
})
.attr({
  "text-anchor" : "middle",
  x: function (d,i) { return i * (w/dataset.length) + (w/dataset.length - padding)/2;},
  y: function (d) { return h - (d*6);},
  "font-family": "sans-serif",
  "font-size": 12,
  "font-weight": "bold"
});
