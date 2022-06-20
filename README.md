# ufo
## Overview of Project: 
We want to create a live webpage via JavaScript, HTML, CSS and D3 library to create a table with filter options on UFO sightings. We are leveraging the data.js file and referencing its data in our function building sheet, app.js. 
Throughout the process, most difficulties came from path errors in the HTML file or issues when building the functions. 
For instance, when creating the event element that "listens" for a button clicked, I incorrecltly nested the "d3.selectAll("#filter-btn").on("click", handleClick);" within the handleclick function. 
In short, the d3.selectAll method called could not run, and therefore, outputed a blank table. 
Once the path and the nesting issues were fixed via the HTML, and app.js sheets, respectively, I ran and found the following: 
![image](https://user-images.githubusercontent.com/102266450/174498759-1a1b29f3-9fd8-427c-b91a-2dee89767fdc.png)

## Storyboarding: 
Prior to working through the logic of our scripts, we created the following storyboard as a point of reference for our blank webpage:
![image](https://user-images.githubusercontent.com/102266450/174499104-6c5c2f72-4478-4b01-9f67-d2ddbc802f8d.png)

## Scripts Requirements:
We wanted to create the a table and date search (pre-challenge information):
1. Create a custom HTML web page
2. Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to the web page and then adds new rows of data for each UFO sighting
3. Make sure there are columns for date/time, city, state, country, shape, and comment at the very least
4. Use a date form in the HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input

## Scripts In Action: 
### Pre-Challenge:
Here is the script for HTML builds: 
![image](https://user-images.githubusercontent.com/102266450/174505706-37bff75d-e7e2-4ac4-a4e8-ff25ffb4c449.png)

Here is the script for referencing the js data in data.js, and using functions to create the table with the columns mentioned above: 
![image](https://user-images.githubusercontent.com/102266450/174505694-edda32b6-3fcc-4d98-b79d-70092aa3159c.png)

Lastly, here is the script to "listen" for events, and search through the date/time column to match user input: 
![image](https://user-images.githubusercontent.com/102266450/174505691-28481e29-9f72-4083-a4e1-dbf680c884f2.png)

### Challenge and Results:
Upon modifiying the index.html file, here is the expected output: 
![image](https://user-images.githubusercontent.com/102266450/174499753-010327cf-8e5c-4927-899a-8a03889abda6.png)
Using Js, we replcaed the handleCLick() function in app.js with clickySwitch() function to save the element, value, and id of the filter that was changed. 
We also created a new function, loopyData() to loop through the dataset and keep the results that match the search criteria only. 
#### Issues:
Initially, issues came from the 4a-c steps. 
I had to decide how to use the d3.select function for each unique category of filter. 
I tried both as a variable for each, and as an if-else: 
![step 4a-c issues](https://user-images.githubusercontent.com/102266450/174505733-0446de81-1e9a-4648-ad5a-b4ad309835d8.png)
Fixed by doing the following: 
![image](https://user-images.githubusercontent.com/102266450/174505754-a929afe9-d7b0-449f-940b-36cd2559d874.png)
![image](https://user-images.githubusercontent.com/102266450/174505768-5d3b49f6-0cf5-426d-92f7-fd5678a98e89.png)

#### Step 7-10
![image](https://user-images.githubusercontent.com/102266450/174505925-be0befa3-4b12-4615-b2a1-e5add6a98e44.png)
Above, we see the script for the function filterTable. 
This function sets a variable to our tableData from early in the sheet. It then uses the object.entries documentation to bring our filters and keep data that exactly matches those values. 
In step 10, we see a reference to the buildTable function, passing our filteredData variable. 
Finally, we use the d3.selectAll method to "listen" to our events, while loading the page at the bottom. 

## Summary:
### Drawback: 
One drawback I saw was how limiting the filters can be when one category is off. At the very least, it requires the user to be knowledge of a couple categories at once. Oddly enough, the pre-challenge webpage seemed to run with less issues and is more user-friendly. (less filters needed)
### Quick Recommendations:
1. Either drop filters, such as "shape" that are not common to most users understanding OR expanding a paragraph section describing each filter and its sample inputs.
2. Change enter date filter to a date range, that is more forgiving. Ideally, a "slider" in place of the typed out input would be appealing for the user. 

