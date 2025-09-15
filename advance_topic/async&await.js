// function promises(item){
//     console.log("hi", item)
//     return item;
// }
// let x=promises("hello")
// console.log(x);




/*

    function pro() {
        return new Promise(function (res, rej) {
            setTimeout(() => {
                let num = Math.floor(Math.random() * 9999);
                res("num is: " + num);
            }, 4000);
        });
    }
    async function fun1() {
        console.log("hello async");//1,

        let fun = await pro();  // wait for promise to resolve
        console.log("end");
        console.log(fun);
        let x=console.log("hellow");
        
    return x;
    }

    let y = fun1();
    console.log("end is");
    fun1().then((x)=>{
        console.log("x  is :",x)
    })

*/



function searchfood(item){
     return new Promise(function fun1(res,rej){
       console.log("searching start for item.......")
        setTimeout(function fetch(){
        let list=`list of ${item}`;
        res(item,list)
    },3000)
    })
}
function orderfood(data){
    return new Promise(function fun2(res, rej){
        console.log("select option", data)
        setTimeout(function fetch(){
            let id=Math.floor(Math.random()*9999);
            res(id)
        },2000);
    })
}
function payment(item, id){
    return new Promise(function fun3(res, rej){
         console.log(`payment starting for ${item} with for ${id}`)
         setTimeout(function fetch3(){
            let status=true;
         res(status)
         },5000);
    })
}

async function foodorder(item){
    let res1=await searchfood(item);
    let res2=await orderfood(res1.item);
    let res3=await payment(res2.item, id)
    return res3;
}


