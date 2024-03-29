/*import * as MusicKit from 'https://js-cdn.music.apple.com/musickit/v1/musickit.js';

MusicKit.configure({
  affiliateToken: undefined,
  campaignToken: undefined,
  declarativeMarkup: true,
  developerToken: 'DEVELOPER-TOKEN',
  debug: false,
  features: ['player-accurate-timing', 'api-data-store', 'api-session-storage', 'api-artist-include'],
  storefrontId: 'us',
  suppressErrorDialog: false
});

//APPLE MUSIC STUFF
const fetch = require('node-fetch');
const key = process.env.APPLE_MUSIC_KEY;
const teamID = process.env.APPLE_TEAMID_KEY;
const keyid = process.env.APPLE_MUSIC_KEYID;

const generateToken = () => {
  const jwt = require('jsonwebtoken');
  const token = jwt.sign({}, privateKey, {
    algorithm: 'ES256',
    expiresIn: '180d',
    issuer: teamId,
    header: {
      alg: 'ES256',
      kid: keyId,
      typ: 'JWT',
    },
  });
  return token;
};
*/
//DOM Elements
var time,
    greeting,
    greeting2,
    imgSpinnyThing,
    titlePageImg;

const loading_anim = [
    "currently hello worlding   ",
    "currently hello worlding.  ",
    "currently hello worlding.. ",
    "currently hello worlding..."
];

var loading_idx = 0,
    spinning_idx = 0;

var titlePageImgList = [
    "aj1angle.jpg",
    "bruins.jpg",
    "beachrock.JPG",
    "shark.png",
    "ramen1.jpg",
    "plunk.jpg",
    "beauty.png",
    "jakespine.png",
    "stop.png",
    "catmural.png",
    // "trippydoor.png",
    "aj1.jpg",
    "ramen2.jpg",
    "paintdrag.png"
];

var titlePageIdx = 0, lastMin = 0, title_timeout = 2;

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
        hour = today.getHours(),
        min = today.getSeconds();

    greeting = document.getElementById("greeting");
    titlePageImg = document.getElementById("title_image");

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
    if(min > lastMin + title_timeout || (lastMin - min < 60 - title_timeout && lastMin > min)){
        lastMin = min;
        titlePageIdx = (titlePageIdx + 1) % (titlePageImgList.length);
        console.log(titlePageIdx);
    }
    titlePageImg.style.backgroundImage = "url(res/titlepage/" + titlePageImgList[titlePageIdx] + ")";
    titlePageImg.style.backgroundImage.width = "100%";
    titlePageImg.style.backgroundImage.height = "400px";
    titlePageImg.style.backgroundSize = "cover";

    //this works vvvv
    /*var img = new Image();
    img.onload = function() {
      titlePageImg.style.height = this.height + "px";
    }
    img.src = "res/titlepage/" + titlePageImgList[titlePageIdx];
    titlePageImg.style.height = img.height + "px";*/
    setTimeout(setBG, 300);
}
/*
function getSongOTD(){
    const token = generateToken();

    const playlistId = 'INSERT_YOUR_PLAYLIST_ID_HERE';

    fetch('https://api.music.apple.com/v1/catalog/us/playlists/' + playlistId, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Music-User-Token': `${process.env.MY_APPLEID_KEY}`,
      },
    })
    .then(response => response.json())
    .then(data => {
        // Select a random track
        const randomIndex = Math.floor(Math.random() * data.data.length);
        const track = data.data[randomIndex];

        // Retrieve track information
        fetch('https://api.music.apple.com/v1/catalog/us/songs/' + track.attributes.playParams.id}, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Music-User-Token': `${process.env.MY_APPLEID_KEY}`
            }

        })
        .then(response => response.json())
        .then(data => console.log(data.attributes))
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
}*/

//Run
function main(){
//    showTime();
    setBG();
    rotateSpinnyThing();
//    getSongOTD();

    //scroll to top of page
//    document.body.scrollTop = 0; // For Safari
//    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}