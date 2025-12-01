const speakBtn =  document.getElementById("speakBtn");

speakBtn.addEventListener("click", speakNow);

const styleSheet = document.getElementById("styleSheet");
const result = document.getElementById("result");

//SpeechRecognition

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();


recognition.onstart = function () {
    console.log("Start");
};

recognition.onresult = function (e) {
    const resultIndex = e.resultIndex;

    const { transcript } = e.results[resultIndex][0];
    console.log(transcript);
    speakOutLoud(transcript);

    var text = e.results[0][0].transcript;
    document.getElementById("result").innerHTML = text;
};

function speakNow() {
    recognition.start();
};


setInterval(function() {
    const clock  = document.querySelector(".display");
    let time = new Date();
    clock.textContent = time;
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    clock.textContent =  hr + ':' + min + ":" + sec ;

    if (hr > 12) {
        hr = hr - 12;
    };

    if (hr == 0) {
        hr = 12;
    };
});

setInterval(function() {
    const datePicker = document.querySelector(".display2");
    let date = new Date();
    datePicker.textContent = date;
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    datePicker.textContent = day + "." + month + "." + year;
});

function speakOutLoud(text) {
    let FridaySpeak = text;

    if (FridaySpeak.includes("hi")) {
         FridaySpeak = "Hello";
    };

    if (FridaySpeak.includes("what is your name")) {
        FridaySpeak = ("My name is Friday");
    };

    if (FridaySpeak.includes("how are you today")) {
        FridaySpeak = ("I'm fine!");
    };

    if (FridaySpeak.includes("who is my best friend")) {
        FridaySpeak = ("Your best friend is Orlin");
    };

    if (FridaySpeak.includes("what is my dog's name")) {
        FridaySpeak = ("Your dog's name is Archi");
    };

    if (FridaySpeak.includes("when are you born")) {
        FridaySpeak = ("I'm born fourteenth of December.")
    };

    if (FridaySpeak.includes("who is your creator")) {
        FridaySpeak = ("My creator is Kristiyan Vakov. He is twelve years old.");
    };

    if (FridaySpeak.includes("open shcool Gmail")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://mail.google.com/mail/u/1/#inbox");
    };

    if (FridaySpeak.includes("open Gmail")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://mail.google.com/mail/u/0/#inbox");
    };

    if (FridaySpeak.includes("open my notebook")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://app.shkolo.bg/dashboard#");
    };

    if (FridaySpeak.includes("open my school program")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open("file:///C:/Users/USER/Desktop/%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%80%D0%B0%D0%BD%D0%B5/Friday/School%20program/school%20program.html");
    };

    if (FridaySpeak.includes("open u")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://ucha.se/");
    };

    if (FridaySpeak.includes("open my first meet on Monday")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://meet.google.com/kww-xxrb-pjv?authuser=0");
    };

    if (FridaySpeak.includes("open my first meet on Tuesday")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://meet.google.com/acd-oaom-kim?authuser=0");
    };

    if (FridaySpeak.includes("open my first meet on Wednesday")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://meet.google.com/xoe-hqzt-req?authuser=0");
    };

    if (FridaySpeak.includes("open my first meet on Thursday")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://meet.google.com/epn-nysr-kkb?authuser=0");
    };

    if (FridaySpeak.includes("open my first meet on Friday")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://meet.google.com/imn-oxna-owz?authuser=0");
    };

    if (FridaySpeak.includes("open calculator")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("file:///C:/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%80%D0%B0%D0%BD%D0%B5/Friday/Calculator/calculator.html");
    };

    if (FridaySpeak.includes("open kahoot")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open("https://kahoot.it/v2/")
    };

    if (FridaySpeak.includes("weather like today")) {
        FridaySpeak = ("ok");   
        FridaySpeak = window.open ("https://www.sinoptik.bg/sofia-bulgaria-100727011?location");
    };

    if (FridaySpeak.includes("open Minecraft server")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://aternos.org/server/");
    };

    if(FridaySpeak.includes("play Iron Man Hero")) {
       FridaySpeak = ("ok");
       FridaySpeak = window.open ("https://www.youtube.com/watch?v=50E-QwEdl5Y");
    };

    if(FridaySpeak.includes("play Iron Man Believer")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://www.youtube.com/watch?v=paivlKMzc2s");
     };

     if(FridaySpeak.includes("play Need for Speed roads untraveled")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://www.youtube.com/watch?v=7Lkq7bf6kU8&t=87s");
     };

     if(FridaySpeak.includes("play Need for Speed alone")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://www.youtube.com/watch?v=XzMW-Habyyw&t=99s");
     };

     if(FridaySpeak.includes("play Need for Speed DarkSide")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://www.youtube.com/watch?v=8AG5xRgDUTY");
    };

     if(FridaySpeak.includes("play Fast Five")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://www.youtube.com/watch?v=YPlZ-nJewRE");
     };
     
     if(FridaySpeak.includes("play Fast and Furious see you again")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://www.youtube.com/watch?v=RgKAFK5djSk");
     };

     if(FridaySpeak.includes("play Fast and Furious gang up")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://www.youtube.com/watch?v=ZvUBGN4KoP0");
     };

     if(FridaySpeak.includes("play Iron Man monster")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://www.youtube.com/watch?v=O9-mFuRTgKU");
     };

    if (FridaySpeak.includes("play Iron Man legends never die")){
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://www.youtube.com/watch?v=aiRY36TPVo8"); 
    };

    if (FridaySpeak.includes("play Iron Man Back in Black")){
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://www.youtube.com/watch?v=AW3-SuBZRt0"); 
    };


    if (FridaySpeak.includes("open filmi7")){
        FridaySpeak = ("ok")
        FridaySpeak = window.open ("https://filmi7.com/");
    };

    if (FridaySpeak.includes("open YouTube")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://www.youtube.com/");
    };

    if (FridaySpeak.includes("open Google classroom")){
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://classroom.google.com/u/1/c/NjEzMDcxNTI1NzVa"); 
    };

    if (FridaySpeak.includes("open Google Calendar")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://calendar.google.com/calendar/u/1/r/week/2020/12/15?cid=55su.bg_classroomadd03e7d%252540group.calendar.google.com");
    };

    if (FridaySpeak.includes("open Google Translate")) {
        FridaySpeak = ("ok");
        FridaySpeak = window.open ("https://translate.google.bg/?hl=bg")
    };

    const SpeechSynthesisUtterance = window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;

    const utterance = new SpeechSynthesisUtterance();

    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1.5;
    utterance.text = FridaySpeak;
    utterance.lang = "en";
    //utterance.voice = 1;

    const speechSynthesis = window.speechSynthesis || window.webkitspeechSynthesis;

    speechSynthesis.speak(utterance);

    console.log(utterance);
};

