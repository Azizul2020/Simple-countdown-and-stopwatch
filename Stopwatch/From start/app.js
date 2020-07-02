var selector = document.querySelector(".time h1");
var input = document.querySelectorAll("input");
var startStop = document.querySelector(".startStop");
var Reset = document.querySelector(".reset");
var hour = 0;
var minute = 0;
var second = 0;
var a = "x";
var h;

function stopwatch() {

    second++;
    if (second / 60 == 1) {
        second = 0;
        minute++;
        if (minute / 60 == 1) {
            minute = 0;
            hour++;
        }
    }
    if (second < 10) {
        second = "0" + second;
    }
    var x = "0";
    selector.innerHTML = x + hour + " : " + x + minute + " : " + second;
    if (minute >= 10) { x = null };
    if (hour >= 10) { x = null };
}
startStop.addEventListener("click", function() {
    if (a === "x") {

        h = setInterval(stopwatch, 1000);
        a = "y";
        startStop.innerHTML = "Stop";

    } else if (a === "y") {

        clearInterval(h);
        a = "x";
        startStop.innerHTML = "Start";

    }
});
Reset.addEventListener("click", function() {
    clearInterval(h);
    minute = 0;
    hour = 0;
    second = 0;
    selector.innerHTML = '00' + " : " + '00' + " : " + '00';
})