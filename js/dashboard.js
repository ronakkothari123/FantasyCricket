const profilePicture = document.querySelector("#profile-pic");
const profileName = document.querySelector("#profile-name");
const bannerImage = document.querySelector("#banner-image");
const profileModal = document.querySelector("#profile-modal")

const filterButtons = document.querySelectorAll(".filter-para")

const colors = ["#E74C3C", "#8E44AD", "#3498DB", "#1ABC9C", "#2ECC71", "#F1C40F"];
const types = ["custom-feed ", "leagues-result", "upcoming-matches-result", "match-results-result", "players-result", "top-news-result"]

const playerCoords = [[47.55, 40],[47.5,55],[47.5,63],[47.5,30],[5,42.5],[10,70],[35,90],[60,90],[85,70],[90,42.5],[75,12.5],[20,12.5],[30.5,31.25],[30.5,37.5],[30.5, 55],[30.5,62.5],[39,70],[56,70],[65,62.5],[65,37.5],[40,41.25],[40,54],[55.5,45],[57.5,25],[35,27.5],[41,24],[47.5,22]]

const nameUpperCase = true;
let modalActive = false;
let activeFilter = 0;

function randomProfile(){
    const profileNames = profileName.innerHTML.split(" ")
    if(nameUpperCase){
        profilePicture.innerHTML = profileNames[0][0].toUpperCase() + profileNames[profileNames.length - 1][0].toUpperCase();
    } else {
        profilePicture.innerHTML = profileNames[0][0].toLowerCase() + profileNames[profileNames.length - 1][0].toLowerCase();
    }
    profilePicture.style.background = colors[Math.trunc(Math.random() * colors.length)]

    bannerImage.src = "../images/people/person" + (Math.trunc(Math.random() * 11) + 1) + ".png"
    console.log(bannerImage.src)
}

