const btn=document.getElementById("genpass");
const newpass=document.getElementById("newpass");
const h1range=document.getElementById("range"); //slider
const rangeval=document.getElementById("rangevalue");

const uppercase= document.getElementById("capital");
const lowercase= document.getElementById("small");
const numbers= document.getElementById("number");
const symbols= document.getElementById("symbol");
const copybutton=document.getElementById("copybtn");

rangeval.innerText=h1range.value;

h1range.addEventListener('input',(e)=>{
    rangeval.innerText=e.target.value;  
})



 

btn.addEventListener('click' , ()=>{

    let capitalLetter='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smallLetter='abcdefghijklmnopqrstuvwxyz';
    let number='1234567890';
    let symbol='!@#$%^&*~`_-+<>?/:;';

    let finalstr='';
    if(uppercase.checked)
    {
        finalstr+=capitalLetter;
    }
    if(lowercase.checked)
    {
        finalstr+=smallLetter;
    }
    if(numbers.checked)
    {
        finalstr+=number;
    }
    if(symbols.checked){
        finalstr+=symbol;
    }

    if(finalstr ==='')
    {
        alert("please select one check box");
        //newpass.innerText = 'lalu';
        return ;
    }
    let latestpass='';
 // console.log(finalstr)   

    for(let i=0; i<h1range.value; i++)
        
    {
        let randomNum=Math.floor(Math.random()*finalstr.length);
        console.log(randomNum)

       latestpass +=finalstr[randomNum]
    }
    
 
     newpass.innerText=`${latestpass}`;
    
})//
//copied button
copybtn.addEventListener('click',()=>{
    console.log("coppied")
    window.navigator.clipboard.writeText( newpass.innerText)
})
