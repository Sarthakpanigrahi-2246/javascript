// console.log(Math.floor(3.99999440)); //lower value
// console.log(Math.ceil(3.43));   //upper value
// console.log(Math.max(3.96, 3.97));  //max value
// console.log(Math.min(33,7983,848484,93)); //min value
// console.log(Math.round(4.6));  //round of 
// console.log(Math.abs(-79)); //showing num and -ve num get automatically +ve
// console.log(Math.random()); //random number lies betn [0,1]
 

// // this technique is use playing for ludo

// let randomnum= Math.random()*6;
// console.log(Math.ceil(randomnum));
      
//            // or
// let min=1;
// let max=6;
// let randomnumber= Math.floor(Math.random()*(max-min+1)+min);
// console.log(randomnumber);

// DATE & WEATHER

let date= new Date();
// console.log(  "today day & date is: ", date );
console.log(date.toDateString());
console.log(date.toLocaleTimeString());
console.log(date.toTimeString());
