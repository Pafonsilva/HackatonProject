    import { getRandomActor } from "./actressAPI.js";
    import { getActorImage } from "./actressAPI.js";
    import { getActorHints } from "./actressAPI.js";

    const rightacor = getRandomActor();

    const actorImage = getActorImage(rightacor);

    const actorHints = getActorHints(rightacor);

    console.log(rightacor);

    console.log(actorImage);

    console.log(actorHints);

    const answer = document.querySelector("#answer");

    

    const start = document.querySelector("#start");
    const name = document.querySelector("#name");
    start.addEventListener("click", () => {
      if (name.value != "") {
        document.querySelector(".chooseName").style.display = "none";
        document.querySelector(".box").style.display = "flex";

        setTimeout(() => {
        
          document.querySelector(".box").style.display = "none";
          document.querySelector(".game").style.display = "flex";
          document.querySelector("span").style.display = "flex";
          document.querySelector("h2").innerHTML = `Player Name: ${name.value}`;
        }, 3000);

        setTimeout(() => {
          document.querySelector(".hits").innerHTML = `Question 1: ${actorHints ? actorHints[0] : ""}`;
        }, 3000);
      } else {
        document.querySelector(".name").style.border = "1px solid red";
        document.querySelector(".name").placeholder = "Digite seu nome";
      }
    });

    const switchActor = document.querySelector("#switchActor");
    const tryagain = document.querySelector(".tryagain");

    let count = 0;

    switchActor.addEventListener("click", () => {
      if (answer.value == rightacor) {
        alert("Congratz! You got it!");
        document.querySelector("#right").style.display = "block";
        document.querySelector("#right").src = actorImage;
        document.querySelector(".actressName").style.display = "block";
        
        document.querySelector(".actressName")

        setTimeout(() => {
          window.location.href = "win.html";
        }, 2000);

      } else {

        count++;

        if (count >= 10) {
          alert("You lost! Back you go");
          window.location.href = "mainPage.html";
        }
        else {
          document.querySelector(".hits").innerHTML = `Question ${count + 1}: ${actorHints ? actorHints[count] : ""}`;
        }
 
        const actorElement = document.querySelector(".actor");
        let isRed = false;

        function toggleColor() {
          if (isRed) {
            actorElement.style.backgroundColor = "transparent";
            actorElement.style.boxShadow = "none";
            actorElement.style.border = "3px solid black";
          } else {
            actorElement.style.border = "3px solid #bd0000";
            actorElement.style.boxShadow = "inset -1px 0px 20px 6px red";
          }

          isRed = !isRed;
        }

        const blinkingInterval = setInterval(toggleColor, 500);

        isRed = !isRed;

      }
      
    });
