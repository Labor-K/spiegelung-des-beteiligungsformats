


// SCROLLAMA STUFF
var scroller = scrollama();

function init() {

  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.5,
    //   debug: true
    })
    .onStepEnter(handleStepEnter);

}


// 2. scrollama event handlers
function handleStepEnter(response) {
  
  // response = { element, direction, index }
  console.log(response);

  // get the data step attribute which has our "stacked, grouped, or percent value"
  var chartType = response.element.getAttribute("data-step")
  changeChart(chartType)

}

// kick things off
init();



// scroll changing functions
function changeChart(value) {

  if (value === "two") stepTwo();
  else if (value === "one") stepOne();
  else if (value === "three") stepThree();
  
  }
//////////////////////// D3 STUFF

var margin = {top: 20, right: 25, bottom: 30, left: 40},
  width = 450 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom;

var svg = d3.select("figure")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

d3.csv("final_data_a.csv", function(data) {

  var myGroups = d3.map(data, function(d){return d.group;}).keys()
  var myVars = d3.map(data, function(d){return d.variable;}).keys()

  var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(myGroups)
    .padding(0.05);
        ///hide axis

/*   svg.append("g")
    .style("font-size", 15)
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0))
    .select(".domain").remove() */

  var y = d3.scaleBand()
    .range([ height, 0 ])
    .domain(myVars)
    .padding(0.05);
    ///hide axis
/*   svg.append("g")
    .style("font-size", 15)
    .call(d3.axisLeft(y).tickSize(0))
    .select(".domain").remove() */



  // TOOLTIP STYLING
  var Tooltip = d3.select("#tooltip")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")

  .style("padding", "5px")

  // MOUSEOVER FUNCTIONALITIES
  var mouseover = function(d) {
    Tooltip
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "black")
      .style("opacity", 1)
  }
  var mousemove = function(d) {
    Tooltip
      .html( d.Name)
      .style("left", (d3.mouse(this)[0]+70) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }
  var mouseleave = function(d) {
    Tooltip
      .style("opacity", 0)
    d3.select(this)
      .style("stroke", "none")
      .style("opacity", 0.8)
  }


  // ADDING SQUARES AS DATA
  svg.selectAll()
    .data(data, function(d) {return d.group+':'+d.variable;})
    .enter()
    .append("rect")
    .attr("class","myRects")
      .attr("x", function(d) { return x(d.group)/1.5 })
      .attr("y", function(d) { return y(d.variable) })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", 35 )
      .attr("height", 35 )
      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 0.8)
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)

    svg.selectAll(".myRects")
    .style("fill", "black")
   
   
   



   
})


function stepOne() {
    svg.selectAll(".myRects")
    .transition().duration(1500)
    .style("fill", "black")}


function stepTwo() {
      svg.selectAll(".myRects")
      .transition().duration(1500)
      .style("fill", function(d) { return d.step2_color })}


      function stepThree() {
      svg.selectAll(".myRects")
      .transition().duration(1500)
      .style("fill", function(d) { return d.step3_color })}






      /////OLD
      TweenLite.defaultEase = Linear.easeNone;
var titles = document.querySelectorAll(".articleTitle");
var controllerb = new ScrollMagic.Controller();
var tl = new TimelineMax();

// create timeline
// this could also be created in a loop
tl.to("#js-slideContainer", 1, {xPercent: -20}, "label1");
tl.from(titles[1], 0.5, {opacity:0}, "label1+=0.5");
tl.to("#js-slideContainer", 1, {xPercent: -40}, "label2");
tl.from(titles[2], 0.5, {opacity:0}, "label2+=0.5");
tl.to("#js-slideContainer", 1, {xPercent: -60}, "label3");
tl.from(titles[3], 0.5, {opacity:0}, "label3+=0.5");
tl.to("#js-slideContainer", 1, {xPercent: -80}, "label4");
tl.from(titles[4], 0.5, {opacity:0}, "label4+=0.5");



new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "500%"
})
  .setPin("#js-wrapper")
  .setTween(tl)
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
  })
  .addTo(controllerb);


     