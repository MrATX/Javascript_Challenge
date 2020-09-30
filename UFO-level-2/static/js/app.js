// Establish Variables
let tableData = data,
    button = d3.select("#filter-btn"),
    reset = d3.select("#reset-btn")
    form = d3.select("form"),
    tbody = d3.select("tbody");

// Console logging data from data.js
console.log(data);

// Loop to populate data into table
data.forEach((sighting) => {
    let row = tbody.append("tr");
    Object.values(sighting).forEach(value => {
        let cell = row.append("td");
        cell.text(value);
    })
})


// Datetime filter function
const runFilter = () => {

    // Prevent refresh on submit
    d3.event.preventDefault();

    // Grab filter input and retrieve relevent data 
    let inputElement = d3.select("#datetime"),
        inputValue = inputElement.property("value");

    // Check output and filter value
    console.log(tableData);
    console.log(inputValue);

    // Assign filter to data & check output
    let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    // Clear table and loop to assign filtered values
    tbody.html("");
    filteredData.forEach((sighting) => {
        let row = tbody.append("tr");
        Object.values(sighting).forEach(value => {
            let cell = row.append("td");
            cell.text(value);
        })
    })
}

// Table reset function
const runReset = () => {
    tbody.html("")
    data.forEach((sighting) => {
        let row = tbody.append("tr");
        Object.values(sighting).forEach(value => {
            let cell = row.append("td");
            cell.text(value);
        })
    })
}

// Event handlers
button.on("click", runFilter);
form.on("submit",runFilter);
reset.on("click", runReset);