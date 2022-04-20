const fScore = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < fScore.length; i++) {
    if (fScore[i] == 0){
        console.log("Hidden your score!");
        continue;
    }
    if (fScore[i] == 100) {
        console.log("Your got highest score!");
        break;
    }
    console.log("Your score ", fScore[i]);
}
