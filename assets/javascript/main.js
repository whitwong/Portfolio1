/****************index.html js*****************/
// Coin flip 
$(document).on("click", "#flip", function(){
	$("#coin").toggleClass("flipped");
});

/****************portfolio.html js*****************/
// Array to hold information for each project card
var projects = [
	{
		title: "Got Plans",
		image: "assets/images/gotplans.PNG",
		repo: "https://github.com/whitwong/gotPlans",
		site: "https://whitwong.github.io/gotPlans/",
		deploy: "GitHub Pages",
		description: "Team project to build a food application that returns recipes and restaurant suggestions for users. The application has "+
		"logic to choose a dine-in or dine-out suggestion for the indecisive user. The application makes AJAX requests to the Zomato API to return "+
		"restaurant results and to the Yummly API to return recipe results. Features include user authentication with Firebase to allow users to "+
		"access stored favorite recipes and restaurants for later site visits.",
		tech: "AJAX, API, Firebase, Media Queries, jQuery, JavaScript, HTML, CSS"
		// tech: ["AJAX", "API", "Firebase", "Media Queries", "jQuery", "JavaScript", "HTML", "CSS"]
	},
	{
		title: "Flashcard Generator",
		image: "assets/images/flashcard.PNG",
		repo: "https://github.com/whitwong/flashcards-generator",
		site: "https://flashcard-generator.herokuapp.com/",
		deploy: "Heroku Page",
		description: "Created a full stack application to generate flashcards. User is able to create two types of flashcards, basic and cloze. "+
		"After submitting the information, the new flashcard is generated on the page and can be flipped back and forth. GET and POST requests "+
		"are used to send information to and from the server.",
		tech: "Node.js, Express, jQuery, HTML, CSS, JavaScript"
	},
	{
		title: "Eat-Da-Burger",
		image: "assets/images/burger.PNG",
		repo: "https://github.com/whitwong/burger",
		site: "https://whitney-burger.herokuapp.com/",
		deploy: "Heroku Page",
		description: "A full stack application that displays all burgers in a MySQL database, adds new burger data to the same database, and "+
		"updates the eaten/not eaten status of a burger. Each change to the database initiates a page reload to show the changes. ",
		tech: "Node.js, Express, MySQL, MVC, ORM, Handlebars, JavaScript, CSS"
	},
	{
		title: "Train Scheduler",
		image: "assets/images/trainscheduler.PNG",
		repo: "https://github.com/whitwong/TrainScheduler",
		site: "https://whitwong.github.io/TrainScheduler/",
		deploy: "GitHub Pages",
		description: "Created a Train Scheduler using Firebase and JavaScript. This application takes the values entered into the form by "+
		"the user and stores them into Firebase. Firebase persists the data added it. The user also has ability to delete a train, which "+
		"removes the data from Firebase and updates the page accordingly. Moment.js is used to format the time data displayed on the scheduler.",
		tech: "Firebase, Moment.js, Bootstrap, jQuery, JavaScript, HTML, CSS"
	},
	{
		title: "Gif Generator",
		image: "assets/images/gifgenerator.PNG",
		repo: "https://github.com/whitwong/GifGenerator",
		site: "https://whitwong.github.io/GifGenerator/",
		deploy: "GitHub Pages",
		description: "Created a Gif Generator with a Superhero theme. This application allows users to input new characters and creates "+
		"new character buttons. When a user selects a button, an AJAX request is made to the Giphy API and returns 10 gifs. These 10 gifs "+
		"are appended to the page. The still and animated states of the gifs can be toggled on and off by clicking on the gif.",
		tech: "API, AJAX, Bootstrap, HTML, CSS, JavaScript"
	},
	{
		title: "Bamazon",
		image: "assets/images/bamazon.PNG",
		repo: "https://github.com/whitwong/Bamazon",
		site: "",
		deploy: "",
		description: "CLI application that is an Amazon-like storefront that has 3 user options: Customer, Manager, and Supervisor. "+
		"The application takes in orders from customers and depletes the store's inventory. Additional functions include adding new products "+
		"to the store, adding inventory to existing products, tracking product sales across the store's departments, and providing a summary of "+
		"the departments' total profit.",
		tech: "Node.js, MySQL, JavaScript"
	},
	{
		title: "Hangman Game",
		image: "assets/images/hangman.PNG",
		repo: "https://github.com/whitwong/Hangman-Game",
		site: "https://whitwong.github.io/Hangman-Game/",
		deploy: "GitHub Pages",
		description: "Created a Hangman game with an Avatar: The Last Airbender theme. JavaScript was used to handle the logic of randomly "+
		"selecting a word, replacing blanks with correct letters, wins / loses, and tracking the number of guesses remaining.",
		tech: "Bootstrap, HTML, CSS, JavaScript"
	},
	{
		title: "Trivia Game",
		image: "assets/images/triviagame.PNG",
		repo: "https://github.com/whitwong/TriviaGame",
		site: "https://whitwong.github.io/TriviaGame/",
		deploy: "GitHub Pages",
		description: "Created a Trivia game with an Avatar: The Last Airbender theme. This project uses setInterval to allow a set amount "+
		"of time to answer each question and setTimeout to play gifs in between each question.",
		tech: "jQuery, setTimeout, HTML, CSS, JavaScript"
	}
];
// Create project cards and append to DOM
for (var i=0; i<projects.length; i++){
	var projectCard = (
		"<div class='card sticky-action'>" +
			"<div class='card-image waves-effect waves-block waves-light'>"+
				"<img class='activator' src='" + projects[i].image +"'>" +
			"</div>" +
			"<div class='card-content'>" +
				"<span class='card-title activator grey-text text-darken-4'>" + projects[i].title +"<i class='material-icons right'>more_vert</i></span>" +
			"</div>" +
			"<div class='card-action'>" +
				"<a href='" + projects[i].repo + "' target='_blank'>GitHub Repo</a>" +
				"<a href='" + projects[i].site + "' target='_blank'>" + projects[i].deploy + "</a>" +
			"</div>" +
			"<div class='card-reveal'>" +
				"<span class='card-title grey-text text-darken-4'>" + projects[i].title + "<i class='material-icons right'>close</i></span>" +
				"<p>" + projects[i].description + "</p>" +
				"<p>Tech: " + projects[i].tech + "</p>" +
			"</div>" + 
		"</div>");

	$("#portfolio-content").append(projectCard);
}

