    // Create a js variable for the html IDs
   let trgBTN = document.getElementById("triggerBtn");
   let docBody = document.getElementById("body");
   let clrInfo = document.getElementById("colorInfo");

    //create js variables for quokka button and image
   let toggleBtn = document.getElementById("toggleBtn");
   let quokkaIMG = document.getElementById("quokkaIMG");

    //create a function to toggle quokka from 1 to 2 then back to 1, get image reference       
    function QuokkaToggler() {
        console.info(quokkaIMG)
        console.info(quokkaIMG.src)
        
        if(quokkaIMG.alt == "quokka 1") {
            quokkaIMG.src = "./images/quokka-2.jpg"
            quokkaIMG.alt = "quokka 2"
        }
        else {
            quokkaIMG.src = "./images/quokka-1.jpg"
            quokkaIMG.alt == "quokka 1"
        }
    }

    toggleBtn.addEventListener("click", QuokkaToggler)

    // assigns an event (click function) to the variable trgBTN
   trgBTN.addEventListener("click", function() {
        // print out body info in browser console
        console.info(docBody);

        //define color variables
        let redComp = Math.round(Math.random()*255)
        let greenComp = Math.round(Math.random()*255)
        let blueComp = Math.round(Math.random()*255)

        //assign variable for change color to three variable color components
        let colorString = "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";

        //reference docBody stylesheet, make background colorString, print text of colorString values
        docBody.style.backgroundColor = colorString
        clrInfo.innerText = colorString;
   })
