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