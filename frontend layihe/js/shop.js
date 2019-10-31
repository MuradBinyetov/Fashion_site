let left = document.getElementsByClassName('ui-slider-handle')[0];
let right = document.getElementsByClassName('ui-slider-handle')[1];


document.getElementsByClassName('bg-info')[0].addEventListener('click', function () {
    document.body.className = 'bg-info';
})
document.getElementsByClassName('bg-primary')[0].addEventListener('click', function () {
    document.body.className = 'bg-primary';
})
document.getElementsByClassName('bg-warning')[0].addEventListener('click', function () {
    document.body.className = 'bg-warning';
})
document.getElementsByClassName('bg-danger')[0].addEventListener('click', function () {
    document.body.className = 'bg-danger';
})
document.getElementsByClassName('bg-secondary')[0].addEventListener('click', function () {
    document.body.className = 'bg-secondary';
})
document.getElementsByClassName('bg-dark')[0].addEventListener('click', function () {
    document.body.className = 'bg-dark';
})
document.getElementsByClassName('bg-secondary')[0].addEventListener('click', function () {
    document.body.className = 'bg-secondary';
})

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