// import thedata from data.js file 
const tableData = data;
// point to the data to our HTML page
// use d2 tag, reference tbody for table usage
// declared tbdoy var, d2.select to tell js to look for <tbody> tags in html
var tbody = d3.select("tobody");

// create a self contained function
// function will hold all table data for UFO sightings
// itterate through objects from data file, append to table row

function buildTable(data){
    // Why not arrow function?
    // using js standard function NOT arrow b/c inserting function inside

    // clear data first
    tbody.html("");

    // use for each function to start the for loop
    data.array.forEach(dataRow => {
        // once chained the for loop, now append the dataRow argument
        // represent ach row of data as we iterate through the array
        // use let to limit variable to this code block
        // go to <tbody? tag in HTML, within that, add a table row tr
        let row = tbody.append("tr");

        // loop through each field in dataRow
        // fields will be wrapped in <td> tags when appended to html table
        // obj.val references one object from array of ufo sightings
        // want values to go into dataRow
        // foreachval specifies need for one object per row
        Object.values(dataRow).forEach((val) => {
            // append each val of object to cell in the table
            let cell = row.append("td");
            // add the values after the appended data placed into table data tag
            cell.text(val);
        });
// use d3 system to let user click a button for filtering
function handleClick(data){
    // .select to select first element that matches datetime id within the tags
    // chained .property val to select function to look for date values
    // ... stored on webpage, and grab that info, hold in "date" var
    let date = d3.select("#datetime").property("value");
    // take tableData as oringinal data imported from data.js
    // created a var to our raw data to have blank slate 
    // run each time filter button is clicked, if no date entered
    // ... then all data returned instead 
    let filteredData = tableData;

    if (date){
        // we take filteredData, a new var since we used let above
        // and we apply a filter to match datetime value to filtered date value
        filteredData = filteredData.filter
        // .filter method line applies filter to table data\
        // show only row where the date = date filter 
        (row => row.datetime=== date);

        // call our function to build table from above
        //rebuilds the table using the filtered data
        // if no date, then filterdata will be original tableData
        buildTable(filteredData);

        // Attach an event to listen for the form button
        // tells us when click occurs
        // filterbtn is the selector, contains id for html tag
        //.on tells d3 to execute the handleClick function 
        // when id === filter-btn clicked
        d3.selectAll("#filter-btn").on("click", handleClick);

        // Build the table when the page loads
        // creates a basic table with rows of unfiltered data
        buildTable(tableData);
    };


}

        
    });

}
