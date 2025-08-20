const tictac=document.querySelector(".tictac")
const boxes=document.querySelectorAll(".box")
const gameName=document.getElementsByTagName('h1')
const rebtn=document.getElementById("restart");
let firstplayer="X";
let count=0;
let winningcondition =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function startgame(e){
    if(e.target.className !== "tictac") {
        if(e.target.innerText==="")
            {
                e.target.innerText= firstplayer;
                count ++;
                winner();
              // condition ? expressionIfTrue : expressionIfFalse
                firstplayer=firstplayer ==="X" ? "O":"X";

            }
    }   
    if(count===9){
        gameName[0].innerText='Match Draw';
    // console.log("Match Draw");
    }

}
tictac.addEventListener("click", startgame);

// if(e.target.className !== "tictac") {
//     if(e.target.innerText==="")
//     {
//     e.target.innerText= firstplayer;
//     winner();
//               // condition ? expressionIfTrue : expressionIfFalse
//     firstplayer=firstplayer ==="X" ? "O":"X";

//     }
// }   


function winner()
{
    winningcondition.forEach((item)=>{
        let index0=item[0];
        let index1=item[1];
        let index2=item[2];
       // console.log(item, index);
        //  console.log(boxes)
        
        let val0=boxes[index0].innerText;
        let val1=boxes[index1].innerText;
        let val2=boxes[index2].innerText;

       //console.log(index0, val0, index1, val1, index2, val2)  
       
       if(val0!=='' && val1!=='' && val2!=='')
       {
            if(val0=== val1 && val1===val2)
            {
                if(val0=== val1 && val1===val2){
                    
                   // boxes[index0].style.backgroundColor='red';
                    //or
                    boxes[index0].classList.add("winnerclass");
                    boxes[index1].classList.add("winnerclass");
                    boxes[index2].classList.add("winnerclass"); 
                }
                //console.log("winner is " ,val0)
                gameName[0].innerText=`Winner is ${val1}`;
                tictac.removeEventListener("click", startgame);
                count=0;
            }
       } 
   })   
}
rebtn.addEventListener('click',()=>{
    firstplayer="X";   //match jinklya-nantar parat X ni start;
    gameName[0].innerText="Tic Tac Toe";
    boxes.forEach(item=>{
        item.classList.remove("winnerclass")
    item.innerText='';
    })
    
    tictac.addEventListener("click", startgame);
})




/////////////////////////////////////////////////////////////
// if(firstplayer==="X") {
    //     firstplayer="O";
    // }
    // else{
    //     firstplayer="X"; }

    //  h1.addEventListener("clickchange",(ev)=>{
    //         ev.target.innerHTML("winner is", val0)
    //         });