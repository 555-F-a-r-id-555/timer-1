document.querySelector('button').addEventListener("click", () => {
    let val = document.querySelector('input').value;
    let txt1 = document.querySelector('div');
    let i = val;
    let timerId = setInterval(() => { txt1.textContent = i; i--; }, 1000, i);
    setTimeout(() => { clearInterval(timerId) }, 1000 * i + 1000);
})

