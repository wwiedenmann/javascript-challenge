var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach(function(sighting) {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
}); 

var dateFilter = d3.select("#filter-btn");

dateFilter.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredTable = tableData.filter(dates => dates.datetime === inputValue);

    d3.selectAll("td").remove();
    filteredTable.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});