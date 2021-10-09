const comments = document.querySelectorAll(".comment");
const commentImg = document.querySelectorAll(".comment-img")
const starDivs = document.querySelectorAll(".star-div")

function initializeComments(){
    let displaceMent = 20;
    let offset = 0;

    for(let i = 0; i < comments.length; i++){
        comments[i].style.right = (displaceMent + 10) + "%";
        comments[i].style.top = ((35/comments.length) + 35 * i) + "%";
        displaceMent *= -1;
    }

    for(let j = 0; j < commentImg.length; j++){
        commentImg[j].src = "../FantasyCricket/icons/avatars/" + (Math.floor(Math.random()*51) + 1) + ".svg"
    }

    console.log(starDivs.length)

    for(let k = 0; k < starDivs.length; k++){
        let starAmount = Math.trunc(Math.random()*2) + 4;
        for(let l = 0; l < starAmount; l++){
            let star = document.createElement('img');
            star.src = "../FantasyCricket/icons/fullstar.svg"
            star.classList.add('star')
            starDivs[k].appendChild(star)
        }
        if(starAmount == 4){
            if(Math.trunc(Math.random()*2) == 0){
                let star = document.createElement('img');
                star.src = "../FantasyCricket/icons/nostar.svg"
                star.classList.add('star')
                starDivs[k].appendChild(star)
            } else {
                let star = document.createElement('img');
                star.src = "../FantasyCricket/icons/halfstar.svg"
                star.classList.add('star')
                starDivs[k].appendChild(star)
            }
        }
    }
}

initializeComments()