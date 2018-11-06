const css = require('./app.scss');
require('bootstrap');
window.AOS = require('aos');

AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-out-sine',
    delay: 100,
});

function fillingBar() {
    var elem = document.getElementById("mybar");
    var current_progress = 0;
    var interval = setInterval(frame, 300);
    
    function frame() {
        current_progress++;
        elem.style.width = current_progress + '%'; 
        if (current_progress >= 100) {
            clearInterval(interval);
        }
    }
}

function progressBar() {
    document.getElementById("paymentButton").addEventListener("click", fillingBar);
};

progressBar();

