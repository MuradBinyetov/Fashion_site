/////////////////CAROUSEL///////////////////////////////

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })
})
//////////////////////////////////////////////

////////////SWEET-ALERT/////////////////////////

let buttons = document.getElementsByClassName('card');
let zero = document.getElementById('zero');
let a = 0;
for (let f of buttons) {
    f.addEventListener('click', function () {
        a++;
        zero.innerText = a;
        Swal.fire(
            'Herschel supply co 25l',
            'is added to cart !',
            'success'
        )
    })
}
let hearts = document.getElementsByClassName('heart');
for (let f of hearts) {
    f.addEventListener('click', function () {
        Swal.fire(
            'Herschel supply co 25l',
            'is added to wishlist !',
            'success'
        )
    })
}

///////////////////////////////////////////////


////////////TIMER///////////////////////////////

let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hrs = document.getElementById('hrs');
let day = document.getElementById('day');

var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();


var x = setInterval(function () {


    var now = new Date().getTime();


    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    sec.innerText = seconds;
    min.innerText = minutes;
    hrs.innerText = hours;
    day.innerText = days;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


////////////////////////////////////////////////


/////////////FOOTER/////////////////////

let action = true;
document.getElementById('input').addEventListener('click', function () {
    
    if (action == true) {
        let interval = setInterval(function () {

            let input = document.getElementById('input').style.border = 'none';
            let div = document.querySelector('.dv');
            let a = parseInt(getComputedStyle(div).width);
            a += 10;
            div.style.width = `${a}px`;
            if (a == 350) {
                clearInterval(interval);
                action = false;
            }
        }, 20)
    }

})






////////////////////////////////////////