
var game = {
	random1: Math.floor(Math.random()*100),
	random2: Math.floor(Math.random()*100),
	h2Number1: null,
	spanResponse: null,
	divNumber2Container: null,
	guess: null,

	validateHigherLower: function () {
		return (this.guess == 'higher' && this.random2 > this.random1) || (this.guess == 'lower' && this.random2 < this.random1);
	},
	setSuccessResponse: function () {
		this.spanResponse.classList.remove('fa-angry','fa-times-circle','text-danger');
		this.spanResponse.classList.add('fa-check-circle','text-success');
	},
	setErrorResponse: function () {
		this.spanResponse.classList.remove('fa-angry','fa-check-circle','text-success');
		this.spanResponse.classList.add('fa-times-circle','text-danger');
	},
	playGame: function () {
		if (this.validateHigherLower()) {
			this.setSuccessResponse();
		} else {
			this.setErrorResponse();
		}
		this.showResults();
	},
	showResults: function () {
		this.divNumber2Container.classList.add('smoothly-hide');
		setTimeout(function () {		
			game.divNumber2Container.classList.add('number__div');
			game.divNumber2Container.children[0].textContent = game.random2;
			game.divNumber2Container.children[0].classList.remove('d-none');
			game.divNumber2Container.children[1].classList.add('d-none');
			game.spanResponse.classList.remove('smoothly-hide');
			game.spanResponse.classList.add('smoothly-visible');
			game.divNumber2Container.classList.remove('smoothly-hide');
			game.divNumber2Container.classList.add('smoothly-visible');

			game.restoreResults();
		}, 1250);
	},
	restoreResults: function () {
		setTimeout(function () {
			game.spanResponse.classList.remove('smoothly-visible');
			game.spanResponse.classList.add('smoothly-hide');
			game.divNumber2Container.classList.remove('smoothly-visible');
			game.divNumber2Container.classList.add('smoothly-hide');

			game.newGame();
		}, 2500);
	},
	newGame: function () {
		setTimeout(function () {
			game.h2Number1.innerHTML = game.random2;
			game.random2 = Math.floor(Math.random()*100);

			game.divNumber2Container.classList.remove('number__div');
			game.divNumber2Container.children[0].classList.add('d-none');
			game.divNumber2Container.children[1].classList.remove('d-none');

			game.divNumber2Container.classList.remove('smoothly-hide');
			game.divNumber2Container.classList.add('smoothly-visible');
		}, 750);
	},
}

document.addEventListener('DOMContentLoaded', function() {
	
	game.h2Number1 = document.getElementById('h2--number-1');
	game.h2Number1.innerHTML = game.random1;

	game.spanResponse = document.getElementById('span--response');
	game.divNumber2Container = document.getElementById('div--number-2-container');
	//var divGameButtonsContainer = document.getElementById('div--game-buttons-container');
	
	document.getElementById('btn--higher').addEventListener('click', function() {
		game.guess = 'higher';
		game.playGame();
	});
	document.getElementById('btn--lower').addEventListener('click', function() {
		game.guess = 'lower';
		game.playGame();
	});
},false);


/*function validateHigherLower(guess) {
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

function showResults(spanResponse, divNumber2Container) {
	spanResponse.classList.remove('fa-angry');
	divNumber2Container.classList.add('smoothly-hide');
	setTimeout(function () {		
		divNumber2Container.classList.add('number__div');
		divNumber2Container.children[0].textContent = random2;
		divNumber2Container.children[0].classList.remove('d-none');
		divNumber2Container.children[1].classList.add('d-none');
		spanResponse.classList.remove('smoothly-hide');
		spanResponse.classList.add('smoothly-visible');
		divNumber2Container.classList.remove('smoothly-hide');
		divNumber2Container.classList.add('smoothly-visible');

		newGame(spanResponse, divNumber2Container);
	}, 1250);
}

function newGame(spanResponse, divNumber2Container) {
	setTimeout(function () {
		divNumber2Container.classList.remove('smoothly-visible');
		divNumber2Container.classList.add('smoothly-hide');
		spanResponse.classList.remove('smoothly-visible');
		spanResponse.classList.add('smoothly-hide');


	}, 3000);
}

function playGame(guess, spanResponse, divNumber2Container) {
	var guessed = validateHigherLower(guess);
	if (guessed) {
		setSuccessResponse(spanResponse);
	} else {
		setErrorResponse(spanResponse);
	}
	showResults(spanResponse, divNumber2Container);
	//newGame(spanResponse);
}*/

