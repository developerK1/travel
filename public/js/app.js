const adminLink = document.querySelector(".admin-link");

if(localStorage.getItem("session-name")){
    adminLink.innerText = "Profile";
    adminLink.style.display = "block";

    console.log("session", localStorage.getItem("session-name"))
}else{
    console.log(localStorage)
}


