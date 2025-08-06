{// const h1= document.getElementById('heading');
// h1.innerText = 'from javascript' ;
// console.log(h1.innerText);
// h1.style.color = "yellow";
// h1.style.backgroundColor="blue";
}
// const h2=document.getElementsByTagName('h2')
// console.log(h2[0].textContent)
// h2[0].innerHTML="<i><b>hello git</b></i>"

// const h2=document.querySelector('h2') // for tag
// // const h2=document.querySelector('#access') //for id
// h2.style.backgroundColor='pink';
// h2.style.border='2px solid black';
// h2.style.borderRadius='5px'; 
// console.log(h2);

// h2.setAttribute("class","helo333") //externally class name change.;
// h2.setAttribute("style", "background-color:green" )

 { // creating a new tag in htmllist using js append
// const newtag= document.createElement("p");//creating a paragraph tag
// newtag.setAttribute("id", "para");// giving id and id name = para
// newtag.innerText="paragraph Tag: writing txt"; // writing a text between a p tag

// // const body=document.body;
// // body.append(newtag) 
//  /**      OR      */
// const body=document.getElementsByTagName("body")
// body[0]=append(newtag) 
}

 { //adding an component in ul using js
let data =["monitor","laptop","mouse","keyboard","speaker" ]
const ul=document.getElementById("component")

for(let i=0; i<data.length; i++)
{
    const liTag=document.createElement('li');
    liTag.style.backgroundColor="pink";
    liTag.innerText=data[i] ;
    liTag.style.border="3px solid yellow";
    liTag.style.borderradius="5px";
    liTag.style.textAlign="center";
    liTag.style.alignContent="center";
    liTag.style.padding="10px";
    liTag.style.margin="5px";
    

    ul.appendChild(liTag);
}
}




