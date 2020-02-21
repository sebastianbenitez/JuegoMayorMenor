
function positionTop() {
	return Math.floor(Math.random() * 20);
}

function marginLeft() {
	return Math.floor(Math.random() * 75);
}

document.addEventListener('DOMContentLoaded',function () {
	var divGameContainer = document.getElementById('div--game-container');
	divGameContainer.innerHTML = '<object type="text/html" data="../PrettyVersion/index.html" width="100%" height="550px" ></object>';

	var adsModals = $('.modal-ad');

	setInterval(function () {
		for (var i = 0; i < adsModals.length; i++) {
			$(adsModals[i]).find('.modal-content').css('top', positionTop()+'vh');
			$(adsModals[i]).find('.modal-dialog').css('margin-left', marginLeft()+'%');
			$(adsModals[i]).modal('show');
		}
	}, 6000);
	
},false);
