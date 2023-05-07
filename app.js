// Show or Hide the small Nav Bar
const smallNav = document.querySelector('.smallNav');
const smallNavBtn = document.querySelector('.smallNavBtn');
const closeBtn = document.querySelector('.closeBtn');

closeBtn.addEventListener('click', (e) => {
    closeBtn.classList.add('hidden');
    smallNavBtn.style.display = 'block';
    smallNav.style.display = "none";
})

smallNavBtn.addEventListener('click', (e) => {
    console.log(smallNav);
    closeBtn.classList.remove('hidden');
    smallNavBtn.style.display = 'none';

    smallNav.style.display = "block";
})

// NODEMAILER

