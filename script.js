//Global values
let intValuePomodoro;
let intValueLongPause;
let intValueShortPause;
let countdown;
let timeLeft;
let timeCounter = 0;
let timeCounterPomodoro = 25;
let timeCounterShortPause = 5;
let timeCounterLongPause = 15;

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

//Changing tomato image
//document.getElementsByClassName("pomodoro1")[0].src = "pomodoro_pixeloso_bw.png"

//Pomodoro functions
function minusPomodoro() {
    let valuePomodoro = timeSelectorsValue[0].innerHTML;
    let intValuePomodoro = parseInt(valuePomodoro);
    if (intValuePomodoro > 1) {
        timeSelectorsValue[0].innerHTML = intValuePomodoro - 1;
        if(timeSelectorsValue[0].innerHTML < 10) {
            timeCounterPomodoro = parseInt(timeSelectorsValue[0].innerHTML) * 60;
            countdownValue[0].innerHTML = "0" + timeSelectorsValue[0].innerHTML + ":" + "00";
        }else if(timeSelectorsValue[0].innerHTML >= 10) {
            timeCounterPomodoro = parseInt(timeSelectorsValue[0].innerHTML) * 60;
            countdownValue[0].innerHTML = timeSelectorsValue[0].innerHTML + ":" + "00";
        }
    }
}

function plusPomodoro() {
    let valuePomodoro = timeSelectorsValue[0].innerHTML;
    intValuePomodoro = parseInt(valuePomodoro);
    if (intValuePomodoro < 60) {
        timeCounterPomodoro = parseInt(timeSelectorsValue[0].innerHTML) * 60;
        timeSelectorsValue[0].innerHTML = intValuePomodoro + 1;
        if(timeSelectorsValue[0].innerHTML < 10) {
            timeCounterPomodoro = parseInt(timeSelectorsValue[0].innerHTML) * 60;
            countdownValue[0].innerHTML = "0" + timeSelectorsValue[0].innerHTML + ":" + "00";
        }else if(timeSelectorsValue[0].innerHTML >= 10) {
            timeCounterPomodoro = parseInt(timeSelectorsValue[0].innerHTML) * 60;
            countdownValue[0].innerHTML = timeSelectorsValue[0].innerHTML + ":" + "00";
        }
    }
}

//Short Pause functions
function minusShortPause() {
    let valueShortPause = timeSelectorsValue[1].innerHTML;
    intValueShortPause = parseInt(valueShortPause);
    if (intValueShortPause > 1) {
        timeSelectorsValue[1].innerHTML = intValueShortPause - 1;
    }
}

function plusShortPause() {
    let valueShortPause = timeSelectorsValue[1].innerHTML;
    let intValueShortPause = parseInt(valueShortPause);
    if (intValueShortPause < 60) {
        timeSelectorsValue[1].innerHTML = intValueShortPause + 1;
    }
}

//Long Pause functions
function minusLongPause() {
    let valueLongPause = timeSelectorsValue[2].innerHTML;
    let intValueLongPause = parseInt(valueLongPause);
    if (intValueLongPause > 1) {
        timeSelectorsValue[2].innerHTML = intValueLongPause - 1;
    }
}

function plusLongPause() {
    let valueLongPause = timeSelectorsValue[2].innerHTML;
    let intValueLongPause = parseInt(valueLongPause);
    if (intValueLongPause < 60) {
        timeSelectorsValue[2].innerHTML = intValueLongPause + 1;
    }
}

//Reset function
function reset() {
    timeSelectorsValue[0].innerHTML = 25;
    timeSelectorsValue[1].innerHTML = 5;
    timeSelectorsValue[2].innerHTML = 15;
    countdownValue[0].innerHTML = timeSelectorsValue[0].innerHTML + ":" + "00";
    buttonPause[0].classList.remove("active");
    buttonPause[0].innerHTML = "<h4>Pause</h4>"
    timeCounterPomodoro = parseInt(timeSelectorsValue[0].innerHTML) * 60
    console.log("popo")
}

