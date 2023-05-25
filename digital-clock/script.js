const updateClock = () => {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (hours < 10) {
        return '0' + hours;
    }

    if (minutes < 10) {
        return '0' + minutes;
    }

    if (seconds < 10) {
        return '0' + seconds;
    }

    var time = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = time;

    setTimeout(updateClock, 1000);
}

updateClock();