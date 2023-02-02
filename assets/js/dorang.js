 // toggle 
$(document).ready(function(){
    
    $('.search-toggle').click(function(){
        $('.search-wrapper').toggleClass('show');
    });

    $('.modal-toggle').click(function(){
        $('.modalBox').toggleClass('show');
    })

    $('.modalBox').click(function(){
        $(this).removeClass('show');
    });

    $('.spinner').click(function(){
        $(".theme-selector").toggleClass('show');
    });
    $('.light').click(function(){
        $('body').addClass('light-theme');
        $('body').removeClass('dark-theme');
    });
    $('.dark').click(function(){
        $('body').toggleClass('dark-theme');
        $('body').removeClass('light-theme');
    });
});



// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 

//countdown

var final = new Date("feb 6, 2023 17:00:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();

var diff = final - now;

var days = Math.floor(diff / (1000*60*60*24));
console.log(days);
var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
console.log(hours);
var min = Math.floor((diff % (1000*60*60)) / (1000*60));
console.log(min);
var sec = Math.floor((diff % (1000*60)) / (1000));
console.log(sec);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("min").innerHTML = min;
document.getElementById("sec").innerHTML = sec;
}, 1000)

var modal = document.getElementById('id01');

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

var modal1 = document.getElementById('id02');

window.onclick = function(event) {
	if (event.target == modal1) {
		modal1.style.display = "none";
	}
}

var modal2 = document.getElementById('id03');

window.onclick = function(event) {
	if (event.target == modal2) {
		modal2.style.display = "none";
	}
}

