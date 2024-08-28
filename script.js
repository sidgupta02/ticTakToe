console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,-17,5,0],
        [3,4,5,-17,15,0],
        [6,7,8,-17,25,0],
        [0,3,6,-27,15,90],
        [1,4,7,-17,15,90],
        [2,5,8,-7,15,90],
        [0,4,8,-15,16,45],
        [2,4,6,-17,16,135],
    ];
    wins.forEach(e => {
        if((boxtext[e[0]].innerText !=="") && (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText)){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Wins!";
            isgameover = true;
            document.querySelector('.imgbox img').style.width = "200px";
            gameover.play(); 
            if((e[0] === 0 && e[1] === 4 && e[2] === 8 )|| (e[0] === 2 && e[1] === 4 && e[2] === 6) ) document.querySelector(".line").style.width = "30vw";
            else document.querySelector(".line").style.width = "25vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

// Game Logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})


//add properties for reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";

        turn="X";
        isgameover= false;
        document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
        document.querySelector('.imgbox img').style.width = "0px";
        //document.querySelector(".line").style.transform = "translate(23vw,39vw) rotate(90deg)"
        document.querySelector(".line").style.width = "0vw";

    })
})

