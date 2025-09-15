// const btn=document.getElementById("btn")
// const enter=document.getElementById("entername")
 


// async function fetchuser(userid){
// let response= await fetch(`https://api.github.com/users/${userid}`)
//     let result=await response.json();
//     // console.log(result);
// }
 
 
//  btn.addEventListener('click',()=>{
//    let userid= enter.value;
//    fetchuser(userid);
// })



// const secondDiv=document.getElementById("secondiv").innerHTML=`
//                 <div class="userinfo">
//                   <img src=${result.avatar_url} id="img" alt="your image" width="150">
//                     <div class="userdetail">
//                         <p class="username">${result.name}</p>
//                         <p class="userbio">Fullstack Developer</p>
//                     </div>
//                 </div>

//                 <div class="userfollow">
//                     <div class="followers">
//                         <div class="repo">
//                             <p>Follower</p>
//                             <p>12</p>
//                         </div>
//                         <div class="repo">
//                             <p>following</p>
//                             <p>12</p>
//                         </div>
//                         <div class="repo">
//                             <p>Repository</p>
//                             <p>10</p>
//                         </div>
//                     </div>
//                     <div class="visitprofile"><b>View Profile</b>

//                     </div>
//                 </div> `





const btn = document.getElementById("btn");
const enter = document.getElementById("entername");

btn.addEventListener("click", () => {
    let userid = enter.value;
    fetchuser(userid);
});

async function fetchuser(userid) {
    try {
        let response = await fetch(`https://api.github.com/users/${userid}`);
        let result = await response.json();

        // Inject HTML with user data
        document.getElementById("secondiv").innerHTML = `
            <div class="userinfo">
                <img src="${result.avatar_url}" id="img" alt="User Image">
                <div class="userdetail">
                    <p class="username">${result.name || "No name provided"}</p>
                    <p class="userbio">${result.bio || "No bio available"}</p>
                </div>
            </div>

            <div class="userfollow">
                <div class="followers">
                    <div class="repo">
                        <p>Followers</p>
                        <p>${result.followers}</p>
                    </div>
                    <div class="repo">
                        <p>Following</p>
                        <p>${result.following}</p>
                    </div>
                    <div class="repo">
                        <p>Repositories</p>
                        <p>${result.public_repos}</p>
                    </div>
                </div>
                <div class="visitprofile">
                    <a href="${result.html_url}" target="_blank"><b>View Profile</b></a>
                </div>
            </div>
        `;
    } catch (error) {
        console.error("Error fetching user:", error);
        document.getElementById("secondiv").innerHTML = `<p>User not found or an error occurred.</p>`;
    }
}
 
