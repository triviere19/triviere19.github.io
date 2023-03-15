import * as MusicKit from 'https://js-cdn.music.apple.com/musickit/v1/musickit.js';

//// 1. Register for the Apple Music API and generate an API key
//const apiKey = 'your_api_key_here';
//
//// 2. Authenticate your API key
//const axios = require('axios');
//
//axios.post('https://api.music.apple.com/v1/me/library', {
//  headers: {
//    Authorization: `Bearer ${apiKey}`,
//    'Music-User-Token': 'your_user_token_here'
//  }
//}).then(response => {
//  console.log(response.data);
//}).catch(error => {
//  console.log(error);
//});
//
//// 3. Use the Apple Music API to get data
//axios.get('https://api.music.apple.com/v1/catalog/us/songs/203709340', {
//  headers: {
//    Authorization: `Bearer ${apiKey}`
//  }
//}).then(response => {
//  console.log(response.data);
//}).catch(error => {
//  console.log(error);
//});

//DOM Elements
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


}

//Run

function main(){
    showTime();
    setBG();
    rotateSpinnyThing();
}