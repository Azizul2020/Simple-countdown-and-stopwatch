var start = document.querySelector(".startstop");
var stop = document.querySelector(".reset");
var value = true;
var s;
var display = document.querySelector(".display_area h1");

start.addEventListener("click", function() {
    if (value === true) {
        var hour = parseFloat(document.querySelector(".hour").value) * 60 * 60;
        var min = parseFloat(document.querySelector(".minute").value) * 60;
        var sec = parseFloat(document.querySelector(".second").value);
        //parse float must be use because min and sec value will need integar /nub
        var time = hour + min + sec;

        s = setInterval(function() {
            function stopwatch(s) {

                time--;
                var Hour = Math.floor(s / 3600);
                var min = Math.floor((s / 60) % 60); // % 60 =minus hour;
                var sec = Math.floor(s % 60);
                document.querySelector(".hour").value = null;
                document.querySelector(".minute").value = null;
                document.querySelector(".second").value = null;
                if (min < 10) {
                    min = "0" + min;
                } else {
                    min = min
                }
                if (sec < 10) {
                    sec = "0" + sec;
                } else {
                    sec = sec;
                }
                return Hour + " <sub>Hr</sub>  : " + min + " <sub>min</sub>  : " + sec + " <sub>sec</sub>";
            }

            display.innerHTML = stopwatch(time);
        }, 1000);
        value = false;
        start.value = "Stop";
    } else {
        clearInterval(s);
        value = true;
        start.value = "Start";
    }
    stop.addEventListener("click", function() {
        clearInterval(s);
        min = 0;
        sec = 0;
        display.innerHTML = "You don't have entered the goal,you set.";
        document.querySelector(".minute").value = null;
        document.querySelector(".second").value = null;
        document.querySelector(".hour").value = null;
    })
})