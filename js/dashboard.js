const profilePicture = document.querySelector("#profile-pic");
const profileName = document.querySelector("#profile-name");
const bannerImage = document.querySelector("#banner-image");

const filterButtons = document.querySelectorAll(".filter-para")

const colors = ["#E74C3C", "#8E44AD", "#3498DB", "#1ABC9C", "#2ECC71", "#F1C40F"]

const nameUpperCase = true;
let activeFilter = 0;

function randomProfile(){
    const profileNames = profileName.innerHTML.split(" ")
    if(nameUpperCase){
        profilePicture.innerHTML = profileNames[0][0].toUpperCase() + profileNames[profileNames.length - 1][0].toUpperCase();
    } else {
        profilePicture.innerHTML = profileNames[0][0].toLowerCase() + profileNames[profileNames.length - 1][0].toLowerCase();
    }
    profilePicture.style.background = colors[Math.trunc(Math.random() * colors.length)]

    bannerImage.src = "./images/people/person" + (Math.trunc(Math.random() * 5) + 1) + ".png"
    console.log(bannerImage.src)
}

function toggleFilter(number){
    filterButtons[activeFilter].classList.remove('active-filter')
    filterButtons[number].classList.add('active-filter')
    activeFilter = number;
}

randomProfile()
toggleFilter(0);