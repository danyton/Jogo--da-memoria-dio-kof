const emojis = [
    "./src/img/Gifs/gif1.gif",
    "./src/img/Gifs/gif1.gif",
    "./src/img/Gifs/gif2.gif",
    "./src/img/Gifs/gif2.gif",
    "./src/img/Gifs/gif3.gif",
    "./src/img/Gifs/gif3.gif",
    "./src/img/Gifs/gif4.gif",
    "./src/img/Gifs/gif4.gif",
    "./src/img/Gifs/gif5.gif",
    "./src/img/Gifs/gif5.gif",
    "./src/img/Gifs/gif6.gif",
    "./src/img/Gifs/gif6.gif",
    "./src/img/Gifs/gif7.gif",
    "./src/img/Gifs/gif7.gif",
    "./src/img/Gifs/gif8.gif",
    "./src/img/Gifs/gif8.gif"
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => Math.random() > 0.5 ? -1 : 1);

for (let i = 0; i < shuffleEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    let img = document.createElement("img");
    box.onclick = handleClick;
    img.src = shuffleEmojis[i];
    box.appendChild(img);
    document.querySelector(".game").appendChild(box);
}

function  handleClick() {
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    
    }

    if(openCards.length ==2) {
        setTimeout(checkMatch, 500);
    }
    console.log(openCards)
}

function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards =[];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Parabéns, você é um mestre da memória! Vitória merecida!");

    }
}
