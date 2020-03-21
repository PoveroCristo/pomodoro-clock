//Global Values
let pomodoroIntValue = 25;
let shortPauseIntValue = 5;
let longPauseIntValue = 15;
let SelectorsValueArray = [pomodoroIntValue, shortPauseIntValue, longPauseIntValue];
let pomodoroTimeCounter = pomodoroIntValue * 60;
let shortPauseTimeCounter = shortPauseIntValue * 60;
let longPauseTimeCounter = longPauseIntValue * 60;
let TimeCounterArray = [pomodoroTimeCounter, shortPauseTimeCounter, longPauseTimeCounter];
let timeLeft;
let checkLoop = 0;
let timerFunction;
let audioShort = new Audio("shortpause.wav");
let audioLOng = new Audio("longpause.wav");
//[0] Pomodoro, [1] Short Pause, [2] Long Pause
let timeSelectorsValue = document.getElementsByClassName("valueTime");
let countdownValue = document.getElementsByClassName("countdown");
//Minus Buttons
let buttonMinusPomodoro = document.getElementsByClassName("less1");
let buttonMinusShortPause = document.getElementsByClassName("less2");
let buttonMinusLongPause = document.getElementsByClassName("less3");
//Plus Buttons
let buttonPlusPomodoro = document.getElementsByClassName("more1");
let buttonPlusShortPause = document.getElementsByClassName("more2");
let buttonPlusLongPause = document.getElementsByClassName("more3");
//Start Pause Reset
let buttonStart = document.getElementsByClassName("start");
let buttonPause = document.getElementsByClassName("pause");
let buttonReset = document.getElementsByClassName("reset");


//Minus button functions
function minusButton() {
    SelectorsValueArray[a] = parseInt(timeSelectorsValue[a].innerHTML);
    if (SelectorsValueArray[a] > 1) {
        if (SelectorsValueArray[0] < 10) {
            timeSelectorsValue[a].innerHTML = SelectorsValueArray[a] - 1;
            SelectorsValueArray[a] = parseInt(timeSelectorsValue[a].innerHTML)
            TimeCounterArray[a] = SelectorsValueArray[a] * 60;
            countdownValue[0].innerHTML = "0" + SelectorsValueArray[0] + ":" + "00"
        }else if (SelectorsValueArray[0] >= 10) {
            timeSelectorsValue[a].innerHTML = SelectorsValueArray[a] - 1;
            SelectorsValueArray[a] = parseInt(timeSelectorsValue[a].innerHTML);
            TimeCounterArray[a] = SelectorsValueArray[a] * 60;
            countdownValue[0].innerHTML = SelectorsValueArray[0] + ":" + "00"
        }
    } 
}
//Plus button functions
function plusButton() {
    SelectorsValueArray[a] = parseInt(timeSelectorsValue[a].innerHTML);
    if (SelectorsValueArray[a] < 60) {
        if (SelectorsValueArray[0] < 10) {
            timeSelectorsValue[a].innerHTML = SelectorsValueArray[a] + 1;
            SelectorsValueArray[a] = parseInt(timeSelectorsValue[a].innerHTML);
            TimeCounterArray[a] = SelectorsValueArray[a] * 60;
            countdownValue[0].innerHTML = "0" + SelectorsValueArray[0] + ":" + "00"
        }else if (SelectorsValueArray[0] >= 10) {
            timeSelectorsValue[a].innerHTML = SelectorsValueArray[a] + 1;
            SelectorsValueArray[a] = parseInt(timeSelectorsValue[a].innerHTML);
            TimeCounterArray[a] = SelectorsValueArray[a] * 60;
            countdownValue[0].innerHTML = SelectorsValueArray[0] + ":" + "00"
        }
    } 
}
//Reset button functions
function reset() {
    timeSelectorsValue[0].innerHTML = 25;
    timeSelectorsValue[1].innerHTML = 5;
    timeSelectorsValue[2].innerHTML = 15;
    countdownValue[0].innerHTML = timeSelectorsValue[0].innerHTML + ":" + "00";
    buttonPause[0].classList.remove("active");
    buttonPause[0].innerHTML = "<h4>Pause</h4>"
    buttonMinusPomodoro[0].addEventListener("click", buttonMinusPomodoroFunc);
    buttonMinusShortPause[0].addEventListener("click", buttonMinusShortPauseFunc);
    buttonMinusLongPause[0].addEventListener("click", buttonMinusLongPauseFunc);
    buttonPlusPomodoro[0].addEventListener("click", buttonPlusPomodoroFunc);
    buttonPlusShortPause[0].addEventListener("click", buttonPlusShortPauseFunc);
    buttonPlusLongPause[0].addEventListener("click", buttonPlusLongPauseFunc);
    document.getElementsByClassName("pomodoro1")[0].src = "pomodoro_pixeloso_bw.png"
    document.getElementsByClassName("pomodoro2")[0].src = "pomodoro_pixeloso_bw.png"
    document.getElementsByClassName("pomodoro3")[0].src = "pomodoro_pixeloso_bw.png"
    document.getElementsByClassName("pomodoro4")[0].src = "pomodoro_pixeloso_bw.png"
    buttonStart[0].addEventListener("click", start);
    checkLoop = 0;
    TimeCounterArray[a] = SelectorsValueArray[a] * 60;
    clearInterval(timerFunction);
    
}
//Start function
function timerCountdown () {
    if(checkLoop == 0) {
        document.getElementsByClassName("pomodoro1")[0].src = "pomodoro_pixeloso.png"
    } else if (checkLoop == 2) {
        document.getElementsByClassName("pomodoro2")[0].src = "pomodoro_pixeloso.png"
    } else if (checkLoop == 4) {
        document.getElementsByClassName("pomodoro3")[0].src = "pomodoro_pixeloso.png"
    } else if (checkLoop == 6) {
        document.getElementsByClassName("pomodoro4")[0].src = "pomodoro_pixeloso.png"
    }
    
    timeLeft = TimeCounterArray[a] - 1;
    TimeCounterArray[a] = timeLeft;
    let minutesLeft = Math.floor(TimeCounterArray[a] / 60);
    let secondsLeft = Math.floor(TimeCounterArray[a] % 60);

    if(minutesLeft >= 10) {
        if(secondsLeft >= 10) {
            countdownValue[0].innerHTML = minutesLeft + ":" + secondsLeft;
        } else if (secondsLeft < 10) {
            countdownValue[0].innerHTML = minutesLeft + ":0" + secondsLeft;
        }
    }else if(minutesLeft < 10) {
        if(secondsLeft >= 10) {
            countdownValue[0].innerHTML = "0" + minutesLeft + ":" + secondsLeft;
        } else if (secondsLeft < 10) {
            countdownValue[0].innerHTML = "0" + minutesLeft + ":0" + secondsLeft;
        }
    }
    if(timeLeft == 0) {
        checkLoop += 1
        if(checkLoop == 1 || checkLoop == 3 || checkLoop == 5) {
            audioShort.play();
            a = 1;
            TimeCounterArray[a] = SelectorsValueArray[a] * 60
        }else if(checkLoop == 2 || checkLoop == 4 || checkLoop == 6) {
            audioShort.play();
            a = 0;
            TimeCounterArray[a] = SelectorsValueArray[a] * 60
        }else if(checkLoop == 7) {
            audioLOng.play();
            a = 2;
            TimeCounterArray[a] = SelectorsValueArray[a] * 60;
        }else if(checkLoop == 8) {
            audioShort.play();
            document.getElementsByClassName("pomodoro2")[0].src = "pomodoro_pixeloso_bw.png"
            document.getElementsByClassName("pomodoro3")[0].src = "pomodoro_pixeloso_bw.png"
            document.getElementsByClassName("pomodoro4")[0].src = "pomodoro_pixeloso_bw.png"
            checkLoop = 0;
            a = 0;
            TimeCounterArray[a] = SelectorsValueArray[a] * 60;
            
        }
    }
}

