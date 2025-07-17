// let char =['a','f'];
// console.log(typeof char);

// let arr =[2,3,4,5,6,7];
// arr.push(4,5); //add the element in last
// arr.pop(); //removing the element in last
// console.log(arr);
// let newarr= arr.concat(10,11,12); //adding a new array in existing array anf giving new array
// console.log(newarr);

// let ret = arr.indexOf(7); //indexOf() is used to find the value using and index
// console.log(ret);

// let jointarr= arr.join("/");//joint the array and add some new things;
// console.log(jointarr);

// console.log(arr.length);//find length
// console.log(arr.reverse()) // reversing an array


// arr.shift();         //removing the first element of an array
// arr.unshift(44,55); //adding the first element of an array
// console.log(arr);

// let arr =[2,3,4,5,6,7];
// let newarr= arr.slice(1,4); //cutting a such of number using an index and cutted partes show
// console.log(newarr);

// let newArr= arr.splice(1,4);
// console.log(arr); //cutting a such of number using an index and cutted partes don,t show
// console.log(newArr);


{
    //  function in array
    let arr =[2,3,4,5,6,7];
    for (let i = 0; i<arr.length; i++)
    {
        console.log(arr[i]);
    } 

}

{
    //destructinal of a array
    let desarr = [4,6,8,10,12,14]
    let [first, second,]=desarr;
    console.log("destu num is :",second);
}
{ // object in array
    const student =[
        {
        name:"sarthak",
        course:"btech",
        branch: "cse",
        class:"third year",
        Id:"22358010186",
        },
        {
        name:"parth",
        course:"btech",
        branch: "cse",
        class:"third year",
        Id:"22358010187",
        },
        {
        name:"hatim",
        course:"btech",
        branch: "cse",
        class:"third year",
        Id:"22358010146",
        },
        {
        name:"mhaskedon",
        course:"btech",
        branch: "cse",
        class:"third year",
        Id:"22358010169",
        }
    ]
    console.log(student[3].Id);
}