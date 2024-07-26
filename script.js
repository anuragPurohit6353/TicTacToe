console.log("welcome to tic-tac-toe");
let ttt = new Audio("ting.mp3");
let audio = new Audio("music.mp3");
let resetAudio = new Audio("gameover.mp3")
let turn = "X";

let info = document.querySelector(".info");
// Change the turn : 
let gameover = false;
let flag = 0;
const changTurn = () => {
    return turn === "X" ? "0" : "X";
}

// function for check win 

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        win.forEach(e =>{
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
                // info.style.color = "red";
                // info.style.fontSize = "50px";
             document.querySelector('.info').innerText = boxtext[e[0]].innerText + " "  + "Won";
             gameover = true;
            }
            // else {
            //     info.style.color = "black"
            // }
        })
        
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector(".boxtext");
        element.addEventListener("click", ()=> {
            if(boxtext.innerText === ""){
                boxtext.innerText =  turn;
                turn = changTurn();
                ttt.play();
             
                if(!gameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            }
                checkWin();
               
            }
        })
})

// reset configuration :  

reset.addEventListener("click",() => {
    resetAudio.play();
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
        gameover = false ;
        document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
})
