const sidebarLine = document.querySelectorAll('.sidebar-line');
const friends = document.querySelectorAll('.navbar-friend');
const dropdown = document.querySelectorAll('.dropdown')
const rosterItem = document.querySelectorAll('.roster-item');

const players = ["TrentBoult", "KaneWilliamson", "ViratKohli", "JaspritBumrah", "EoinMorgan", "ChrisGayle"]

let activeSidebar = 0;

function initialize(){
    initFriends();
    initRoster();
}

function toggleDropdown(number){
    if(dropdown[number].classList.contains('inactive-dropdown')){
        dropdown[number].classList.add('active-dropdown')
        dropdown[number].classList.remove('inactive-dropdown')
    } else{
        dropdown[number].classList.add('inactive-dropdown')
        dropdown[number].classList.remove('active-dropdown')
    }  
}

function initRoster(){
    for(let i = 0; i < rosterItem.length; i++){
        let playerName = players[Math.trunc(Math.random() * players.length)];
        let newDiv = document.createElement('div');
        let newDescDiv = document.createElement('div');
        let newHeader = document.createElement('h5')
        let newPara = document.createElement('p')

        newDescDiv.classList.add('roster-desc')
        newHeader.classList.add('roster-h5')
        newPara.classList.add('roster-p')
        newHeader.appendChild(document.createTextNode(playerName))
        newPara.appendChild(document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora fugiat, dolorem nisi similique dignissimos rem saepe minus repellat debitis ipsam quos! Distinctio, hic ipsa.'))
        newDescDiv.appendChild(newHeader)
        newDescDiv.appendChild(newPara)
        newDiv.classList.add('roster-img');
        newDiv.style.backgroundImage = "url('https://moneyball.insidesport.co/img/singleplayer/" + playerName + "1.jpg')";
        newDiv.appendChild(newDescDiv)
        rosterItem[i].appendChild(newDiv);
    }
}

function toggleSidebar(number){
    sidebarLine[activeSidebar].classList.add('inactive-line')
    sidebarLine[number].classList.remove('inactive-line');
    activeSidebar = number;
}

function initFriends(){
    for(let i = 0; i < friends.length; i++){
        friends[i].src = "./icons/avatars/" + Math.trunc((Math.random() * 50) + 1) + ".svg"
    }
}

initialize()