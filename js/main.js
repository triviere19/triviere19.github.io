//DOM Elements

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name');

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
    time.textContext = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}


function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '')
}


function setBg(){
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12){
        document.body.style.backgroundImage = "url('upside-down-emoji.jpg')";
        greeting.textContext = 'Ohayo';
    }
    else if (hour > 18){
        document.body.style.backgroundImage = "url('upside-down-emoji.jpg')";
        greeting.textContext = 'Oyasumi';
    }
    else {
        document.body.style.backgroundImage = "url('upside-down-emoji.jpg')";
        greeting.textContext = 'Konnichiwa';
    }
}

//Run
showTime();
setBG();