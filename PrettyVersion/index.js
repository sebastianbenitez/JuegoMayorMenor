
var random1 = Math.floor(Math.random()*100);
var random2 = Math.floor(Math.random()*100);

document.addEventListener('DOMContentLoaded', function() {
	
	var h2Number1 = document.getElementById('h2--number-1');
	h2Number1.innerHTML = random1;

	var spanResponse = document.getElementById('span--response');
	var divNumber2Container = document.getElementById('div--number-2-container');
	//var divGameButtonsContainer = document.getElementById('div--game-buttons-container');
	
	document.getElementById('btn--higher').addEventListener('click', function() {
		playGame('higher', spanResponse, divNumber2Container);
	});
	document.getElementById('btn--lower').addEventListener('click', function() {
		playGame('lower', spanResponse, divNumber2Container);
	});
},false);


function validateHigherLower(guess) {
	return (guess == 'higher' && random2 > random1) || (guess == 'lower' && random2 < random1);
}

function setSuccessResponse(spanResponse) {
	spanResponse.classList.remove('fa-times-circle','text-danger');
	spanResponse.classList.add('fa-check-circle','text-success');
}

function setErrorResponse(spanResponse) {
	spanResponse.classList.remove('fa-check-circle','text-success');
	spanResponse.classList.add('fa-times-circle','text-danger');
}

function showResponse(spanResponse) {
	spanResponse.classList.remove('fa-angry');
	spanResponse.classList.remove('smoothly-hide');
	spanResponse.classList.add('smoothly-visible');
}

function newGame(spanResponse) {
	spanResponse.classList.remove('smoothly-visible');
	spanResponse.classList.add('smoothly-hide');
}

function playGame(guess, spanResponse, divNumber2Container) {
	var guessed = validateHigherLower(guess);
	if (guessed) {
		setSuccessResponse(spanResponse);
	} else {
		setErrorResponse(spanResponse);
	}
	showResponse(spanResponse);
}