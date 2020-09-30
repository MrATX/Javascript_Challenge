// Establish Variables
let tableData = data,
    button = d3.select("#filter-btn"),
    reset = d3.select("#reset-btn"),
    filreset = d3.select("#filreset-btn")
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

    // Date filter
    let dateData = data,
        dateFilter = d3.select("#datefil"),
        dateValue = dateFilter.property("value");
    if (dateValue != "") {
        dateData = tableData.filter(sighting => sighting.datetime.includes(dateValue));
    } 
    // City filter
    let cityData = dateData,
        cityFilter = d3.select("#cityfil"),
        cityValue = cityFilter.property("value");
    if (cityValue != "") {
        cityData = dateData.filter(sighting => sighting.city.includes(cityValue));
    }
    // State filter
    let stateData = cityData,
        stateFilter = d3.select("#statefil"),
        stateValue = stateFilter.property("value");
    if (stateValue != "") {
        stateData = cityData.filter(sighting => sighting.state.includes(stateValue));
    }
    // Country filter
    let countryData = stateData,
        countryFilter = d3.select("#countryfil"),
        countryValue = countryFilter.property("value");
    if (countryValue != "") {
        countryData = stateData.filter(sighting => sighting.country.includes(countryValue));
    }
    // Shape filter
    let shapeData = countryData,
        shapeFilter = d3.select("#shapefil"),
        shapeValue = shapeFilter.property("value");
    if (shapeValue != "") {
        shapeData = countryData.filter(sighting => sighting.shape.includes(shapeValue));
    }
    // Assign filter to data & check output
    let filteredData = shapeData
    console.log(filteredData)


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

const runFilreset = () => {
    location.reload(true);
}

// Event handlers
button.on("click", runFilter);
form.on("submit",runFilter);
reset.on("click", runReset);
filreset.on("click",runFilreset);