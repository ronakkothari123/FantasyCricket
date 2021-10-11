const sidebarLine = document.querySelectorAll('.sidebar-line');
const friends = document.querySelectorAll('.navbar-friend');
const dropdown = document.querySelectorAll('.dropdown')
const rosterItem = document.querySelectorAll('.roster-item');
const rosterDisplayOption = document.querySelectorAll('.roster-display-option')

const fatRoster = document.querySelectorAll('.fat-roster')
const largeRoster = document.querySelectorAll('.large-roster')
const mediumRoster = document.querySelectorAll('.medium-roster')
const smallRoster = document.querySelectorAll('.small-roster')
const rosterPara = document.querySelectorAll('.roster-para')

const players = ["TrentBoult", "KaneWilliamson", "ViratKohli", "JaspritBumrah", "EoinMorgan", "ChrisGayle", "YuzvendraChahal", "ShahrukhKhan", "RavindraJadeja", "DavidWarner", "RishabhPant"]

let activeSidebar = 0;
let activeRosterOption = 0;

function initialize(){
    initFriends();
    initRoster();
}

function toggleDisplayOption(number){
    rosterDisplayOption[activeRosterOption].classList.remove('active-display-option')
    rosterDisplayOption[number].classList.add('active-display-option')
    activeRosterOption = number;

    if(number == 1){
        document.getElementById('roster-players').style.flexDirection = 'column'
        for(let i = 0; i < largeRoster.length; i++){
            largeRoster[i].classList.add('roster-variation-large')
        } for(let i = 0; i < mediumRoster.length; i++){
            mediumRoster[i].classList.add('roster-variation-medium')
        } for(let i = 0; i < smallRoster.length; i++){
            smallRoster[i].classList.add('roster-variation-small')
        } for(let i = 0; i < fatRoster.length; i++){
            fatRoster[i].classList.add('roster-variation-fat')
        } for(let i = 0; i < rosterPara.length; i++){
            rosterPara[i].classList.add('roster-variation-para')
        } for(let i = 0; i < rosterItem.length; i++){
            rosterItem[i].classList.add('roster-variation-item')
        }
    } else {
        document.getElementById('roster-players').style.flexDirection = 'row'
        for(let i = 0; i < largeRoster.length; i++){
            largeRoster[i].classList.remove('roster-variation-large')
        } for(let i = 0; i < mediumRoster.length; i++){
            mediumRoster[i].classList.remove('roster-variation-medium')
        } for(let i = 0; i < smallRoster.length; i++){
            smallRoster[i].classList.remove('roster-variation-small')
        } for(let i = 0; i < fatRoster.length; i++){
            fatRoster[i].classList.remove('roster-variation-fat')
        } for(let i = 0; i < rosterPara.length; i++){
            rosterPara[i].classList.remove('roster-variation-para')
        } for(let i = 0; i < rosterItem.length; i++){
            rosterItem[i].classList.remove('roster-variation-item')
        }
    }
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
    for(let j = 0; j < rosterItem.length; j++){
        let playerName = players[Math.trunc(Math.random() * players.length)];
        let playerNameWithSpace;
        let newDiv = document.createElement('div');
        let newDescDiv = document.createElement('div');
        let newHeader = document.createElement('h5')
        let newPara = document.createElement('p')

        var positions = [];
        for(let i = 0; i < playerName.length; i++){
            if(playerName[i].match(/[A-Z]/) != null){
                positions.push(i);
            }
        }

        playerNameWithSpace = setCharAt(playerName, positions[1], ' ' + playerName[positions[1]])
        console.log(playerNameWithSpace, positions[1])

        newDescDiv.classList.add('roster-desc')
        newHeader.classList.add('roster-h5')
        newPara.classList.add('roster-p')
        newHeader.appendChild(document.createTextNode(playerNameWithSpace))
        newPara.appendChild(document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora fugiat, dolorem nisi similique dignissimos rem saepe minus repellat debitis ipsam quos! Distinctio, hic ipsa.'))
        newDescDiv.appendChild(newHeader)
        newDescDiv.appendChild(newPara)
        newDiv.classList.add('roster-img');
        newDiv.style.backgroundImage = "url('https://moneyball.insidesport.co/img/singleplayer/" + playerName + "1.jpg')";
        newDiv.appendChild(newDescDiv)
        rosterItem[j].appendChild(newDiv);
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

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

initialize()