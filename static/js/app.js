// from data.js
var tableData = data;

// YOUR CODE HERE!

// Define table body 
var tbody = d3.select("tbody");

tableData.forEach((info) => {
    var row = tbody.append("tr");
    Object.entries(info).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);

    });
});

  // Define buttons
var button = d3.select("#filter-btn");
var button1 = d3.select("#filter-btn11");
var button2 = d3.select("#filter-btn1");
var button3 = d3.select("#filter-btn2");
var button4 = d3.select("#filter-btn3");

// Define filter functions and assign to event listners.
function filter0() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var newtableData = tableData.filter(item => item.datetime === inputValue);
    tbody.html("");
    newtableData.forEach((info) => {
        var row = tbody.append("tr");
        Object.entries(info).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

button.on("click", filter0);

button1.on("click", function (){
    d3.event.preventDefault();
    inputElement0 = d3.select("#city1");
    var inputValue0 = inputElement0.property("value");
    var newtableData0 = tableData.filter(item => item.city === inputValue0);
    tbody.html("");
    newtableData0.forEach((info) => {
        var row = tbody.append("tr");
        Object.entries(info).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});


function filter1(){
    d3.event.preventDefault();
    inputElement1 = d3.select("#state1")
    var inputValue1 = inputElement1.property("value");
    var newtableData = tableData.filter(item => item.state === inputValue1);
    tbody.html("");
    newtableData.forEach((info) => {
        var row = tbody.append("tr");
        Object.entries(info).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);
        })})
};
button2.on("click", filter1);

function filter2(){
    d3.event.preventDefault();
    inputElement2 = d3.select("#state1")
    var inputValue2 = inputElement2.property("value");
    var newtableData = tableData.filter(item => item.state === inputValue2);
    tbody.html("");
    newtableData.forEach((info) => {
    var row = tbody.append("tr");
    Object.entries(info).forEach(([key, value])=> {
        var cell = row.append("td");
        cell.text(value);})});
};
button3.on("click", filter2);


function filter3(){
    d3.event.preventDefault();
    inputElement3 = d3.select("#country1");
    var inputValue3 = inputElement3.property("value");
    var newtableData = tableData.filter(item => item.country === inputValue3);
    tbody.html("");
    newtableData.forEach((info) => {
    var row = tbody.append("tr");
    Object.entries(info).forEach(([key, value])=> {
        var cell = row.append("td");
        cell.text(value);})})
};
button3.on("click", filter3);

function fliter4(){
    d3.event.preventDefault();
    inputElement4 = d3.select("#shape1");       
    var inputValue4 = inputElement4.property("value");
    var newtableData = tableData.filter(item => item.shape === inputValue4);
    tbody.html("");
    newtableData.forEach((info) => {
    var row = tbody.append("tr");
    Object.entries(info).forEach(([key, value])=> {
        var cell = row.append("td"); 
        cell.text(value);})})
};
button4.on("click", fliter4);

