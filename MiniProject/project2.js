
// const parentdiv=document.getElementById("parentdiv");
// const box=document.getElementById("div1");

// parentdiv.addEventListener('click', ()=>{
//     console.log("helo")
// },true)

// document.body.addEventListener('click', ()=>{
//     console.log("body")
// },true)

// box.addEventListener('click', ()=>{
//     console.log("box")
// },true)

const box1=document.querySelector(".BOX1");
const box2=document.querySelector(".BOX2");
const childs=document.getElementsByClassName("child");

for(let child of childs)
{
   
    child.addEventListener('dragstart', (e)=>{

        let data=e.target;
        box2.addEventListener('dragover',(e)=>{
            e.preventDefault();
            e.stopPropagation();
        })
             box2.addEventListener("drop" ,()=>{
            box2.append(data);
            data='';
        })

         box1.addEventListener('dragover',(e)=>{
            e.preventDefault();
            e.stopPropagation();
        })
             box1.addEventListener("drop" ,()=>{
            box1.append(data);
            data='';
        })
    })
}
