const profilePicture = document.querySelector("#pfp-image");

const colors = ["#E74C3C", "#8E44AD", "#3498DB", "#1ABC9C", "#2ECC71", "#F1C40F"]
const specialChars = ["/", "$", "#", "%", "&", "~", "="]


function randomProfile(){
    profilePicture.innerHTML = specialChars[Math.trunc(Math.random() * specialChars.length)] + specialChars[Math.trunc(Math.random() * specialChars.length)];
    profilePicture.style.background = colors[Math.trunc(Math.random() * colors.length)]
}

randomProfile()