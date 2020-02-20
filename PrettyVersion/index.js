
var random1 = Math.floor(Math.random()*100);
var random2 = Math.floor(Math.random()*100);

document.addEventListener('DOM', function() {
	alert('click');
},false);

document.getElementById('Number1').innerHTML = random1;


function validateHigherLower(guess) {
	var guessed = (guess == 'higher' && random2 > random1) || (guess == 'lower' && random2 < random1) ?true :false;
	var response = document.getElementById('response');
	response.classList.remove('fa-angry');
	response.classList.remove('m-fadeOut');
	response.classList.remove('m-fadeIn');
	//response.style.visibility = 'visible';
	
	response.classList.add('m-fadeIn');
	if (guessed) {
		response.classList.remove('fa-times-circle','text-danger');
		response.classList.add('fa-check-circle','text-success');
		return;
	}
	response.classList.remove('fa-check-circle','text-success');
	response.classList.add('fa-times-circle','text-danger');
}