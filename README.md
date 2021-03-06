## HubStaff Job Search
HubStaff Job Search offers candidates to search for jobs based on
a set of filters.This app is created using Reactjs, Redux, Nodejs.
The site is hosted using Heroku (https://hubstaffjobsearch.herokuapp.com). The backend API consumed by the UI is hosted at the following endpoint (https://hubstaffapi.herokuapp.com/)

## Getting Started.
To start this application on your application on your local system,
clone from this stash and follow the following instructions
1) npm install
2) npm start

The site will be by default hosted on port 8080 in the following url 
https://localhost:8080

![Example gif](./Screenshot.png)

## Table of Contents

The below component are used in this application
- [button](#button)
- [checkbox](#checkbox)
- [dropdown](#dropdown)
- [slider](#slider)
- [pagination](#pagination)
- [textbox](#textbox)

## button

| Name  		|	 Type 		|Description   					   |	
| ------------- | ------------- |--------------------------------- |
| className		| String	    |Optional.The classname to be used |
| type		    | String		|Optional. The type of the button  |
| btnSearchTxt	| Function		|Optional. Value of the button     |

## checkbox 

| Name  		|	 Type 		|Description   					   |	
| ------------- | ------------- |--------------------------------- |
| selected		| String	    |Optional. The selected value	   |

## pagination

| Name  		|	 Type 		|Description   					   		|	
| ------------- | ------------- |-------------------------------------- |
| currentPage	| Number	    |Optional.The value of the current page |

## slider

| Name  		|	 Type 		|Description   					   				|	
| ------------- | ------------- |--------------------------------------------- 		|
| value			| Array		    |Optional.The start and end value of slider   	|

## select
| Name  		|	 Type 		|Description   					   							|	
| ------------- | ------------- |-----------------------------------------------------------|
| option		| Array		    |Optional.The option for the select dropdown				|
| placeholder	| String	    |Optional.The placeholder of the dropdown  					|
| defaultValue	| String		|Optional.The default value of the dropdown   				|
| mode			| String	    |Optional.The mode of the dropdown (Single/Multi)			|

## Future Enhancements
	- Including options for profiles with search rates. 
	- Including slider for filters in smaller devices.


