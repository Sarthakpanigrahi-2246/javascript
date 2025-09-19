// const cityname=document.getElementById("entercity");
// const btn=document.getElementById("searchbtn");
// const locate=document.getElementById("locationbtn")
// const wtherinfo=document.getElementById("weatherinfo")
// const Wind=document.getElementByclass("wind")
// const API_key= "df59968c1778a9cc6b41a5ba1a2df119";

// async function fetchdata(city){
//     console.log("city name: ",city);
//     let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
//     );
//     let result= await response.json();
//     console.log(result);
//     displayweather(result)
// }
// btn.addEventListener('click', ()=>{
//    fetchdata(cityname.value);
// })

// // locate.addEventListener('click', ()=>{
// //     alert("something went wrong")
// // })

// // wtherinfo.addEventListener("change")
// function displayweather(){
//     div=` <div class="weatherinfo">
//                 <p id="temp">23°C</p>
                 
//                 <p id="city">pune</p>
//             </div>

//             <div class="otherinfo">
//                 <div class="wind">
//                     <p>wind</p>
//                     <p>15m/s</p>
//                 </div>
//             <div  class="pressure">
//                     <p>pressure</p>
//                     <p>100ma</p>
//                 </div>
//             <div class="humidity">
//                     <p>Humidity</p>
//                     <p>90%</p>
//                 </div>
                
//             </div>`
//     document.getElementById("seconddiv").innerHTML=div;
    
// }



const cityname = document.getElementById("entercity");
const btn = document.getElementById("searchbtn");
const wtherinfo = document.getElementById("weatherinfo");
// Corrected typo from getElementByclass to getElementsByClassName
const Wind = document.getElementsByClassName("wind"); 
const API_key = "df59968c1778a9cc6b41a5ba1a2df119";

async function fetchdata(city) {
    console.log("city name: ", city);
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
    let result = await response.json();
    console.log(result);
    // Pass the result object to the displayweather function
    displayweather(result); 
}

btn.addEventListener('click', () => {
    fetchdata(cityname.value);
});

function displayweather(data) {
    // Check if the API call was successful
    if (data.cod === 200) {
        // Use a template literal to construct the HTML with dynamic data
        let div = `
            <div class="weatherinfo">
                <p id="temp">${Math.round(data.main.temp)}°C</p>
                <p id="city">${data.name}</p>
            </div>
            <div class="otherinfo">
                <div class="wind">
                    <p>Wind</p>
                    <p>${data.wind.speed} m/s</p>
                </div>
                <div class="pressure">
                    <p>Pressure</p>
                    <p>${data.main.pressure} hPa</p>
                </div>
                <div class="humidity">
                    <p>Humidity</p>
                    <p>${data.main.humidity}%</p>
                </div>
            </div>`;
        document.getElementById("seconddiv").innerHTML = div;
    } else {
        document.getElementById("seconddiv").innerHTML = `<p>City not found. Please try again.</p>`;
    }
}








