fetch.call("hello")
async function api(){
    let res= await fetch("https://www.google.com/");
    console.log(typeof res)
}
api();