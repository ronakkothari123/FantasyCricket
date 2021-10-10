function calculateScore(playerObj) {
    let score;
    if (playerObj.type == "batsman") {
        score = calculateBatterScore(playerObj.runs)
    } else if (playerObj.type == "bowler") {
        score = calculateBowlerScore(playerObj.wickets, playerObj.economy, playerObj.wides, playerObj.noBalls, playerObj.oversBowled)
    } else if (playerObj.type == "fielder") {
        score = calculateFielderScore(playerObj.catches, playerObj.runouts, playerObj.droppedCatches)
    } else if (playerObj.type == "keeper") {
        score = calculateFielderScore(playerObj.catches, playerObj.runouts, playerObj.droppedCatches)
    }
    return score;
}

function calculateBatterScore(runs) {
    // batters runs divided by 2 is their point total
    return runs / 2;
}

function calculateBowlerScore(wickets, economy, wides, noBalls, oversBowled) {
    // wickets are each 10 pts
    // (10 - economy) * oversBowled are added to the score
    // wides are -0.25 pts
    // noballs are -1 pts
    let score;
    // calculate wicket score
    score = wickets * 10
        // calculate (10 - economy) * oversbowled
    score += (10 - economy) * oversBowled
        // calculate extras
    score -= 0.25 * wides
        // calculate noballs
    score -= noBalls
    return score;
}

// applies to keepers as well
function calculateFielderScore(catches, runouts, droppedCatches) {
    // catches +5 pts
    // runouts + 10 pts
    // droppedCatches -3 pts

    let score;
    // catches + 5
    score = 5 * catches
        // runouts + 10
    score += 10 * runouts
        // dropped Catches
    score -= 3 * droppedCatches

    return score;

}