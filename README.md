# Digital Clock

This is a simple digital clock project implemented using HTML, CSS, and JavaScript. It displays the current time and updates every second.

## Features

- Displays the current time in 24-hour format. Code body :
- Updates the time dynamically every second.
- Customizable styling using CSS.

## Getting Started

To use the digital clock project, follow these steps:

1. Clone the repository:
`git clone https://github.com/Ocpcgo/digital-clock.git`
2. Open the index.html file in a web browser.

## Code
1. HTML code :
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="./style.css" rel="stylesheet">
</head>
<body>
    <div class="clock-container">
        <!-- <h2 class="clock-title">Digital Clock</h2> -->
        <div id="clock" class="digital-clock"></div>
    </div>
    <script src="./script.js"></script>
</body>
</html>
```
2. JavaScript for time function :
```
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
```
3. CSS styling :
```
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: rgb(50, 39, 16);
}

.clock-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
    border: 3px solid burlywood;
    border-radius: 0%;
    background-color: rgb(33, 28, 28);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

}

.digital-clock {
    font-size: 30px;
    font-family: Orbitron, sans-serif;
    text-align: center;
    color: greenyellow;
    position: relative;
}

/* .clock-title {
    font-size: 20px;
    font-family: 'Courier New', Courier, monospace;
    margin-bottom: 20px;
} */
```

## Acknowledgements
This project was inspired by various clock implementations available througout the web.
