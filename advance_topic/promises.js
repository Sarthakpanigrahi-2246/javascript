// function data(item){
//         console.log("Checking for some text")
//         const promises= new Promise(function fun1(resolve, reject){
//                 setTimeout(()=>{
//                         if(item){
//                         resolve("promised solved")
//                          }
//                 else {
//                         reject("promised reject")
//                     } 
//                 },3000);         
// });
// return promises;
// }

//         let result = data("43");
//         console.log("this is result :",result) //it showing promise pending

//         let x=result.then(function success(result){  // ".then" also showing  a promise
//                 console.log(result);
//         }, function reject(result){
//                 console.log(result)

//                 return "hello from .X then" //returning a value that give you two promise
//         }).then((e)=>{     // chaning
//         console.log(e);
//  })




// const promises= new Promise(function fun1(resolve, reject){
//        // resolve("promise resolved");
//         reject("promisie is slow")
//we can write anything downward of resolve like
// console.log("hello resolve ") ;
//where as if we return then we dont have to access the write anything downward of return
//});

// promises.then(function success(result){
//                 console.log(result);
//        },function reject(err){          /*for rejected we need to add seperate function*/ 
//                 console.log(err);
// });
// console.log(promises) // typeof promises= object




// function searchfood(item, cb1){
//     console.log("searching start for items....");

//     setTimeout(function fetch(){
//          let data=`list of ${item}`;
//         cb1(item,data)
//     },3000)
// }

// const promises= new Promise(function(res,rej){
//   return 
// })

function searchfood(item) {
  return new Promise(function (res, rej) {
    console.log("searching start for item.......");
    setTimeout(function () {
      let list = `list of ${item}`;
      res({ item, list }); // return as object
    }, 3000);
  });
}

function orderfood(data) {
  return new Promise(function (res, rej) {
    console.log("select option", data);
    setTimeout(function () {
      let id = Math.floor(Math.random() * 9999);
      res({ id, data }); // return id + data
    }, 2000);
  });
}

function payment(order) {
  return new Promise(function (res, rej) {
    console.log("processing payment for order:", order.id);
    setTimeout(function () {
      res("Payment successful ✅");
    }, 1500);
  });
}

// ------------------------
// Chain of promises
// ------------------------
searchfood("burger")
  .then(function (result) {
    console.log(result); // { item: 'burger', list: 'list of burger' }
    return orderfood(result.item); // pass the item to orderfood
  })
  .then(function (order) {
    console.log("your id number is :", order.id);
    return payment(order); // pass the whole order to payment
  })
  .then(function (status) {
    console.log(status); // final payment message
  })
  .catch((err) => {
    console.log("Error:", err);
  });



// let result=(searchfood("burger")).then(function consume1(item,){
//     console.log("you selected :",item)

//      orderfood(item).then((id)=>{                                   //THIS IS PROMISE HELL
//        console.log("order created successfully  with id no: ",id)        //THIS IS PROMISE HELL
//        payment(item, id).then((item,id,status)=>{                      //THIS IS PROMISE HELL
//            console.log(`thanks ${id} for eating ${item}`)           //THIS IS PROMISE HELL
//        })                                                            //THIS IS PROMISE HELL
//        });                                                             
// });


// const promises1=new Promise(function (res, rej){
//     let success="";
//     if (success){
//         res("promised fulfilled")
//     }
//     else{
//         rej("rejected promise")
//     }
// })

// promises1.then((messege)=>{
//     console.log("messege is:", messege)
// }).catch((error )=>{
//     console.log("error is: ",error)
// })




