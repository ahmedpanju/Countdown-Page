var countDownDate = new Date("Jan 1, 2050 15:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
     
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

function toggleSound() {
    var audioElem = document.getElementById('audio');
        if (audioElem.paused)
        audioElem.play();
    else
        audioElem.pause();
    }

$(document).ready(function(){
    $('.play_button').click(function(){
        $('.play_button_arrow').toggleClass('play_button_arrow_animation');
        $('h4').fadeToggle(1500);
        $(this).attr('id', 'pause');
    });
    
});
