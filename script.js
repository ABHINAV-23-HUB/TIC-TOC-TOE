let select= document.querySelector("#p1");
let select2= document.querySelector("#p2");
let reset=document.querySelector("button");
let box=document.querySelectorAll(".box");
let turn=true; //true for player1 and false for player2
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turn===true){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
         box.add("disabled");
    });
   
});

