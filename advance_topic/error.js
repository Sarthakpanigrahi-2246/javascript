function searchfood(item){
     return new Promise(function fun1(res,rej){
       console.log("searching start for item.......")
        setTimeout(function fetch1(){
        let list=null;
        if(list){
            res({item,list})
        }
        else{
            rej(new Error("list is empty "))
        }


    },3000)
    })
}
function orderfood(data){
    return new Promise(function fun2(res, rej){
        console.log("select option", data)
        setTimeout(function fetch2(){
            let id=Math.floor(Math.random()*9999);
            res({id,data})
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
let result= searchfood("burger")
.then(function fun1(items){
    console.log(items);
    return orderfood(items.item);
}).then(function fun2(order){
    console.log("your id number is :",order.id)
    return payment(order)
    
}).then(function fun2(status){
    console.log("your status is:",status)
  }).catch((err)=>{
    console.log(err)
  })






//   function searchfood(item) {
//   return new Promise(function (res, rej) {
//     console.log("searching start for item.......");
//     setTimeout(function () {
//       let list = `list of ${item}`;
//       res({ item, list }); // return as object
//     }, 3000);
//   });
// }

// function orderfood(data) {
//   return new Promise(function (res, rej) {
//     console.log("select option", data);
//     setTimeout(function () {
//       let id = Math.floor(Math.random() * 9999);
//       res({ id, data }); // return id + data
//     }, 2000);
//   });
// }

// function payment(order) {
//   return new Promise(function (res, rej) {
//     console.log("processing payment for order:", order.id);
//     setTimeout(function () {
//       res("Payment successful ✅");
//     }, 1500);
//   });
// }

// // ------------------------
// // Chain of promises
// // ------------------------
// searchfood("burger")
//   .then(function (result) {
//     console.log(result); // { item: 'burger', list: 'list of burger' }
//     return orderfood(result.item); // pass the item to orderfood
//   })
//   .then(function (order) {
//     console.log("your id number is :", order.id);
//     return payment(order); // pass the whole order to payment
//   })
//   .then(function (status) {
//     console.log(status); // final payment message
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });
