document.getElementById("myButton").addEventListener("click", function() {
    var lives = document.getElementById("number1").value;
    var maximum= document.getElementById("number2").value;
    if (isNaN(lives) || isNaN(maximum)) {
        alert("Please enter valid numbers.");
    } else {
        var guesses = 0;
        var guessed = false;
        let randomNumber = getRandomInt(1, maximum);
        while(!guessed && guesses < lives) {
            let text = guesses === 0 ? `Jaké číslo si myslím od 1 do ${maximum} ?` : `Zkus to znovu a lépe. Stále hádáme od 1 do ${maximum}. Zbývá pokusů: ${lives - guesses}.`
            let guess = Number(prompt(text));
            if (isNaN(guess)) {
                console.log("Nebylo zadáno číslo");
                continue;
            }
            if (guess === randomNumber) {
                guessed = true;
                break;
            }
            guesses++;
        }
        if (guessed) {
            endGame(randomNumber, true);
        } else {
            endGame(randomNumber, false);
        }
    }
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function endGame(number, win) {
    var element = document.getElementById('mainContent');
    element.classList.add('hide');
    var endgame = document.getElementById('endgame');
    var h1 = document.createElement("h1");
        h1.textContent = win ? `Uhádl jsi moje číslo ${number} a vyhráváš. GRATULACE!!!` : `Neuhádl jsi moje číslo ${number} - více slov netřeba. Ani takhle jednoduchý úkol jsi nezvládl.`;
        
        var button = document.createElement("button");
        button.textContent = "Hrát znovu";
        button.addEventListener("click", function() {
            location.reload();
        });
    
        endgame.appendChild(h1);
        endgame.appendChild(button);
}