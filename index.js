
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');


let timer = setInterval (() => {
    let date = new Date();
    let h = date.getHours();
    let d = date.getDate();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    d = (d < 10) ? "0" + d : d;

    days.innerText = d;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerHTML =  s;
})