function start() {
    buttonMinusPomodoro[0].removeEventListener("click", buttonMinusPomodoroFunc);
    buttonMinusShortPause[0].removeEventListener("click", buttonMinusShortPauseFunc);
    buttonMinusLongPause[0].removeEventListener("click", buttonMinusLongPauseFunc);
    buttonPlusPomodoro[0].removeEventListener("click", buttonPlusPomodoroFunc);
    buttonPlusShortPause[0].removeEventListener("click", buttonPlusShortPauseFunc);
    buttonPlusLongPause[0].removeEventListener("click", buttonPlusLongPauseFunc);

    a = 0;
    timerFunction = setInterval(timerCountdown, 1000);

    buttonStart[0].removeEventListener("click", start);
}

//Pause function
function pause() {
    buttonPause[0].classList.toggle("active")
    if (buttonPause[0].classList.contains("active")) {
        clearInterval(timerFunction);
        buttonPause[0].innerHTML = "<h4>Resume</h4>";
    } else {
            timerFunction = setInterval(timerCountdown, 1000);
            buttonPause[0].innerHTML = "<h4>Pause</h4>";
    }  
}

function buttonMinusPomodoroFunc() {a = 0; minusButton()};
function buttonMinusShortPauseFunc() {a = 1; minusButton()};
function buttonMinusLongPauseFunc() {a = 2; minusButton()};
function buttonPlusPomodoroFunc() {a = 0; plusButton()};
function buttonPlusShortPauseFunc() {a = 1; plusButton()};
function buttonPlusLongPauseFunc() {a = 2; plusButton()};

//Button Event Listeners
buttonMinusPomodoro[0].addEventListener("click", buttonMinusPomodoroFunc);
buttonMinusShortPause[0].addEventListener("click", buttonMinusShortPauseFunc);
buttonMinusLongPause[0].addEventListener("click", buttonMinusLongPauseFunc);
buttonPlusPomodoro[0].addEventListener("click", buttonPlusPomodoroFunc);
buttonPlusShortPause[0].addEventListener("click", buttonPlusShortPauseFunc);
buttonPlusLongPause[0].addEventListener("click", buttonPlusLongPauseFunc);
buttonStart[0].addEventListener("click", start);
buttonPause[0].addEventListener("click", pause);
buttonReset[0].addEventListener("click", reset);