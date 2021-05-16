const openButton = document.querySelector('#menu-button');

openButton.addEventListener('click', () => {
  if(openButton.classList.contains('navbar-toggler-icon-open')) {
    openButton.classList.remove('navbar-toggler-icon-open');
    openButton.classList.add('navbar-toggler-icon-close');
  } else {
    openButton.classList.add('navbar-toggler-icon-open');
    openButton.classList.remove('navbar-toggler-icon-close');
  }
});

