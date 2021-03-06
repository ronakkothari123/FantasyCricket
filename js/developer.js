const profilePicture = document.querySelector("#profile-pic");
const profileName = document.querySelector("#profile-name");

const colors = ["#E74C3C", "#8E44AD", "#3498DB", "#1ABC9C", "#2ECC71", "#F1C40F"]

const nameUpperCase = true;

function randomProfile(){
    const profileNames = profileName.innerHTML.split(" ")
    if(nameUpperCase){
        profilePicture.innerHTML = profileNames[0][0].toUpperCase() + profileNames[profileNames.length - 1][0].toUpperCase();
    } else {
        profilePicture.innerHTML = profileNames[0][0].toLowerCase() + profileNames[profileNames.length - 1][0].toLowerCase();
    }
    profilePicture.style.background = colors[Math.trunc(Math.random() * colors.length)]
}

function updateNewsImage(){
    let imageDiv = document.getElementById('news-image-div');
    imageDiv.style.backgroundImage = "url('" + document.getElementById('news-image').value + "')"
}

function updateLeagueImage(){
    let image = document.getElementById('news-league-img')
    image.src = "./images/logos/" + document.getElementById('news-league').value + ".png"
}

randomProfile()