// Start function
function start() {
    document.getElementsByClassName("pomodoro1")[0].src = "pomodoro_pixeloso.png"
    if(timeCounterPomodoro > 0) {
        timeLeft = timeCounterPomodoro - 1;
        timeCounterPomodoro = timeLeft;
        let minutesLeft = Math.floor(timeCounterPomodoro / 60);
        let secondsLeft = Math.floor(timeCounterPomodoro % 60);

        if(minutesLeft >= 10) {
            if(secondsLeft >= 10) {
            countdownValue[0].innerHTML = minutesLeft + ":" + secondsLeft;
            }else if (secondsLeft < 10) {
                countdownValue[0].innerHTML = minutesLeft + ":0" + secondsLeft;
            }
        }else if (minutesLeft < 9) {
            if(secondsLeft >= 10) {
                countdownValue[0].innerHTML = "0" + minutesLeft + ":" + secondsLeft;
            }else if (secondsLeft < 10) {
                countdownValue[0].innerHTML = "0" + minutesLeft + ":0" + secondsLeft;
            }          
        }
    }
}
//Time selectors event listeners
buttonMinusPomodoro[0].addEventListener("click", minusPomodoro);
buttonPlusPomodoro[0].addEventListener("click", plusPomodoro);

buttonMinusShortPause[0].addEventListener("click", minusShortPause);
buttonPlusShortPause[0].addEventListener("click", plusShortPause);

buttonMinusLongPause[0].addEventListener("click", minusLongPause);
buttonPlusLongPause[0].addEventListener("click", plusLongPause);

//Button Reset [Resets all values to default]
buttonReset[0].addEventListener("click", reset);

timeCounterPomodoro = parseInt(timeSelectorsValue[0].innerHTML) * 60;

//Button Start 
buttonStart[0].addEventListener("click", () => {
    //Time Selectors buttons don't work while timer is working
    buttonMinusPomodoro[0].removeEventListener("click", minusPomodoro);
    buttonPlusPomodoro[0].removeEventListener("click", plusPomodoro);
    buttonMinusShortPause[0].removeEventListener("click", minusShortPause);
    buttonPlusShortPause[0].removeEventListener("click", plusShortPause);
    buttonMinusLongPause[0].removeEventListener("click", minusLongPause);
    buttonPlusLongPause[0].removeEventListener("click", plusLongPause);

    countdown = setInterval(start, 1000);
        console.log(timeCounterPomodoro); 
})

//Button Pause
buttonPause[0].addEventListener("click", () => {
    buttonPause[0].classList.toggle("active")
    if (buttonPause[0].classList.contains("active")) {
        clearInterval(countdown);
        buttonPause[0].innerHTML = "<h4>Resume</h4>"
        console.log(timeCounterPomodoro);
    } else {
        countdown = setInterval(start, 1000);
        /*countdown = setInterval(
            function() {
                document.getElementsByClassName("pomodoro1")[0].src = "pomodoro_pixeloso.png"
                if(timeCounterPomodoro > 0) {
                    timeLeft = timeCounterPomodoro - 1;
                    timeCounterPomodoro = timeLeft;
                    let minutesLeft = Math.floor(timeCounterPomodoro / 60);
                    let secondsLeft = Math.floor(timeCounterPomodoro % 60);
    
                    if(minutesLeft >= 10) {
                        if(secondsLeft >= 10) {
                        countdownValue[0].innerHTML = minutesLeft + ":" + secondsLeft;
                        }else if (secondsLeft < 10) {
                            countdownValue[0].innerHTML = minutesLeft + ":0" + secondsLeft;
                        }
                    }else if (minutesLeft < 9) {
                        if(secondsLeft >= 10) {
                            countdownValue[0].innerHTML = "0" + minutesLeft + ":" + secondsLeft;
                        }else if (secondsLeft < 10) {
                            countdownValue[0].innerHTML = "0" + minutesLeft + ":0" + secondsLeft;
                        }          
                    }
                }
            }
            , 1000)*/
        buttonPause[0].innerHTML = "<h4>Pause</h4>";
    }
})
