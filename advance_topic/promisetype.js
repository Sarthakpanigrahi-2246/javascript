// function api1(item){
//     return new Promise((res,rej)=>{
//          setTimeout(()=>{
//             res(item)
//         },4000)
//     })
// }
// function api2(data){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(data)
//         },4000)
//     })
// }
// async function api3(datas){
//     return new Promise((res,rej)=>{
//        let x=  setTimeout(()=>{
//             res(datas)
//         },3000)
        
//     })
// }

// let x=Promise.all([api1("salad"),api2("roti"),api3("chawal")]).then((data)=>{
//     console.log("wait 5 min sirji",x)
 //     console.log("your dish is ready",data)
//})


//********promises allSettled() */

function api1(item){
    return new Promise((res,rej)=>{
         setTimeout(()=>{
            rej(item)
        },4000)
    })
}
function api2(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(data)
        },4000)
    })
}
async function api3(datas){
    return new Promise((res,rej)=>{
       let x=  setTimeout(()=>{
            rej(datas)
        },3000)
        
    })
}

// let x=Promise.allSettled([api1("salad"),api2("roti"),api3("chawal")]).then((data)=>{
//     console.log("wait 5 min sirji",x)
//      console.log("your dish is ready",data)
// }).catch((error)=>{
//     console.error(error);
// })

// ---------output---------
//  { status: 'fulfilled', value: 'salad' },
//   { status: 'fulfilled', value: 'roti' },
//   { status: 'rejected', reason: 'chawal' }


let x=Promise.any([api1("salad"),api2("roti"),api3("chawal")]).then((data)=>{
    console.log("wait 5 min sirji",x)
     console.log("your dish is ready",data)
}).catch((error)=>{
    console.error(error);
})
 