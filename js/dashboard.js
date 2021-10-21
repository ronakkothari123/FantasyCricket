const profilePicture = document.querySelector("#pfp-image");
const profileName = document.querySelector("#pfp-name")

const colors = ["#E74C3C", "#8E44AD", "#3498DB", "#1ABC9C", "#2ECC71", "#F1C40F"]


function randomProfile(){
    const profileNames = profileName.innerHTML.split(" ")
    profilePicture.innerHTML = profileNames[0][0].toLowerCase() + profileNames[profileNames.length - 1][0].toLowerCase();
    profilePicture.style.background = colors[Math.trunc(Math.random() * colors.length)]
}

randomProfile()