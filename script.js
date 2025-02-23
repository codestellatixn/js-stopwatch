let [seconds, minutes, hours] = [0, 0, 0];

const displayTime = document.getElementById("displayTime");

let timer = null;

function stopwatch() {

    seconds++;
    if(seconds == 60) {
        seconds = 0;
        minutes++;

        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime.innerHTML = `${zeroes(hours)}:${zeroes(minutes)}:${zeroes(seconds)}`;

}

function startWatch() {
    if(timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 1000);
}

function stopWatch() {
    clearInterval(timer);
}

function resetWatch() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];

    displayTime.innerHTML = "00:00:00"
}

function zeroes(number) {
    return number < 10 ? "0" + number : number;
}