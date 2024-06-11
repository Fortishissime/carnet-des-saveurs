document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const dropdownMenu = document.getElementById('dropdown-menu');

    logo.addEventListener('click', function() {
        if (dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.remove('hidden');
            dropdownMenu.style.display = 'block';
            setTimeout(() => {
                dropdownMenu.style.height = '200px'; // Adjust height as needed
            }, 10); // Slight delay to trigger the transition
        } else {
            dropdownMenu.style.height = '0';
            setTimeout(() => {
                dropdownMenu.classList.add('hidden');
                dropdownMenu.style.display = 'none';
            }, 500); // Wait for transition to complete before hiding
        }
    });
});
