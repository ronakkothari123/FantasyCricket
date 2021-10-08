const pfp = document.getElementById("pfp")
const settingsModal = document.getElementById("settings-modal-bg")
const themeIcon = document.getElementById("theme-icon");
const playerPics = document.querySelectorAll(".player-picture");

const RAPIDAPI_API_URL = 'https://arjunkomath-jaas-json-as-a-service-v1.p.rapidapi.com/';

var settingsModalActive = false;
var darkTheme = false;

const teamList = ["csk", "dc", "kkr", "mi", "pbks", "rcb", "rr", "srh"];
const teamNames = ["Chennai Super Kings", "Delhi Capitals", "Kolkata Knight Riders", "Mumbai Indians", "Punjab Kings", "Royal Challengers Bangalore", "Rajasthan Royals", "Sunrisers Hydrabad"]
const teamColors = ["#ecd909", "#173b8a", "#3a225d", "#06649e", "#e31c1e", "#d60d28", "#ff4081", "#f5680e"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"]
const leagueList = ["ipl", "odi", "test", "t20wc", "bbl"]
const leagueNames = ["Indian Premiere League", "One Day International", "World Test Championship", "ICC T20 World Cup", "Big Bash League"]

var players = [];

function initialize(){
    pfp.src = "../CricketSimulator/icons/avatars/" + (Math.floor(Math.random() * 51) + 1) + ".svg";

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
       darkTheme = false;
    } else {
        darkTheme = true;
    }
    toggleTheme()
    
    populatePlayers()
}

function populateMatches(){
    let matchDate;
    let matchWinner;
    let matchLoser;

    for(let i = listMatches.length; i < 0; i--){
        matchDate = months[listMatches[i].substring(5, 7)] + listMatches[i].date.substring(0,4)
    }
}

function toggleModal(modalID){
    if(modalID == 1){
        if(settingsModalActive){
            settingsModal.classList.add("inactive-modal")
            settingsModal.classList.remove("active-modal")
        } else {
            settingsModal.classList.remove("inactive-modal")
            settingsModal.classList.add("active-modal")
        }
        settingsModalActive = !settingsModalActive;
    }
}

function toggleTheme(){
    if(darkTheme){
        themeIcon.src = "../CricketSimulator/icons/darkinactive.svg"
        document.documentElement.style.setProperty('--sub-background', '#f0f6ff');
        document.documentElement.style.setProperty('--main-background', '#ffffff');
        document.documentElement.style.setProperty('--border-color', '#cccccc');
        document.documentElement.style.setProperty('--contrast-color', '#000000');
        document.documentElement.style.setProperty('--matching-color', '#ffffff');
        document.documentElement.style.setProperty('--main-color', '#046efa');
        document.documentElement.style.setProperty('--accent-color', '#1c529e');
        document.documentElement.style.setProperty('--icon-brightness', 0);
    } else{
        themeIcon.src = "../CricketSimulator/icons/darkactive.svg"
        document.documentElement.style.setProperty('--sub-background', '#1b2028');
        document.documentElement.style.setProperty('--main-background', '#0f1318');
        document.documentElement.style.setProperty('--border-color', '#000000');
        document.documentElement.style.setProperty('--contrast-color', '#ffffff');
        document.documentElement.style.setProperty('--matching-color', '#000000');
        document.documentElement.style.setProperty('--main-color', '#1c529e');
        document.documentElement.style.setProperty('--accent-color', '#046efa');
        document.documentElement.style.setProperty('--icon-brightness', 1);
    }
    
    darkTheme = !darkTheme;
}

