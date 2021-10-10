const comments = document.querySelectorAll(".comment");
const commentImg = document.querySelectorAll(".comment-img")
const starDivs = document.querySelectorAll(".star-div")
const namePara = document.querySelectorAll(".comment-name")
const pfp = document.getElementById("pfp")
const tabs = document.querySelectorAll(".fantasy-content")
const tabLines = document.querySelectorAll('.tab-line')

const names = ["Hayden", "Charlie", "Justice", "Jesse", "Adrian", "Ariel", "Ollie", "Cleo", "Marion", "Jessie", "Sam", "Robbie", "Jodie"]

var darkTheme = false;

function initialize(){
    var today = new Date();
    var hour = today.getHours()
    var minutes = today.getMinutes()
    var ampm = " A.M."

    if(Math.trunc(Math.random()*2) == 0){
        document.getElementById("header-news-div").classList.add('active')
    } else{
        document.getElementById("header-news-div").classList.add('inactive')
    }

    if(hour > 12){
        hour -= 12;
        ampm = " P.M.";
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    document.getElementById("phone-time").innerHTML = hour + ":" + minutes + ampm;
    initializeComments();
}

function toggleTheme(){
    if(!darkTheme){
        document.querySelector(':root').style.setProperty('--text-color', 'white');
        document.querySelector(':root').style.setProperty('--background-1', '#1b2028');
        document.querySelector(':root').style.setProperty('--background-2', '#171a1f');
        document.querySelector(':root').style.setProperty('--lighter-green', '#58D68D');
        document.querySelector(':root').style.setProperty('--light-green', '#2ECC71');
        document.querySelector(':root').style.setProperty('--light-purple', '#8E44AD');
        document.querySelector(':root').style.setProperty('--light-gray', '#7F8C8D');
        document.querySelector(':root').style.setProperty('--border-color', '#111214');
        document.querySelector(':root').style.setProperty('--green', '#2ECC71');
        document.querySelector(':root').style.setProperty('--icon-brightness', 100);
        document.getElementById('settings').src = "./icons/darkactive.svg";
    } else{
        document.querySelector(':root').style.setProperty('--text-color', 'black');
        document.querySelector(':root').style.setProperty('--background-1', '#ffffff');
        document.querySelector(':root').style.setProperty('--background-2', '#eafaf1');
        document.querySelector(':root').style.setProperty('--icon-brightness', 0);
        document.querySelector(':root').style.setProperty('--lighter-green', '#EAFAF1');
        document.querySelector(':root').style.setProperty('--light-green', '#D5F5E3');
        document.querySelector(':root').style.setProperty('--light-purple', '#C39BD3');
        document.querySelector(':root').style.setProperty('--light-gray', '#BFC9CA');
        document.querySelector(':root').style.setProperty('--border-color', '#cccccc');
        document.querySelector(':root').style.setProperty('--green', '#ABEBC6');
        document.getElementById('settings').src = "./icons/darkinactive.svg";
    }
    darkTheme = !darkTheme;
    console.log(getComputedStyle(document.documentElement).getPropertyValue('--background-2'))
}

function toggleTab(tab){
    let activeTab = document.querySelectorAll(".active-content");
    let activeTabLine = document.querySelectorAll('.active-tab-line');
    activeTab[0].classList.remove('active-content');
    activeTabLine[0].classList.remove('active-tab-line');
    activeTab[0].classList.add('inactive-content');
    tabs[tab].classList.remove('inactive-content');
    tabs[tab].classList.add('active-content');
    tabLines[tab].classList.add('active-tab-line');
}

function initializeComments(){

    let displaceMent = 20;
    let offset = 10;

    for(let i = 0; i < comments.length; i++){
        comments[i].style.right = (displaceMent + 10) + "%";
        comments[i].style.top = ((35 + (-15 - offset/comments.length)*(comments.length - 1)) + (30 + offset)*i) + "%";
        displaceMent *= -1;
    }

    for(let j = 0; j < commentImg.length; j++){
        commentImg[j].src = "./icons/avatars/" + (Math.floor(Math.random()*50) + 1) + ".svg"
    }

    pfp.src = "./icons/avatars/" + (Math.floor(Math.random()*51) + 1) + ".svg"

    console.log(starDivs.length)

    for(let k = 0; k < starDivs.length; k++){
        let starAmount = Math.trunc(Math.random()*2) + 4;
        for(let l = 0; l < starAmount; l++){
            let star = document.createElement('img');
            star.src = "./icons/fullstar.svg"
            star.classList.add('star')
            starDivs[k].appendChild(star)
        }
        if(starAmount == 4){
            if(Math.trunc(Math.random()*2) == 0){
                let star = document.createElement('img');
                star.src = "./icons/nostar.svg"
                star.classList.add('star')
                starDivs[k].appendChild(star)
            } else {
                let star = document.createElement('img');
                star.src = "./icons/halfstar.svg"
                star.classList.add('star')
                starDivs[k].appendChild(star)
            }
        }
    }

    for(let l = 0; l < namePara.length; l++){
        namePara[l].innerHTML = names[Math.trunc(Math.random()*names.length)]
    }
}

initialize()