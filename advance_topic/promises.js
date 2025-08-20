function data(item){
        console.log("Checking for some text")
        const promises= new Promise(function fun1(resolve, reject){
                setTimeout(()=>{
                        if(item){
                        resolve("promised solved")
                         }
                else {
                        reject("promised reject")
                    } 
                },3000);

         
});
return promises;
}

        let result = data();
        console.log(result)//it showing promise pending

        let x=result.then(function success(result){
                console.log(result);
        }, function reject(result){
                console.log(result)       
        })
        return "hello"

console.log(x)

// const promises= new Promise(function fun1(resolve, reject){
//        // resolve("promise resolved");
//         reject("promisie is slow")
// //we can write anything downward of resolve like
// // console.log("hello resolve ") ;
// //where as if we return then we dont have to access the write anything downward of return
// });

// promises.then(function success(result){
//                 console.log(result);
//        },function reject(err){          /*for rejected we need to add seperate function*/ 
//                 console.log(err);
// });









//console.log(promises) // typeof promises= object
    