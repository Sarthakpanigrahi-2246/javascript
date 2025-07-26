// {
//   let globalVar = "global"; // Global Scope

//   function outer() {
//   let functionVar = "function"; // Function Scope

//   if (true) {
//     let blockVar = "block"; // Block Scope
//     console.log(globalVar);     // ✅
//     console.log(functionVar);   // ✅
//     console.log(blockVar);      // ✅
//   }

//   // console.log(blockVar); // ❌ Not accessible here

//   function inner() {
//     console.log(functionVar); // ✅ Lexical Scope
//   }

//   inner();
// }

// outer();
// // console.log(functionVar); // ❌ Not accessible here

// }


// var namee="sarthak";
// function fun1()
// {
//   // var name="joker";
//   console.log(namee);
//    hello="don"; // auto global  but it is bad practixe
//    console.log(hello)

// }
// fun1();
// console.log(namee)
// console.log(hello)

/***********call stack************************ */
 var num1=3;
 var num2=5;
 function add(a,b)
 {
    var total =a+b;
    return total;
 }
 var sum= add (num1, num2)
 console.log(sum);