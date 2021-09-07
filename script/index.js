
//when the DOMContentLoaded event happens( fires) the passed callback function is executed.
window.addEventListener("DOMContentLoaded", async (event)=> {
    //console.log("content loaded fired")
    const url = "https://swapi.dev/api/people"
    const images = [
        "Kylo Ren.jpeg",
        "Trooper.jpeg",
        "Yoda.jpeg",
        "Ahsoka-Tano.jpeg",
        "JangoFett-SWE.jpeg",
        "chewbacca.jpeg",
        "NautolanDarksider.jpeg",
        "letzten-jedi.jpeg",
        "baby.Yoda.png",
        "Kit-Fisto.jpeg"
    ];

    //fetch the characters form the remote url and populate the parent Div.
    await fetch(url)
    .then( response=>  response.json())
    .then( data=> {

        const results = data.results;

        results.forEach( (character,index)=>{
                //create content div
                let content_div = document.createElement("div");
                // <div> </div>
                content_div.classList.add("content"); //add "content" to content div class names
                //<div class="content"> </div>

                let content_innerHTML = `
                <img src="images/${images[index]}" alt="Jango Fett"/>
                <div class="info-container">
                        <h3 class="fullname" id="fullname-${index}"> Name: ${character.name}</h3>
                        <h4 class="hidden" id="gender-${index}"> Gender: ${character.gender}</h4>
                        <h4 class="hidden" id="height-${index}"> Height: ${character.height}</h4>
                </div>
                `
                
               

                content_div.innerHTML = content_innerHTML; 

                //add content_div to parentDiv
                const parentDiv = document.getElementById("all");
                parentDiv.append( content_div );
                
                //add eventlistener for fullname
                let fullNameElement = document.getElementById(`fullname-${index}`);
                let genderElement = document.getElementById(`gender-${index}`);
                let heightElement = document.getElementById(`height-${index}`);

                //hide or show gender and height Element when fullNameElement is clicked
                fullNameElement.addEventListener("click", (event)=>{
                    genderElement.classList.toggle("hidden");
                    heightElement.classList.toggle("hidden");
                });

        }); //forEach

    });

});
