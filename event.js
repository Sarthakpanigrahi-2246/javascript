// console.log("hellow event")
// const event=document.getElementById("firstb");
// firstb.innerText="CLICK ME";

// const btn=document.getElementById("btn");
      // /**  over ride and give  2 btn output  */
// btn.onclick=()=>{
//  console.log('hello from js file');
// }
// btn.onclick=()=>{
//  console.log('hello from js file 22'); ///output
// }

//**    Mostly used         */

// btn.addEventListener('click',function()
// {
//     console.log('hello from js file 2')
// })


// btn.addEventListener('click',()=>
// {
//     console.log('hello from js file 3')
// })

{
//  const btn=document.getElementById("btn")
// const body=document.querySelector("body")
   
// btn.addEventListener('click',(e)=>  //e means event object
// {
//     console.log(e);
//     e.target.innerText="change from js";
//     console.log(e.target);
//     console.log("hello from js")
  

     

//     const ChangOrNot=confirm("color change")
//     if(ChangOrNot)
//     {
//         const colorName=prompt("which color")
//         console.log(colorName)

//         body.style.backgroundColor=`${colorName}`;
//         btn.style.backgroundColor=`${colorName}`;
        
        // body.style.backgroundColor="black";
        // btn.style.backgroundColor="yellow";
    
    // else{
    //      btn.style.backgroundColor="pink";
    //     body.style.backgroundColor="green";
    // }  
// })

 }


    const submit=document.getElementById("submit");
    const colorName=document.getElementById("colorName");
    const body=document.body;
    submit.addEventListener('input', (e) =>  {
        e.preventDefault();
        console.log(e);
        body.style.backgroundColor=`${colorName.value}`
        console.log(colorName.value)
        });

  

//  console.log(Math.floor(Math.random()*(Math.random()+6)))

    //  const btn = document.querySelector("#btn");
    // function random(number){
    //     return Math.floor(Math.random()*(number+1));
       
    // }
    // btn.addEventListener("click", ()=>{
    //     const randmcol=`rgb(${random(255)} ${random(255)} ${random(255)})`;
    //     document.body.style.backgroundColor = randmcol;
    // })
    

    