//Timer
const timerTxt = document.getElementById("timerText");
    let timer = null;
    let startTime = 0;
    let elapsedTime = 0; 
    let isRunning = false;

    function startTimer() {
        if(!isRunning){
            startTime = Date.now() - elapsedTime;
            timer = setInterval(updateTimer, 1000);
            isRunning = true;   
        }
    }

    function stopTimer() {
        if(isRunning){
            clearInterval(timer);
            elapsedTime = Date.now() - startTime;
            isRunning = false;
        }
    }

    function resetTimer() {
            clearInterval(timer);
            startTime = 0;
            elapsedTime = 0;
            isRunning = false;
            timerTxt.textContent = "00:00:00";
    }

    function updateTimer() {
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;

        let h = Math.floor(elapsedTime / (1000*60*60));
        let m = Math.floor(elapsedTime / (1000*60) % 60);
        let s = Math.floor(elapsedTime / 1000 % 60);

        h=String(h).padStart(2,"0");
        m=String(m).padStart(2,"0");
        s=String(s).padStart(2,"0");
        timerText.textContent = `${h}:${m}:${s}`;
    }

    //workTime
    
    window.onload = function startWorkTime(){
        let startTime1 = Date.now();
        const workTimeTxt = document.getElementById("workTimeText");
        setInterval(() =>{
            const elapsedTime1 = Date.now() - startTime1;
            const h = Math.floor(elapsedTime1 / (1000*60*60));
            const m = Math.floor(elapsedTime1 / (1000*60) % 60);
            const s = Math.floor(elapsedTime1 / 1000 % 60);
            h=String(h).padStart(2,"0");
            m=String(m).padStart(2,"0");
            s=String(s).padStart(2,"0");
            workTimeTxt.textContent = `${h}:${m}:${s}`;
        },1000)
    }