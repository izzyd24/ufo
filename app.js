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


        
    });

}
