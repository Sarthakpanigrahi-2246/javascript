// let char =['a','f'];
// console.log(typeof char);

// let arr =[2,3,4,5,6,7];
// arr.push(4,5); //add the element in last
// arr.pop(); //removing the element in last
// console.log(arr);
// let newarr= arr.concat(10,11,12); //adding a new array in existing array anf giving new array
// console.log(newarr);

// let ret = arr.indexOf(4); //indexOf() is used to find the value using and index
// console.log(ret);

// let jointarr= arr.join("/");//joint the array and add some new things;
// console.log(jointarr);

// console.log(arr.length);//find length
// console.log(arr.reverse()) // reversing an array


// arr.shift();         //removing the first element of an array
// arr.unshift(44,55); //adding the first element of an array
// console.log(arr);

// let arr =[2,3,4,5];
// let newarr= arr.slice(1,4); //cutting a such of number using an index and cutted partes show
// console.log(newarr);


// let newArr= arr.splice(1,2);
// console.log(arr); //cutting a such of number using an index and cutted partes don,t show
// console.log(newArr);


// {
//     //  function in array
//     let arr =[2,3,4,5,6,7];
//     for (let i = 0; i<arr.length; i++)
//     {
//         console.log(arr[i]);
//     } 

// }

{
    //destructinal of a array
    let desarr = [4,6,8,10,12,14]
    let [a,b,c,d,e,f,]=desarr;
    console.log("destu num is :",c);
}


// {
//     // object access
//     const clg=
//     {
//         name:"sarthak-sp",
//         course:"btech",
//         branch: "cse",
//         class:"third year",
//         Id:"186",
//     }

//     console.log(clg.name);
// }

// { // object in array
//     const student =[
//         {
//         name:"sarthak",
//         course:"btech",
//         branch: "cse",
//         class:"third year",
//         Id:"22358010186",
//         },
//         {
//         name:"parth",
//         course:"btech",
//         branch: "cse",
//         clas     s:"third year",
//         Id:"22358010187",
//         },
//         {
//         name:"appa",
//         course:"btech",
//         branch: "cse",
//         class:"third year",
//         Id:"22358010146",
//         },
//         {
//         name:"mhaskedon",
//         course:"btech",
//         branch: "cse",
//         class:"third year",
//         Id:"22358010169",
//         }
//     ]
//     console.log(student[3].Id);
// }



// {
//     const prac={
//         name:"sarthak-sp",
//         course:"btech",
//         branch: "cse",
//         class:"third year",
//         Id:"186",
//     }

//     let arr=[2,4,6,8,10];
//     for(let val of arr)
//     {
//         console.log(val);
//     }

//     for(let val in prac)
//     {
//         console.log(prac[val]);
//     }

// }


// { 
//     let str="hello";
//     console.log(`${str}`+ " ji");
// }
//     let arr1=[2,3,4,5,6,];
//     let arr2=[1,2,56,6,8,];
//   let newARR=[...arr1, ...arr2];//spread means split karna

//   console.log(newARR);
//   console.log(newARR)
