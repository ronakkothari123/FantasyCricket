const comments = document.querySelectorAll(".comment");;
const commentImg = document.querySelectorAll(".comment-img");
const starDivs = document.querySelectorAll(".star-div");
const namePara = document.querySelectorAll(".comment-name");
const pfp = document.getElementById("pfp");
const tabs = document.querySelectorAll(".fantasy-content");
const tabLines = document.querySelectorAll('.tab-line');
const contentPicture = document.querySelectorAll('.fantasy-content-picture');
const x = document.querySelector("#header-news");

const names = ["Hayden", "Charlie", "Justice", "Jesse", "Adrian", "Ariel", "Ollie", "Cleo", "Marion", "Jessie", "Sam", "Robbie", "Jodie", "Avery"];
const players = ["KaneWilliamson", "TrentBoult", "ViratKohli", "JaspritBumrah", "EoinMorgan", "ChrisGayle"];

const commentTitle = ["Amazing Support", "Excellent Product", "Bundles of Fun", "Easy-To-Use", "Premium Version Please!", "Great Job Developers", "Please Sign Up!"];
const commentDesc = [
    "There are a few problems as I am one of the first users of this product, but the support team is incredibly nice! A+ from me!",
    "I've looked long and hard for a Fantasy Cricket website, and this just topped all expectation. I will continue to use this all the time!",
    "I've been using this product for a while now and I found nothing wrong with it. This is an amazing product and it deserves more people using it!",
    "This service has amazing developers for the service fee. The GUI and the instructions and the buttons makes it fun to use!",
    "I need a Premium Version of this product. It is just so good, that I would love to pay money for an even better version of it!",
    "This website is so amazingly made. Everything from the frontend, to the algorithms, to the servers. Kudos to the Devs!",
    "To the one person reading this, please sign up to this service. It will be more fun if more people are playing! Don't think, just sign up!"
];

var darkTheme = false;

function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
    else{
        x.innerHTML="Geolocation is not supported by this browser.";
    }
}

function showPosition(position){
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    displayLocation(lat,lon);
}

function showError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            x.innerHTML="User denied the request for Geolocation."
        break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML="Location information is unavailable."
        break;
        case error.TIMEOUT:
            x.innerHTML="The request to get user location timed out."
        break;
        case error.UNKNOWN_ERROR:
            x.innerHTML="An unknown error occurred."
        break;
    }
}

function displayLocation(latitude,longitude){
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode(
        {'latLng': latlng}, 
        function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var add= results[0].formatted_address ;
                    var  value=add.split(",");

                    count=value.length;
                    country=value[count-1];
                    state=value[count-2];
                    city=value[count-3];
                    x.innerHTML = "city name is: " + city;
                }
                else  {
                    x.innerHTML = "address not found";
                }
            }
            else {
                x.innerHTML = "Geocoder failed due to: " + status;
            }
        }
    );
}

function initialize(){
    var today = new Date();
    var hour = today.getHours()
    var minutes = today.getMinutes()
    var ampm = " A.M."

    if(Math.trunc(Math.random()*1) == 0){
        document.getElementById("header-news-div").classList.add('active')
    } else{
        document.getElementById("header-news-div").classList.add('inactive');
    }

    if(hour > 12){
        hour -= 12;
        ampm = " P.M.";
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    document.getElementById("phone-time").innerHTML = hour + ":" + minutes + ampm;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme();
    }

    for(let i = 0; i < contentPicture.length; i++){
        contentPicture[i].style.backgroundImage = "url('https://moneyball.insidesport.co/img/singleplayer/" + players[i] + "1.jpg')";
    }

    initializeComments();
    getLocation();
}

function toggleTheme(){
    if(!darkTheme){
        document.querySelector(':root').style.setProperty('--text-color', 'white');
        document.querySelector(':root').style.setProperty('--background-1', '#1b2028');
        document.querySelector(':root').style.setProperty('--background-2', '#171a1f');
        document.querySelector(':root').style.setProperty('--background-3', '#1b2028');
        document.querySelector(':root').style.setProperty('--background-4', '#1b2028');
        document.querySelector(':root').style.setProperty('--background-5', '#1b2028');
        document.querySelector(':root').style.setProperty('--background-6', '#171a1f');
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
        document.querySelector(':root').style.setProperty('--background-1', '#e4ebf2');
        document.querySelector(':root').style.setProperty('--background-2', '#ffffff');
        document.querySelector(':root').style.setProperty('--background-3', '#e4ebf2');
        document.querySelector(':root').style.setProperty('--background-4', '#D2B4DE');
        document.querySelector(':root').style.setProperty('--background-5', '#ffffff');
        document.querySelector(':root').style.setProperty('--background-6', '#ffffff');
        document.querySelector(':root').style.setProperty('--icon-brightness', 0);
        document.querySelector(':root').style.setProperty('--lighter-green', '#2ECC71');
        document.querySelector(':root').style.setProperty('--light-green', '#2ECC71');
        document.querySelector(':root').style.setProperty('--light-purple', '#C39BD3');
        document.querySelector(':root').style.setProperty('--light-gray', '#BFC9CA');
        document.querySelector(':root').style.setProperty('--border-color', '#cccccc');
        document.querySelector(':root').style.setProperty('--green', '#2ECC71');
        document.getElementById('settings').src = "./icons/darkinactive.svg";
    }
    darkTheme = !darkTheme;
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

    let randomComment = Math.trunc(Math.random() * commentTitle.length)
    document.getElementById('comment-header-1').innerHTML = commentTitle[randomComment]
    document.getElementById('comment-para-1').innerHTML = commentDesc[randomComment]

    commentTitle.splice(randomComment, 1)
    commentDesc.splice(randomComment, 1)
    randomComment = Math.trunc(Math.random() * commentTitle.length)
    document.getElementById('comment-header-2').innerHTML = commentTitle[randomComment]
    document.getElementById('comment-para-2').innerHTML = commentDesc[randomComment]

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