/****************contact.html js*****************/
// Key ID: dead83e5481e627f19858e53d7b6412b1afc9c04
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBmRN9o_QNlH8n9yAh2KH3a9o1Yb1GgtZ0",
  authDomain: "portfolio-cbbc6.firebaseapp.com",
  databaseURL: "https://portfolio-cbbc6.firebaseio.com",
  projectId: "portfolio-cbbc6",
  storageBucket: "portfolio-cbbc6.appspot.com",
  messagingSenderId: "406600537588"
};
firebase.initializeApp(config);
// Define variable to hold firebase.database()
var database = firebase.database();
// Declare initial variables to store user input into firebase
var name = "", email = "", message = "", time = "";
// Click event to store input data into firebase
$("#submit").on("click", function(event){
	event.preventDefault();
	// Grab data from contact page
	name = $("#name").val().trim();
	email = $("#email").val().trim();
	message = $("#message").val().trim();
	time = Date.now();
	timeMessage = moment(time).format("MM-DD-YYYY, h:mm a");
	// Set condition so that data is not stored unless all data fields are entered
	if (name === "" || email === "" || message === ""){
		swal({
		  title: "Oops...",
		  text: "You need to fill in all the required fields!",
		  type: "error",
		  confirmButtonText: "Close",
		  allowOutsideClick: false
		});
	} else {
		// Initial database reference
		database.ref().push({
			Name: name,
			Email: email,
			Message: message,
			Time: timeMessage
		});
		// Clear input fields
		$("#name").val("");
		$("#email").val("");
		$("#message").val("");
	}
});