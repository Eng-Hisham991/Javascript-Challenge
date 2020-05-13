// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((info) => {
    var row = tbody.append("tr");
    Object.entries(info).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);

    });
  });

var button = d3.select("#filter-btn");
var button1 = d3.select("#filter-btn");
var button2 = d3.select("#filter-btn1");

button1.on("click", function(){
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
});



button2.on("click", function(){
    d3.event.preventDefault();
    var inputElement0 = d3.select("#datetime1");
    var inputElement1 = d3.select("#city1");
    var inputElement2 = d3.select("#state1");
    var inputElement3 = d3.select("#country1");
    var inputElement4 = d3.select("#shape1"); 
    if (inputElement0){
        var inputValue = inputElement0.property("value");
        var newtableData = tableData.filter(item => item.datetime === inputValue);
        tbody.html("");
        newtableData.forEach((info) => {
        var row = tbody.append("tr");
        Object.entries(info).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);})})}
    else if (inputElement1){
        var inputValue = inputElement1.property("value");
        var newtableData = tableData.filter(item => item.city === inputValue);
        tbody.html("");
        newtableData.forEach((info) => {
        var row = tbody.append("tr");
        Object.entries(info).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);
        })})
    }
    else if (inputElement2){
        var inputValue = inputElement2.property("value");
        var newtableData = tableData.filter(item => item.state === inputValue);
        tbody.html("");
        newtableData.forEach((info) => {
        var row = tbody.append("tr");
        Object.entries(info).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);})});
    }
    else if (inputElement3){
        var inputValue = inputElement3.property("value");
        var newtableData = tableData.filter(item => item.country === inputValue);
        tbody.html("");
        newtableData.forEach((info) => {
        var row = tbody.append("tr");
        Object.entries(info).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);})})
    }
    else if (inputElement4) {
        var inputValue = inputElement4.property("value");
        var newtableData = tableData.filter(item => item.shape === inputValue);
        tbody.html("");
        newtableData.forEach((info) => {
        var row = tbody.append("tr");
        Object.entries(info).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);})})
        }
    else {
        console.log("try again!");
    }
    
});
