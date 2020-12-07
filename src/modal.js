// Get modal element
var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');

// Get the close button
var closeBtn = document.getElementById('closeBtn');

// Listen for a click
modalBtn.addEventListener('click', openModal);
// Listen for a close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modalBtn
function openModal(){
  modal.style.display = 'flex';
}

// Function to close the modal
function closeModal(){
  modal.style.display = 'none';
}

function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
