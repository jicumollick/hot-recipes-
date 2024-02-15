# Hot Recipes App

This is a simple React application that allows users to search for recipes using the Edamam API.

## Getting Started

### Follow these steps to run the app on your local machine:

## Prerequisites

### Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com)


### Clone the repository to your local machine using the following command:

git clone https://github.com/jicumollick/hot-recipes.git


### Navigate to the project directory:
cd hot-recipes

### Install the dependencies:
npm install

### Set up environment variables:

Create a file named .env in the root directory of the project.

### Add the following lines to the .env file:

REACT_APP_APP_ID=12daff5d
REACT_APP_APP_KEY=d80d6eb110f1b2c5141364d4c673c98a


### Start the development server:

npm start
Open your web browser and navigate to http://localhost:3000 to view the app.

## Features
### ==> Search for recipes by entering keywords in the search bar.
### ==> Filter recipes by selecting categories from the dropdown menu.
### ==> Pagination support for browsing multiple pages of search results.
### ==> Responsive design for optimal viewing on various devices.

## Challenge Faced
1)  I have integrated a wrong API from spoonacular, which was time bound with 150 call per day. after 150 api hit, it was throwing error. i got stuck. then i choose edamam api to integrate. it took me 2 hours.
2) it was hitting api for each character change before, then I added debounce technique to solve that. overall it was an easy assignment.
