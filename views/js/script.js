window.onload = function(){
	let logo = document.querySelector('.logo').style;
	let sign = document.querySelector('#sign').style;
	let buttons = document.querySelectorAll('a');
	let func = setTimeout(() => {
		sign.display = "none";
		logo.display = "block";
		buttons.forEach((but) => {
			but.style.visibility = "visible";
		});
	},4500);
}