function createGameCard(matchLeague, matchDate, winnerTeam, loserTeam, winnerScore, winnerWickets, loserScore, loserWickets){
    const parentDiv = document.getElementById('game-information');

    var leagueName;
    var winnerTeamName;
    var loserTeamName;

    for(let i = 0; i < leagueList.length; i++){
        if(leagueList[i] == matchLeague){
            leagueName = leagueNames[i];
        }
    }

    for(let i = 0; i < teamList.length; i++){
        if(teamList[i] == winnerTeam){
            winnerTeamName = teamNames[i];
        } else if(teamList[i] == loserTeam){
            loserTeamName = teamNames[i];
        }
    }

    if(winnerTeamName == undefined){
        winnerTeamName = winnerTeam.charAt(0).toUpperCase() + winnerTeam.slice(1);
    }
    if(loserTeamName == undefined){
        loserTeamName = loserTeam.charAt(0).toUpperCase() + loserTeam.slice(1);
    }

    let childDiv = document.createElement('div')
    childDiv.classList.add('game-div')

    let headerDiv = document.createElement('div')
    headerDiv.classList.add('game-header-text-div')
    let headerImg = document.createElement('img')
    headerImg.src = "../CricketSimulator/images/logos/" + matchLeague + ".png"
    headerImg.classList.add("game-header-image")
    let headerHeader = document.createElement('h1')
    headerHeader.appendChild(document.createTextNode(leagueName))
    headerHeader.classList.add('game-header')
    headerHeader.classList.add(matchLeague + 'h1')
    let headerSubheader = document.createElement('h2')
    headerSubheader.appendChild(document.createTextNode(winnerTeamName + " vs. " + loserTeamName))
    headerSubheader.classList.add('game-subheader')
    headerDiv.appendChild(headerImg);
    headerDiv.appendChild(headerHeader);
    headerDiv.appendChild(headerSubheader);

    let gameScorecard = document.createElement('div')
    gameScorecard.classList.add('game-scorecard')

    let gameDateDiv = document.createElement('div')
    gameDateDiv.classList.add('game-date')
    let gameDateSubheader = document.createElement('h2')
    gameDateSubheader.appendChild(document.createTextNode(leagueName))
    let gameDateHeader = document.createElement('h2')
    gameDateHeader.appendChild(document.createTextNode(matchDate))
    gameDateSubheader.classList.add('game-date-subheader')
    gameDateHeader.classList.add('game-date-header')
    gameDateDiv.appendChild(gameDateSubheader)
    gameDateDiv.appendChild(gameDateHeader)
    gameScorecard.appendChild(gameDateDiv)

    let gameScore = document.createElement('div')
    gameScore.classList.add('game-final-score')
    let winningTeamDiv = document.createElement('div')
    winningTeamDiv.classList.add("game-final-team-div")
    if(matchLeague == "t20wc"){
        winningTeamDiv.classList.add("t20wcdiv")
    } else if(matchLeague == "test"){
        winningTeamDiv.classList.add("testdiv")
    } else{
        winningTeamDiv.classList.add(winnerTeam)
    }
    let winningTeamImg = document.createElement('img')
    let winningTeamPara = document.createElement('p')
    winningTeamImg.src = "../CricketSimulator/images/teams/" + winnerTeam + ".png"
    winningTeamImg.classList.add("game-team")
    winningTeamPara.appendChild(document.createTextNode(winnerTeamName))
    winningTeamPara.classList.add('game-team-para')
    let winnerOutcomeDiv = document.createElement('div')
    winnerOutcomeDiv.classList.add('game-team-outcome-div')
    let trophy = document.createElement('img')
    trophy.src = "../CricketSimulator/icons/trophy.svg"
    trophy.classList.add('game-team-outcome')
    trophy.classList.add('win')
    winnerOutcomeDiv.appendChild(trophy)
    winningTeamDiv.appendChild(winningTeamImg)
    winningTeamDiv.appendChild(winningTeamPara)
    winningTeamDiv.appendChild(winnerOutcomeDiv)
    let winningScore = document.createElement('p')
    let losingScore = document.createElement('p')
    winningScore.classList.add('game-final-para')
    losingScore.classList.add('game-final-para')
    winningScore.appendChild(document.createTextNode(winnerScore + "/" + winnerWickets))
    losingScore.appendChild(document.createTextNode(loserScore + "/" + loserWickets))
    let losingTeamDiv = document.createElement('div')
    losingTeamDiv.classList.add("game-final-team-div")
    if(matchLeague == "t20wc"){
        losingTeamDiv.classList.add("t20wcdiv")
    } else if(matchLeague == "test"){
        losingTeamDiv.classList.add("testdiv")
    } else{
        losingTeamDiv.classList.add(loserTeam)
    }
    let loserTeamImg = document.createElement('img')
    let loserTeamPara = document.createElement('p')
    loserTeamImg.src = "../CricketSimulator/images/teams/" + loserTeam + ".png"
    loserTeamImg.classList.add("game-team")
    loserTeamPara.appendChild(document.createTextNode(loserTeamName))
    loserTeamPara.classList.add('game-team-para')
    let loserOutcomeDiv = document.createElement('div')
    loserOutcomeDiv.classList.add('game-team-outcome-div')
    let lose = document.createElement('img')
    lose.src = "../CricketSimulator/icons/lose.svg"
    lose.classList.add('game-team-outcome')
    lose.classList.add('lose')
    loserOutcomeDiv.appendChild(lose)
    losingTeamDiv.appendChild(loserTeamImg)
    losingTeamDiv.appendChild(loserTeamPara)
    losingTeamDiv.appendChild(loserOutcomeDiv)

    gameScore.appendChild(winningTeamDiv)
    gameScore.appendChild(winningScore)
    gameScore.appendChild(losingScore)
    gameScore.appendChild(losingTeamDiv)

    let gameButtonDiv = document.createElement('div')
    gameButtonDiv.classList.add('game-buttons')
    let summaryBtn = document.createElement('p')
    summaryBtn.appendChild(document.createTextNode("Summary"))
    let scorecardBtn = document.createElement('p')
    scorecardBtn.appendChild(document.createTextNode("Scorecard"))
    let commentsBtn = document.createElement('p')
    commentsBtn.appendChild(document.createTextNode("Comments"))
    let newsBtn = document.createElement('p')
    newsBtn.appendChild(document.createTextNode("News"))
    if(matchLeague == "ipl"){
        summaryBtn.classList.add('ipldiv')
        scorecardBtn.classList.add('ipldiv')
        commentsBtn.classList.add('ipldiv')
        newsBtn.classList.add('ipldiv')
    } else if(matchLeague == "t20wc"){
        summaryBtn.classList.add('t20wcdiv')
        scorecardBtn.classList.add('t20wcdiv')
        commentsBtn.classList.add('t20wcdiv')
        newsBtn.classList.add('t20wcdiv')
    } else if(matchLeague == "test"){
        summaryBtn.classList.add('testdiv')
        scorecardBtn.classList.add('testdiv')
        commentsBtn.classList.add('testdiv')
        newsBtn.classList.add('testdiv')
    }
    gameButtonDiv.appendChild(summaryBtn)
    gameButtonDiv.appendChild(scorecardBtn)
    gameButtonDiv.appendChild(commentsBtn)
    gameButtonDiv.appendChild(newsBtn)
    
    gameScorecard.appendChild(gameScore)

    childDiv.appendChild(headerDiv)
    childDiv.appendChild(gameScorecard)
    childDiv.appendChild(gameButtonDiv)
    parentDiv.appendChild(childDiv)
}

