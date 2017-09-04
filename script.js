// Get modal elements
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];


//Listen for click

modalBtn.addEventListener('click',openModal);
//Listen for close click
closeBtn.addEventListener('click',closeModal);

window.addEventListener('click',outsideModal);

//Function to open modal
function  openModal() {
	modal.style.display='block';
}
//Function to close modal
function  closeModal() {
	modal.style.display='none';
}
function outsideModal(event) {
	if (event.target===modal){
		modal.style.display='none';
	}
}