// // console.log("hello world")
// function fun1(text, sum){
//     function fun2(){
//         console.log(text, sum);
        
//     }
//     let a=50;
//     let b=10;
//     console.log(a+b);
//     return fun2, a+b;f

// }

// let res=fun1("from fun 1","sum");

// res();

// const prac=document.getElementById("practice");
// prac.style.backgroundColor="yellow";



//////      setInterval          RGB--------//
// const body=document.getElementById("body");
// let colorstr='0123456789abcdef';
// function colorchange()
// {
//     let color="";
//     for(let i=0; i<6; i++)
//     {
//         let random=Math.floor(Math.random()*colorstr.length);
//         color+=colorstr[random]
//     }

// body.style.backgroundColor=`#${color}`;
// }
// setInterval(colorchange,1000)

////////      settimeout        


// function fun1()
// {console.log("hello from fun1")
//     setTimeout(function hello(){
//         console.log("hello from timeout")
//     },0)
// }
//fun1()

// function fun2(){
//     for(let i=0; i<5; i++)
//     {
//         setTimeout(function hello(){
//         console.log(i)
//         },1000)
//     }console.log("hello")
// }

// fun2("")


function fun3(){
    console.log("hello from function")
         setTimeout(()=>{
            console.log("hello world")
        }, 0)
    for(let i=0; i<10000; i++)
    {
        console.log("hello inside loop");
    }
}
fun3()