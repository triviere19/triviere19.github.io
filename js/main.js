//DOM Elements
const key = process.env.APPLE_MUSIC_KEY;

var time,
    greeting,
    greeting2,
    imgSpinnyThing;

const loading_anim = [
    "currently hello worlding   ",
    "currently hello worlding.  ",
    "currently hello worlding.. ",
    "currently hello worlding..."
];

var loading_idx = 0,
    spinning_idx = 0;


function rotateSpinnyThing(){
    imgSpinnyThing = document.getElementById("spinny_thingy");
    imgSpinnyThing.style.transform = "rotate(" + spinning_idx++%360 + "deg)";

    setTimeout(rotateSpinnyThing, 10);
}

//Show Time
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr Format
    hour = hour % 12 || 12;

    //Output time
    time = document.getElementById("time");
    greeting2 = document.getElementById("greeting2");


//    time.textContext = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    time.innerHTML = hour+":"+addZero(min)+":"+addZero(sec)+" "+amPm;
    console.log(hour+":"+addZero(min)+":"+addZero(sec)+" "+amPm);

//    console.log(loading_anim[loading_idx++%4]);
    greeting2.innerHTML = loading_anim[loading_idx++%4];

    setTimeout(showTime, 1000);
}


function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '')+n;
}


function setBG(){
    let today = new Date(),
        hour = today.getHours();

    greeting = document.getElementById("greeting");

    if (hour < 12 && hour > 3){
//        document.body.style.backgroundImage = "url('upside-down-emoji.jpg')";
        greeting.innerHTML = "Ohayo";
        greeting.style.color = 'blue';
    }
    else if (hour > 18 || hour < 3){
        greeting.innerHTML = "Oyasumi";
        greeting.style.color = 'red';
    }
    else {
        greeting.textContext = "'sup";
    }
}

//Run

function main(){
    showTime();
    setBG();
    rotateSpinnyThing();
}