function createPlayerCard(firstName, lastName, team, bowlingStyle){
    const parentDiv = document.getElementById('sidebar');
    
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    
    var teamColor;

    for(let i = 0; i < teamList.length; i++){
        if(teamList[i] == team){
            teamColor = teamColors[i];
        }
    }

    players.push(firstName + lastName)
    const image = "https://moneyball.insidesport.co/img/singleplayer/" + firstName + lastName + "1.jpg"

    if(firstName.length + lastName.length > 10){
        if(lastName.length > 8){
            lastName = lastName.charAt(0) + ". "
        } else {
            firstName = firstName.charAt(0) + ". "
        }
    }

    if(bowlingStyle.length > 20){
        var updatedLocation;
        var finalLocation = "";
        updatedLocation = bowlingStyle.split(" ")[0]
        updatedLocation = updatedLocation.split("-")

        for(let i = 0; i < updatedLocation.length; i++){
            finalLocation = finalLocation + updatedLocation[i][0]
            
        }

        bowlingStyle = finalLocation + ". " + bowlingStyle.substr(bowlingStyle.indexOf(" ") + 1);
    }
    
    let childDiv = document.createElement('div')
    childDiv.classList.add('player-card')

    let childNamePlate = document.createElement('div');
    let nameplateHeader = document.createElement('h1');
    let nameplatePara = document.createElement('p');
    let teamImg = document.createElement('img')
    let nameplateHeaderText = document.createTextNode(firstName + " " + lastName);
    let nameplateParaText = document.createTextNode(bowlingStyle);
    childNamePlate.classList.add('player-nameplate')
    childNamePlate.style.setProperty('--player-background', teamColor)
    teamImg.src = "../CricketSimulator/images/teams/" + team + ".png"
    nameplateHeader.appendChild(nameplateHeaderText);
    nameplatePara.appendChild(nameplateParaText);
    childNamePlate.appendChild(nameplateHeader);
    childNamePlate.appendChild(nameplatePara);
    childNamePlate.appendChild(teamImg);

    let imageDiv = document.createElement('div');
    imageDiv.classList.add('player-image')
    imageDiv.style.setProperty("--player-image", "url('" + image + "')")

    let statBtn = document.createElement('button');
    let statBtnAccent = document.createElement('span');
    statBtn.classList.add('player-button');
    statBtnAccent.classList.add('accent')
    statBtnAccent.appendChild(document.createTextNode("STATISTICS"))
    statBtn.appendChild(document.createTextNode("SEE "))
    statBtn.appendChild(statBtnAccent)


    let footer = document.createElement('div');
    footer.classList.add('player-footer');
    footer.style.setProperty('--player-background', teamColor)

    childDiv.appendChild(childNamePlate);
    childDiv.appendChild(imageDiv);
    childDiv.appendChild(statBtn);
    childDiv.appendChild(footer);
    parentDiv.appendChild(childDiv);
}

