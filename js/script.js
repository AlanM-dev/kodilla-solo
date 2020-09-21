const button = document.querySelector('#hamburger');
const sidebar = document.querySelector('.sidebar-container');

button.addEventListener('click', function() {
	sidebar.classList.toggle('closed');
});

