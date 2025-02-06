let dino = document.getElementById('dino');
let cactus = document.getElementById('cactus');
let gameOver = document.getElementById('gameOver');
let gameStarted = false;

document.addEventListener('keydown', function(event) {
    // O'yin boshlash uchun Probelni bosing
    if (event.key === ' ' && !gameStarted) {
        startGame();
    }

    // Probelni bosinganda sakrash
    if (event.key === ' ') {
        jump();
    }
});

// Dinozavrni sakratish
function jump() {
    if (dino.style.bottom === "0px" || dino.style.bottom === "") { // Agar dinozavr pastga tushsa
        dino.style.bottom = "100px"; // Sakrash balandligi
        setTimeout(function () {
            dino.style.bottom = "0px"; // Tushishi
        }, 300); // Sakrash vaqti
    }
}

function startGame() {
    gameStarted = true;
    cactus.style.animationPlayState = "running";
    document.getElementById("gameOver").style.display = "none";
}

function checkCollision() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 80 && cactusLeft > 0 && dinoTop <= 50) { // Agar dinozavr kaktusga urilsa
        gameOver.style.display = "block";
        cactus.style.animationPlayState = "paused";
    }
}

function restartGame() {
    gameStarted = false;
    cactus.style.animationPlayState = "paused";
    cactus.style.animation = "none";
    setTimeout(function() {
        cactus.style.animation = "cactusMove 2s linear infinite";
        startGame();
    }, 100);
}

setInterval(checkCollision, 10);
