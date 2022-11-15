'use strict';

/*
    This project implements a simple modal on a web page
*/

const modals = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modals.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modals.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

// closing the modal using the close button
btnCloseModal.addEventListener('click', closeModal);

// closing the modal using the overlay
overlay.addEventListener('click', closeModal);

// handling keypress
document.addEventListener('keydown', function (event) {
  //   console.log(event.key);
  if (event.key === 'Escape' && !modals.classList.contains('hidden')) {
    closeModal();
  }
});
