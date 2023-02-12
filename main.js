// function getVal() {
//     let val = document.querySelector('input').value;
//     document.write(val, "555");
// }
// getVal();

// document.querySelector('button').addEventListener("click", function () {
//     let val = document.querySelector('input').value;
//     let txt1 = document.querySelector('div');
//     let i = val;
//     function myCallback() {
//         txt1.textContent = i;
//         i--;
//     }
//     let timerId = setInterval(myCallback, 1000, i);
//     setTimeout(() => { clearInterval(timerId) }, 1000 * i + 1000);
// })


document.querySelector('button').addEventListener("click", () => {
    let val = document.querySelector('input').value;
    let txt1 = document.querySelector('div');
    let i = val;
    let timerId = setInterval(() => { txt1.textContent = i; i--; }, 1000, i);
    setTimeout(() => { clearInterval(timerId) }, 1000 * i + 1000);
})

