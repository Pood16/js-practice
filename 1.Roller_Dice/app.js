let btn = document.getElementById("roll-btn");
btn.addEventListener("click", rollDice);

function rollDice(){
    const diceNumber = document.getElementById("dice-number").value; //number of dices to roll
    const diceSides = document.getElementById("dice-value"); 
    const diceFaceImage = document.getElementById("dice-face");
    const values = [];
    const Images = [];
    for (let i = 0; i < diceNumber; i++){
        const randomDiceFace = Math.floor(Math.random() * 6) + 1;
        values.push(randomDiceFace);
        Images.push(`<img src ="images/${randomDiceFace}.png" alt = "${randomDiceFace}">`);
    }
    console.log(Images)
    diceSides.innerText = `Your Luck gets you : ${values.join(", ")}`;
    diceFaceImage.innerHTML  = Images.join('');
}