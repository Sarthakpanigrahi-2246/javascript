{/***********  //rest is used to understand ******************/
//     console.log("hello world");
//     function sum(a,b,c,...num) //Rest is used in function parameters to collect all remaining arguments into an array 
//     { 
//         console.log(num[3]);
//     }
//     sum(4,5,7,6,5,4);
}
{
    // let obj={
    // name:"sarthak",
    // id:"186",
    // college:"jspm",
    // }
    //**********destructuring of object using rest and spread/****************** */


    // let {name,id,college}=obj;
    // console.log(college);

    // let {name,...remain}=obj;//using rest operator
    // console.log(remain);
}
{
// let obj={
//     name:"sarthak",
//     id:"186",
//     tag:"university,js,vs",
//     college:"jspm",
// }
//     function obj1({college,tag,name,id}) //using de-structuring
//     // function obj1(...obj)
//     {
//         console.log(obj);
//         let newarray=tag.split(",");
//         console.log(newarray);
//     }
// obj1(obj);
}
{//forEach()
    // let arr=[2,3,4,5,6,]
    // arr.forEach(function (val)
    // {
    //     console.log(val);
    // })

// let arr=[1,2,3,4,5,6,7];
// const hello=(a,b,c)=>{
//        console.log(b) 
//        console.log(arr) 
//     }
// hello(2,4,6);
// hello(arr,5);

// let arr=[2,4,6,8,10]
// function print(val)
// {
//     console.log(val);
// }
//  arr.forEach(print);
}
{//undestanding map
/*The .map() method is used with arrays when you want to:
Transform each element of the array
Return a new array with the transformed values*/
     let arr=[2,4,6,8,10]
    // const newArr= arr.map(function(val){
        
    //     val+=5;
    //     console.log(val)
    //     return val;
    // } )
    // console.log(newArr);
    /*const newarr= arr.map((val)=> {//using arrow function
        val *=3
         return val;}
    )
    console.log(newarr);*/
}
{//understanding filter()
// 🧹 filter()
// ➡️ Filters items based on a condition.
// 📦 Returns a new array (may be shorter).
  /*let arr = [20,40,60,80,100];
  const newArr = arr.filter((val)=>(val<=60))//condition check(val<=60))
  console.log(newArr)*/
}
{//understanding reduce()
// ➕ reduce()
// ➡️ Combines all items into a single value.
// 📦 Returns a single result (not an array).

/*let arr=[20,20,40,50,60,70,80]
const newArr = arr.reduce((acc,cur)=>acc=acc+cur);
console.log(newArr);*/

//******Best example of filter***************** */
let students=[
  {name:"sarthak", course:"btech", branch:"cse"},
  {name:"rohit", course:"btech", branch:"civil"},
  {name:"vinayak", course:"btech", branch:"civil"},
  {name:"omkar", course:"btech", branch:"mech"},
  {name:"shani", course:"btech", branch:"cse"},
  {name:"mohit", course:"btech", branch:"civil"},
  {name:"om", course:"btech", branch:"mech"},
  {name:"gupta", course:"btech", branch:"civil"}
];
// const newArr= students.filter((val)=>val.branch==="cse")
const newArr=students.filter((val)=>{
if(val.branch==="civil"){
  let fullname="";
  fullname+=val.name;
    
 return val;
}
}).map((val)=>val.name)
console.log("student name in array :",newArr)


}
