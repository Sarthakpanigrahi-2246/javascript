function searchfood(item){
     return new Promise(function fun1(res,rej){
       console.log("searching start for item.......")
        setTimeout(function fetch(){
        let list=null;
        if(list){
            res({item,list})
        }
        else{
            rej(new Error(" list is empty"))
        }   
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
         },3000);
    })
}

async function foodorder(item){  
try{
    let res1=await searchfood(item)//{item,list}
    let res2=await orderfood(res1.item);//id
    let res3=await payment(res1.item, res2)//status
    return res3;
    
        }catch(err)
        {
        console.log(err)
    }
}
foodorder("burger");// call the function


