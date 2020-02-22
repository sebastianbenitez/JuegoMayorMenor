
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
		setTimeout(function (base) {		
			base.divNumber2Container.classList.add('number__div');
			base.divNumber2Container.children[0].textContent = base.random2;
			base.divNumber2Container.children[0].classList.remove('d-none');
			base.divNumber2Container.children[1].classList.add('d-none');
			base.spanResponse.classList.remove('smoothly-hide');
			base.spanResponse.classList.add('smoothly-visible');
			base.divNumber2Container.classList.remove('smoothly-hide');
			base.divNumber2Container.classList.add('smoothly-visible');

			base.restoreResults();
		}, 750, this);
	},
	restoreResults: function () {
		setTimeout(function (base) {
			base.spanResponse.classList.remove('smoothly-visible');
			base.spanResponse.classList.add('smoothly-hide');
			base.divNumber2Container.classList.remove('smoothly-visible');
			base.divNumber2Container.classList.add('smoothly-hide');

			base.newGame();
		}, 2500, this);
	},
	newGame: function () {
		setTimeout(function (base) {
			base.random1 = base.random2;
			base.h2Number1.innerHTML = base.random1;
			base.random2 = Math.floor(Math.random()*100);

			base.divNumber2Container.classList.remove('number__div');
			base.divNumber2Container.children[0].classList.add('d-none');
			base.divNumber2Container.children[1].classList.remove('d-none');

			base.divNumber2Container.classList.remove('smoothly-hide');
			base.divNumber2Container.classList.add('smoothly-visible');
		}, 750, this);
	},
}

document.addEventListener('DOMContentLoaded', function() {
	
	game.h2Number1 = document.getElementById('h2--number-1');
	game.h2Number1.innerHTML = game.random1;

	game.spanResponse = document.getElementById('span--response');
	game.divNumber2Container = document.getElementById('div--number-2-container');
	
	document.getElementById('btn--higher').addEventListener('click', function() {
		game.guess = 'higher';
		game.playGame();
	});
	document.getElementById('btn--lower').addEventListener('click', function() {
		game.guess = 'lower';
		game.playGame();
	});
},false);

