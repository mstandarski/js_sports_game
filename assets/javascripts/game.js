(function() {

    window.onload=function(){

        var teamoneButton = document.querySelector("#teamone-shoot");
        var teamtwoButton = document.querySelector("#teamtwo-shoot");
        var resetCounter = document.querySelector("#num-resets");
        var resetButton = document.querySelector("#reset");
        var teamoneShots = document.querySelector("#teamone-numshots");
        var teamoneGoals = document.querySelector("#teamone-numhits");
        var teamtwoShots = document.querySelector("#teamtwo-numshots");
        var teamtwoGoals = document.querySelector("#teamtwo-numhits");


        teamoneButton.addEventListener("click", function(){
            console.log("shoot1 button clicked");


            var shotsTakenOne = parseInt(teamoneShots.innerHTML)+1;
            teamoneShots.innerHTML = shotsTakenOne;

            var increaseGoalOne = parseInt(teamoneGoals.innerHTML)+1;
            var randomNumber = Math.random();
                console.log(randomNumber);
            if (randomNumber <= 0.5) {
                teamoneGoals.innerHTML = increaseGoalOne;
            }

        })

        teamtwoButton.addEventListener("click", function(){
            console.log("shoot2 button clicked");

            var shotsTakenTwo = parseInt(teamtwoShots.innerHTML)+1;
            teamtwoShots.innerHTML = shotsTakenTwo;

            var increaseGoalTwo = parseInt(teamtwoGoals.innerHTML)+1;
            var randomNumber = Math.random();
                console.log(randomNumber);
            if (randomNumber <= 0.5) {
                teamtwoGoals.innerHTML = increaseGoalTwo;
            }
        })

        resetButton.addEventListener("click", function(){
            console.log("I say, I say! Did some just reset?!");

            var clearAll = parseInt(resetCounter.innerHTML)+1;
                        resetCounter.innerHTML = clearAll;
                        teamtwoShots.innerHTML = 0;
                        teamtwoGoals.innerHTML = 0;
                        teamoneShots.innerHTML = 0;
                        teamoneGoals.innerHTML = 0;

        })

    }
})();



//Here's what this 'game' should do

//Clicking a "SHOOT" button attempt to score against the opposing team.
//shots have a random chance of succeeding or failing
//number of shots taken should increase every click on the "SHOOT" button
//number of hits obviously only increases when the shot is successful
//Clicking the "RESET" button resets all the shot and score counters and adds 1 to the number of resets
