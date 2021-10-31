const profilePicture = document.querySelector("#sub-profile-pic");
const profileName = document.querySelector("#sub-profile-name");
const profileImage = document.querySelector("#profile-image");
const profileButtons = document.querySelectorAll(".profile-button");
const profileModal = document.querySelector("#profile-modal")

const nameUpperCase = true;
let modalActive = false;

let friend = false;
let follow = false;

const patterns = [
    "https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble.png",
    "https://www.toptal.com/designers/subtlepatterns/patterns/moroccan-flower.png",
    "https://www.toptal.com/designers/subtlepatterns/patterns/y-so-serious-white.png",
    "https://www.toptal.com/designers/subtlepatterns/patterns/geometric-leaves.png",
    "https://www.toptal.com/designers/subtlepatterns/patterns/webb.png",
    "https://www.toptal.com/designers/subtlepatterns/patterns/round.png"
];

const colors = ["#E74C3C", "#8E44AD", "#3498DB", "#1ABC9C", "#2ECC71", "#F1C40F", "#F39C12"];
const lightcolors = ["#F5B7B1", "#D2B4DE", "#AED6F1", "#A3E4D7", "#ABEBC6", "#F9E79F", "#FAD7A0"]

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function toggleBtn(btnNum){
    if(btnNum == 0){
        friend = !friend;

        if(friend){
            document.getElementById('friend-btn').innerHTML = "Unfriend User"
            document.getElementById('friend-img').src = "../icons/unfriend.svg"
        } else {
            document.getElementById('friend-btn').innerHTML = "Friend User"
            document.getElementById('friend-img').src = "../icons/addfriend.svg"
        }
    } else if(btnNum == 1){
        follow = !follow;

        if(follow){
            document.getElementById('follow-btn').innerHTML = "Unfollow User"
            document.getElementById('follow-img').src = "../icons/fullstar.svg"
        } else {
            document.getElementById('follow-btn').innerHTML = "Follow User"
            document.getElementById('follow-img').src = "../icons/nostar.svg"
        }
    }
}

function toggleModal(){
    modalActive = !modalActive;
    if(modalActive){
        profileModal.style.opacity = 1;
        profileModal.style.top = "6vmin";
    } else {
        profileModal.style.opacity = 0;
        profileModal.style.top = "0vmin";
    }

    profileModal.style.background = "black";
}
function randomProfile(){
    const profileNames = profileName.innerHTML.split(" ");

    let randomColor = Math.trunc(Math.random() * colors.length);

    if(nameUpperCase){
        profilePicture.innerHTML = profileNames[0][0].toUpperCase() + profileNames[profileNames.length - 1][0].toUpperCase();
        profileImage.innerHTML = profileNames[0][0].toUpperCase() + profileNames[profileNames.length - 1][0].toUpperCase();
    } else {
        profilePicture.innerHTML = profileNames[0][0].toLowerCase() + profileNames[profileNames.length - 1][0].toLowerCase();
        profileImage.innerHTML = profileNames[0][0].toLowerCase() + profileNames[profileNames.length - 1][0].toLowerCase();
    }
    
    profilePicture.style.background = colors[randomColor];
    profileImage.style.background = colors[randomColor];

    for(let i = 0; i < profileButtons.length; i++){
        profileButtons[i].style.background = lightcolors[randomColor]
    }

    document.querySelector("#banner-image-div").style.background = "rgba(" + hexToRgb(lightcolors[randomColor]).r + ", " + hexToRgb(lightcolors[randomColor]).g + ", " + hexToRgb(lightcolors[randomColor]).b + ", 0.75)";
}

function initialize(){
    document.getElementById('banner-pattern').style.backgroundImage = "url('" + patterns[Math.trunc(Math.random() * patterns.length)] + "')";
    randomProfile();
}

initialize();