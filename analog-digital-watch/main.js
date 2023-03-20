let hr = document.querySelector('#hr');
let min = document.querySelector('#mn');
let sec = document.querySelector('#sc');


let hour = document.querySelector('#hourr');
let minute = document.querySelector('#minn');
let second = document.querySelector('#secc');
let ampm = document.querySelector('#ampm');




setInterval(() => {

    let day = new Date();

    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;


    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();

     // change am pm 
     let am = ( h >= 12 ) ? "PM" : "AM" ;

    // change into 12 hours format
    if(h>=12){
        h = h - 12;
    }

   
    // add zero when value less than 10
    h =  (h < 10) ? "0"+h : h;
    m =  (m < 10) ? "0"+m : m;
    s =  (s < 10) ? "0"+s : s;

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    ampm.innerHTML = am


})