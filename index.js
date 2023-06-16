
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
// let sbsbs = `${days}`
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currDate = new Date().getDate() + 8 + " " + monthNames[new Date().getMonth()];

let countdown = new Date(`${currDate}, 2023 00:00:00`);

let timer = setInterval (() => {
    let currDate = new Date().getTime();
    let dist = countdown - currDate;
    let d = Math.floor(dist / (1000 * 60 * 60 * 24));
    let h = Math.floor(dist % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let m = Math.floor(dist % (1000 * 60 * 60) / (1000 * 60));
    let s = Math.floor(dist % (1000 * 60) / (1000));
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    d = (d < 10) ? "0" + d : d;
    
    days.innerText = d;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerHTML =  s;

    if(dist < 0){
        days.innerText = '00';
        hours.innerText = '00';
        minutes.innerText = '00';
        seconds.innerHTML = '00';
    }
})
