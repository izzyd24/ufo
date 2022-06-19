// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
// will store ID + value entered from user input for step 5
var filters = {};


// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a-csave the value, id, and element changed
    // refactored largely from handleClick() in app_1.js
    // others have used filters.datetime = in place of a var call?
    const datetimeFilter=d3.select("#datetime").property("value").toLowerCase();
    const cityFilter=d3.select("#city").property("value").toLowerCase();
    const stateFilter=d3.select("#state").property("value").toLowerCase();
    const countryFilter=d3.select("#country").property("value").toLowerCase();
    const shapeFilter=d3.select("#shape").property("value").toLowerCase();

    // 5. If a filter value was entered... then 
    // add that filterId and value to the filters list. 
    // Otherwise, clear that filter from the filters object.
    // documentation help:
    // https://stackoverflow.com/questions/25421233/javascript-removing-undefined-fields-from-an-object
    Object.keys(filters).forEach(key => filters[key] === "" ? delete filters[key] : {});
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    
  }
  
  // 2. Attach an event to listen for changes to each filter
  
  
  // Build the table when the page loads
  buildTable(tableData);
