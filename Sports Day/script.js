// The Function Initialisation Start here.
document.addEventListener("DOMContentLoaded", function(){
  //First Fnction OpeningCeremony.
function OpeningCeremony() {
  setTimeout(function () {
    console.log("Let the games begin");
    let score = { red: 0, blue: 0, green: 0, yellow: 0 };
    let oldScore = { red: 0, blue: 0, green: 0, yellow: 0 };
    Race100M(score,oldScore);
  }, 1000);
}

//Second Function Race100M.

function Race100M(score, oldScore) {

  let oldScore2 = { red: 0, blue: 0, green: 0, yellow: 0 }; 

  let redTime = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
  let blueTime = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
  let greenTime = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
  let yellowTime = Math.floor(Math.random() * (15 - 10 + 1)) + 10;

  let obj = {
    red: redTime,
    blue: blueTime,
    green: greenTime,
    yellow: yellowTime,
  };

  let sortedObj = Object.fromEntries(
    Object.entries(obj).sort((a, b) => {
      a[1] - b[1];
    })
  );

  let winner = Object.entries(sortedObj)[0];
  let second = Object.entries(sortedObj)[1];

  for (let i = 0; i < Object.entries(score).length; i++) {
    let entry = Object.entries(score)[i];
    let color = entry[0];
    if (winner[0] === color) {
      score[color] += 50;
      oldScore2[color] += 50;
    } else if (second[0] === color) {
      score[color] += 25;
      oldScore2[color] += 25;
    }
  }

  setTimeout(() => {
    console.log(oldScore)
    console.log(score);
    console.log(winner[0]+" colour won the sport")
    console.log(second[0]+" colour comes second")
    LongJump(score, oldScore2);
  }, 3000);
}

//Third Function LongJump.

function LongJump(score, oldScore2) {
  let RandomNum = Math.floor(Math.random() * (10-5));

  let RandomColor = Object.entries(score)[RandomNum];
  let RandomColorKey = RandomColor[0];
  score[RandomColorKey] += 150;

  setTimeout(() => {
    console.log(oldScore2)
    console.log(score);
    console.log(RandomColor[0]+" colour won the sport")
    let oldScore3 = oldScore2;
    oldScore3[RandomColorKey] += 150;
    HighJump(score, oldScore3);
  }, 2000);
}

//Fourth Function HighJump.

function HighJump(score, oldScore3) {

    let userInput = prompt("What colour secured the highest jump");
    
    if (userInput !== null) { // User clicked "OK" or entered some text
        let colorFound = false;
        for (let i = 0; i < Object.entries(score).length; i++) {
            let ObjScore = Object.entries(score)[i];
            let requiredColor = ObjScore[0];

            if (userInput === requiredColor) {
                score[requiredColor] += 100;
                colorFound = true;
                break; // No need to continue the loop if color is found
            }
        }
        if (colorFound) {
            console.log(oldScore3)
            console.log(score);
            console.log(userInput+" color won the sport")
            AwardCeremony(score);
        } else {
            console.log("Event was cancelled.");
            AwardCeremony(score);
        }
    } else {
        console.log("Event was cancelled.");
        AwardCeremony(score);
    }
}

//Fift Function AwardCeremony.

function AwardCeremony(score) {
    let SortedScore = Object.fromEntries(Object.entries(score).sort(function(a,b){
        return b[1] - a[1];
    }))

    console.log(score);

    let firstObj = Object.entries(SortedScore)[0];
    let firstColor = firstObj[0];
    let firstScore = firstObj[1];
    console.log(firstColor + " came first with " + firstScore + " points");

    let SecondObj = Object.entries(SortedScore)[1];
    let SecondColor = SecondObj[0];
    let SecondScore = SecondObj[1];
    console.log(SecondColor + " came second with " + SecondScore + " points");

    let ThirdObj = Object.entries(SortedScore)[2];
    let ThirdColor = ThirdObj[0];
    let ThirdScore = ThirdObj[1];
    console.log(ThirdColor + " came third with " + ThirdScore + " points");

    let FourthObj = Object.entries(SortedScore)[3];
    let FourthColor = FourthObj[0];
    let FourthScore = FourthObj[1];
    console.log(FourthColor + " came fourth with " + FourthScore + " points");
}

// Function call starts here
OpeningCeremony();

})
