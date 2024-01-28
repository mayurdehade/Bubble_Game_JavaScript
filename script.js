let time = 60;
let score = 0;
let hit;

function makeBubble() {
    let clutter = "";

    for(let i=1; i<=184; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }

    document.querySelector('.bpanel').innerHTML = clutter;
}

function timer() {
    let timeint = setInterval(() => {
        if(time > 0) {
            time--;
            document.querySelector("#timer").textContent = time;
        }
        else {
            clearInterval(timeint);
            document.querySelector(".bpanel").innerHTML = '<h1 id="end">Game Over</h1>';
            document.querySelector("#reset").innerHTML = "Play Again";
        }
    }, 1000);
}

function changeHit() {
    hit = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hit;
}

function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

//Event Bubbling
/*
jispe click karoge wo element par event raise hoga, aur event listener
naa mile par event element ke paret par listerner dhundhega,
waha bhi naa mile par evenet parement ke parent ke parent par listner dhundega
*/

document.querySelector(".bpanel").addEventListener("click", function(details) {
    let clickedNumber = Number(details.target.textContent);
    if(hit == clickedNumber) {
        increaseScore();
        changeHit();
        makeBubble();
    }
});

function reset() {
    score = 0;
    time = 61;
    changeHit();
    makeBubble();
}

makeBubble();
timer();
changeHit();
