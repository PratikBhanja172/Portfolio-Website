document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll('.change-text .word');
    let currentWordIndex = 0;

    function changeWord() {
        words[currentWordIndex].classList.remove('in');
        currentWordIndex = (currentWordIndex + 1) % words.length;
        words[currentWordIndex].classList.add('in');
    }

    setInterval(changeWord, 3000);

    const menuIcon = document.getElementById('menu-icon');
    const navlist = document.querySelector('.navlist');

    menuIcon.addEventListener('click', () => {
        navlist.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-skill');
        bar.style.width = value + '%';
    });
});
