
var random1 = Math.floor(Math.random()*100);
var random2 = Math.floor(Math.random()*100);

document.addEventListener('DOM', function() {
	alert('click');
},false);

document.getElementById('Number1').innerHTML = random1;


function validateHigherLower(guess) {
	var guessed = (guess == 'higher' && random2 > random1) || (guess == 'lower' && random2 < random1) ?true :false;
	var response = document.getElementById('response');
	removeClass(response, 'fas fa-angry fa-5x text-danger');
	response.style.visibility = 'visible';
	
	if (guessed) {
		removeClass(response, 'fas fa-times-circle fa-5x text-danger');
		addClass(response, 'fas fa-check-circle fa-5x text-success');
		return;
	}
	removeClass(response, 'fas fa-check-circle fa-5x text-success');
	addClass(response, 'fas fa-times-circle fa-5x text-danger');
}


function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
} 