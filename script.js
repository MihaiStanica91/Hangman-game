var words = ["affix", "avenue", "awkward", "beekeeper", "boggle", "cobweb", "cycle", "disavow", "duplex", "equip", "exodus", "funny", "galaxy", "gossip", "icebox", "injury",
    "ivory", "jackpot", "jelly", "jockey", "joking", "joyful", "jumbo", "kayak", "khaki", "kiosk", "lengths", "lucky", "luxury", "lymph", "nightclub", "onyx", "ovary", "pajama",
    "pneumonia", "pshaw", "puppy", "scratch", "staff", "stretch"];

var wordEmptySpaces = [];
var wordStatus = null;
var answer = '';
var attemptsLeft = 8;
var div = document.getElementById("alphabet");

function startGame() {
    if (startButton.style.display === "block" && restartButton.style.display === "none" && attempts.style.display === "none") {
        startButton.style.display = "none";
        restartButton.style.display = "block";
        attempts.style.display = "block";
    }

    alphabetButtons();
    randomWord();
    emptyWord();
}

function alphabetButtons() {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let i = 0; i < alphabet.length; i++) {
        var btn = document.createElement("BUTTON");
        btn.setAttribute("class", "btn btn-primary");
        btn.style.marginRight = "10px";
        btn.innerHTML = alphabet[i];
        btn.id = alphabet[i];
        div.appendChild(btn);
        
        btn.addEventListener ("click", function() {
            checkLetter(this.id);
        });
    }
}

function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
}

function emptyWord() {
    wordStatus = answer.split('').map(letter => (wordEmptySpaces.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById("emptySpaces").innerHTML = wordStatus;
}

function checkLetter(chosenLetter) {
    wordEmptySpaces.indexOf(chosenLetter) === -1 ? wordEmptySpaces.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute("disabled", true);
    if (answer.indexOf(chosenLetter) >= 0) {
        emptyWord();
        gameWon();
    } else {
        attemptsLeft--;
        updateAttempts();
        gameLost();
    }
}

function updateAttempts() {
    document.getElementById("attemptsLeft").innerHTML = attemptsLeft;
}

function gameWon() {
    if (answer === wordStatus) {
        document.getElementById("emptySpaces").innerHTML = 'Congratulations!!! You Won!!!';
    }
}

function gameLost() {
    if (attemptsLeft === 0) {
        document.getElementById("emptySpaces").innerHTML = 'You Lost!!! The word was: ' + answer + '!';
    }
}

function restartGame() {
    location.reload();
}