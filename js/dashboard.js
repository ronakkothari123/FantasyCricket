const sidebarLine = document.querySelectorAll('.sidebar-line');
const friends = document.querySelectorAll('.navbar-friend');
let activeSidebar = 0;

function initialize(){
    initFriends();
}

function toggleSidebar(number){
    sidebarLine[activeSidebar].classList.add('inactive-line')
    sidebarLine[number].classList.remove('inactive-line');
    activeSidebar = number;
}

function initFriends(){
    for(let i = 0; i < friends.length; i++){
        friends[i].src = "./icons/avatar/" + Math.trunc((Math.random() * 50) + 1) + ".svg"
        console.log(friends[i].src)
    }
}

initialize()