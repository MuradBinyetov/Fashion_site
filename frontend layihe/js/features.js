let input = document.getElementById('input');
let sum = document.getElementById('sum');
let sub = document.getElementById('sub');
let price = document.getElementById('total-price');
let cem = 0;
let a = parseFloat(price.innerText);
let isTrue = false;
sum.addEventListener('click', function () {
    let d = parseFloat($(this).parents("tr").children(".priced").text());
    let b = parseFloat(input.value);
    b++;
    input.value = b;
    if (!isTrue) {
        cem = a * b;
    }
    else {
        a = parseFloat(price.innerText);
        cem = a + d;
        console.log(cem);
    }
    price.innerText = `${(cem)}$`;
    document.getElementById('apply').addEventListener('click', function () {
        let coupon = document.getElementById('coupon-code');
        isTrue = true;
        if (coupon.value == 1122) {
            let c = cem - (cem * 10 / 100);
            console.log(c);
            price.innerText = `${c}$`;
        }
    });
});




sub.addEventListener('click', function () {
    if (input.value > 1) {
        input.value--;
        price.innerText = `${(a * input.value)}$`;
    }

})


let inputTwo = document.getElementById('inputTwo');
let subTwo = document.getElementById('subTwo');
let sumTwo = document.getElementById('sumTwo');
let priceTwo = document.getElementById('priceTwo');

let b = parseInt(priceTwo.innerText);

sumTwo.addEventListener('click', function () {
    inputTwo.value++;
    let e=b * inputTwo.value;
    priceTwo.innerText = `${e}$`;
    document.getElementById('apply').addEventListener('click', function () {
        let coupon = document.getElementById('coupon-code');
        if (coupon.value == 1122) {
            let c = e - (e * 10 / 100);
            console.log(c);
            priceTwo.innerText = `${c}$`;
        }
    });
})



subTwo.addEventListener('click', function () {
    if (inputTwo.value > 1) {
        inputTwo.value--;
        priceTwo.innerText = `${(b * inputTwo.value)}$`;
    }

})



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