function createComment(score, header, subheader){
    let newDiv = document.createElement('div');

    if(score == 'w'){
        newDiv.classList.add('wicket');
        score = score.toUpperCase();
    } else if(score == 6){
        newDiv.classList.add('sixer');
    }

    newDiv.classList.add('comment');

    let newHeader = document.createElement('h1');
    newHeader.appendChild(document.createTextNode(score));
    let childDiv = document.createElement('div');

    let subHeader = document.createElement('h2');
    let para = document.createElement('p');

    subHeader.appendChild(document.createTextNode(header));
    para.appendChild(document.createTextNode(subheader));

    childDiv.appendChild(subHeader);
    childDiv.appendChild(para);

    newDiv.appendChild(newHeader);
    newDiv.appendChild(childDiv);

    document.getElementById('comments').appendChild(newDiv);
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

function createNewsStory(type, imgLink, league, header, subheader, hearts, views){
    let parentDiv = document.getElementById('results')
    
    let resultItem = document.createElement('div');
    resultItem.classList.add('result-item');
    resultItem.classList.add(types[type + 1])

    let image = document.createElement('img');
    image.src = imgLink;

    let resultText = document.createElement('div');
    let resultPars = document.createElement('div');
    resultText.classList.add('result-text');
    resultPars.classList.add('result-pars');

    let leagueImage = document.createElement('img');
    leagueImage.src = "../images/logos/" + league + ".png"
    let newHeader = document.createElement('h1')
    let newSubheader = document.createElement('p')
    newHeader.appendChild(document.createTextNode(header))
    newSubheader.appendChild(document.createTextNode(subheader))

    let resultStatsDiv = document.createElement('div')
    resultStatsDiv.classList.add('result-stats-div')

    for(let i = 0; i < 2; i++){
        let resultStat = document.createElement('div')
        let resultImage = document.createElement('img')
        let resultPara = document.createElement('p')

        resultStat.classList.add('result-stat')

        if(i == 0){
            resultImage.src = "../icons/nofavorite.svg";
            resultPara.appendChild(document.createTextNode(hearts));
        } else if(i == 1){
            resultImage.src = "../icons/eye_on.svg";
            resultPara.appendChild(document.createTextNode(views));
        }

        resultStat.appendChild(resultImage);
        resultStat.appendChild(resultPara)
        resultStatsDiv.appendChild(resultStat)
    }

    resultPars.appendChild(newHeader)
    resultPars.appendChild(newSubheader)
    resultText.appendChild(leagueImage)
    resultText.appendChild(resultPars)
    resultText.appendChild(resultStatsDiv)

    resultItem.appendChild(image)
    resultItem.appendChild(resultText)

    parentDiv.appendChild(resultItem)
}

function createPlayer(playerNum, playerName){
    let newDiv = document.createElement('div');

    if(playerNum < 2){
        newDiv.classList.add('player-2')
    } else {
        newDiv.classList.add('player-1')
    }

    if(playerCoords[playerNum] != undefined){
        newDiv.style.left = playerCoords[playerNum][0]/2.5 + "vmin";
    newDiv.style.top = playerCoords[playerNum][1]/2.5 + "vmin";
    }

    /*newDiv.appendChild(document.createTextNode(playerName))*/
    document.getElementById('cricket-field').appendChild(newDiv)
}

function toggleFilter(number){
    const results = document.querySelectorAll('.result-item');
    const filteredResults = document.querySelectorAll('.' + types[number])

    filterButtons[activeFilter].classList.remove('active-filter')
    filterButtons[number].classList.add('active-filter')

    for(let i = 0; i < results.length; i++){
        results[i].style.display = "none";
    }
    
    for(let i = 0; i < filteredResults.length; i++){
        filteredResults[i].style.display = "flex";
    }

    activeFilter = number;
}

function initialize(){
    randomProfile();
    addNews()
    addComments()
    addPlayers()
    toggleFilter(activeFilter);  
}

function addNews(){
    createNewsStory(2, "https://static.independent.co.uk/2021/10/25/18/newFile-1.jpg?width=982&height=726&auto=webp&quality=75", "t20wc", "Scotland Loses Badly", "Embarrasing Defeat", 234, 643);
    createNewsStory(2, "https://c.ndtvimg.com/2021-10/hh03uuq8_pak_625x300_24_October_21.jpg", "t20wc", "India Loses 1st Time", "India vs. Pakistan", 2347, 9753);
    createNewsStory(4, "https://media.istockphoto.com/photos/pakistan-and-india-two-flags-together-textile-cloth-fabric-texture-picture-id1093162828?k=20&m=1093162828&s=612x612&w=0&h=AWWrLn1rJX6HlviWqr1bt1k9u1wz6p_UOKt7KN60YQ0=", "t20wc", "India vs. Pakistan", "October 24th, 2021", 115, 5472)
    createNewsStory(4, "https://www.dailynews.lk/sites/default/files/news/2021/05/24/01-Bangladesh%20%281%29.jpg", "t20wc", "Sri Lanka vs. Bangladesh", "October 24th, 2021", 234, 658);
    createNewsStory(4, "https://www.wallpapertip.com/wmimgs/59-599019_rohit-sharma-hd-wallpapers-download-india-captain-rohit.jpg", "t20wc", "Rohit Sharma Captain", "Virat Kohli Steps Down", 4738, 2347)
    createNewsStory(2, "https://emergingcricket.com/wp-content/uploads/2019/11/Netherlands-celebrate-run-out-of-Assadollah-Vala.jpg", "t20wc", "Netherlands Loses", "Embarrasing Loss", 569, 3245);
    createNewsStory(4, "https://resources.pulse.icc-cricket.com/ICC/photo/2021/08/19/c5a6287c-ee68-4044-929a-143874ddeccb/Trophy-Tour_Poster_1920x1080-1-.png", 't20wc', 'T20 World Cup Begins', 'October 17th, 2021', 2490, 8234);
    createNewsStory(4, "https://wallpapercave.com/wp/wp3156823.jpg", 'ipl', 'Chennai Wins IPL', 'IPL CSK x KKR', 9999, 9999);
}

function addComments(){
    createComment('1', 'Virat Kohli Get 1 Run', 'Virat Kohli Shuffles things Along')
    createComment(6, 'Rohit Sharma Hits a 6', 'Rohit Sharma Hits a Six with a total of 23')
    createComment(4, 'Rohit Sharma Hits a 4', 'Rohit sharma hits another boundary with a total of 27')
    createComment('w', 'R. Sharma c G. Maxwell', 'Rohit Sharma is out without contributing to his team')
}

function addPlayers(){
    //See players.txt for information on playertypes
    for(let i = 0; i < 27; i++){
        createPlayer(i, 'Dude');
    }
}

initialize()