function populatePlayers(){
    createPlayerCard("virat", "kohli", "rcb", "Indian Batsman");
    createPlayerCard("kane", "williamson", "srh", "New-Zealand Batsman");
    createPlayerCard("yuzvendra", "chahal", "rcb", "Indian Spin Bowler");
    createPlayerCard("sanju", "samson", "rr", "Trinidadian Batsman");
    createPlayerCard("david", "warner", "srh", "Australian Batmsan");
    createPlayerCard("jason", "roy", "srh", "South-African-English Batsman");
    createPlayerCard("jasprit", "bumrah", "mi", "Indian Fast Bowler");
    createPlayerCard("harshal", "patel", "rcb", "Indian Fast Bowler");
    createPlayerCard("pat", "cummins", "kkr", "Australian Fast Bowler");
    createPlayerCard("moeen", "ali", "csk", "English Batsman");
    createPlayerCard("chris", "gayle", "pbks", "Jamaican Batsman");
    createPlayerCard("shreyas", "gopal", "rr", "Indian Fast Bowler");
    createPlayerCard("mohammed", "siraj", "rcb", "Indian Fast Bowler");
    createPlayerCard("devdutt-", "padikkal", "rcb", "Indian Batsman");
    createPlayerCard("AB-de-", "villiers", "rcb", "South-African Batsman");
    createPlayerCard("rutuRaj-", "gaikwad", "csk", "Indian Batsman");
    createPlayerCard("lokesh", "rahul", "pbks", "Indian All Rounder");
    createPlayerCard("umesh", "yadav", "rcb", "Indian Medium-Fast Bowler");
    createPlayerCard("MS", "D", "csk", "Indian Wicketkeeper");
    createPlayerCard("shahrukh", "khan", "pbks", "Indian Batsman");
    createPlayerCard("ravindra", "jadeja", "csk", "Indian All Rounder");
    createPlayerCard("yashasvi", "jaiswal", "rr", "Indian Batsman");
    createPlayerCard("trent", "boult", "mi", "New-Zealand Fast Bowler");
    createPlayerCard("mohammed", "shami", "pbks", "Indian Medium-Fast Bowler");
    createPlayerCard("rishabh", "pant", "dc", "Indian Batsman");

    for(let i = 0; i < playerPics.length; i++){
        playerPics[i].src = "https://moneyball.insidesport.co/img/singleplayer/" + players[Math.floor(Math.random() * players.length)] + "1.jpg"
        console.log(playerPics[i].src)
    }
}

createGameCard('ipl', "October 5th, 2021", 'mi', 'rr', '94', '2', '90', '9')
createGameCard('t20wc', 'October 42nd, 1969', 'india', 'australia', '156', '6', '27', '24')
createGameCard('ipl', "October 4th, 2021", 'rcb', 'csk', '114', '8', '97', '9')
createGameCard('test', 'February 64th, 1978', 'new-Zealand', 'england', '14', '84', '4576', '2')
createGameCard('t20wc', 'August 24st, 2156', 'ireland', 'australia', '8927', '6', '27', '24')
createGameCard('ipl', "October 3rd, 2021", 'dc', 'kkr', '10', '9', '256', '6')

initialize();