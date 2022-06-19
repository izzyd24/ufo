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

Here is the script for referencing the js data in data.js, and using functions to create the table with the columns mentioned above: 

Lastly, here is the script to "listen" for events, and search through the date/time column to match user input: 

### Challenge:
Upon modifiying the index.html file, here is the expected output: 
![image](https://user-images.githubusercontent.com/102266450/174499753-010327cf-8e5c-4927-899a-8a03889abda6.png)
Using Js, we replcaed the handleCLick() function in app.js with clickySwitch() function to save the element, value, and id of the filter that was changed. 
We also created a new function, loopyData() to loop through the dataset and keep the results that match the search criteria only. 

## Results:
There is a description of how to perform a search, with images

## Summary:
The summary addresses one drawback of this webpage
The summary addresses two additional recommendations for further development
