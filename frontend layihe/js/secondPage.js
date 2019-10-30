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