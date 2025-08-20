// function searchfood(item, cb1){
//     console.log("searching start for items....");

//     setTimeout(function fetch(){
//         // 🔑 Closure: "fetch" is an inner function
//         // It can still access "item" and "cb1" 
//         // even after searchfood has finished running

//         let data=`list of ${item}`;
//         cb1(data) // call the call back function
//                   // fun1(list of burger)
//     },3000)
// }
//  let result= searchfood('burger', function fun1(data){
//     console.log(data)
//  })
// console.log(result)  // when you dont return anything then its give- "undefined";


function searchfood(item, cb1){
    console.log("searching start for items....");

    setTimeout(function fetch(){
         let data=`list of ${item}`;
        cb1(item,data)
    },3000)
}

 function orderfood(item, cb2){
    console.log("select", item)
    setTimeout(function fetch2(){
        let id=Math.floor(Math.random()*9999)
        cb2(id)
    });
 }

 function payment(item,id, cb3){
    console.log(`payment starting for ${item} with for ${id}`)
    setTimeout(function fetch3(){
        let status=0;
        if(status=true){
            cb3(status);
        }else{
            console.log("payment failed")
        }
     },3000)
 }

 let result= searchfood('burger', function fun1(item,data){
    console.log(data);

    orderfood(item, function fun2(orderId){
        console.log("order created successfully  with id no: ",orderId)
    
         payment(item,orderId, function checkstatus(status){
        console.log("payment successfull", status)
        });
    })
 });