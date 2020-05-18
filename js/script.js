
//############ DOM elements #############
const search = document.querySelector("search-container");
const modal = document.querySelector("div .modal-info-container");
const modalImg = document.querySelector(".modal-img");
const modalcontainer = document.getElementById("modal-container");
const array = [];

//############ FETCH ####################


fetch("https://randomuser.me/api/?results=12")
    .then(response => response.json())
    .then(eachProfile)
    //.then(data => array.push(data))
   // .then(arr => array.map(person => {

    //    cards(person)
    //    console.log(person);

       
  //  }))



//}

function getJSON(url) {
    fetch("https://randomuser.me/api/?results=12")
        .then(response => response.json())
        .then(eachProfile(response))

}
function eachProfile(json) {

    const profiles = array.push(json);
    array.map(person => {


    return cards(person);

    });

    return profiles;

}

   // .then(array => array.results.map(person => {
    //    console.log(person);
        //
//array.results.map(person => console.log(person));

       
   





//############ GenerateHTML ##################

function cards(data) {


    //onsole.log(data.length);
   // console.log(data.results[0].gender);
        const card = document.createElement("div");
              card.setAttribute("class", "card");
            document.body.appendChild(card);
        const cardcontainer = document.createElement("div")
              cardcontainer.setAttribute("class", "card-img-container");
              card.appendChild(cardcontainer);

  

        
        const img = document.createElement("img");
              img.setAttribute("class", "card-img");
              img.setAttribute("src", `${data.results[0].picture.large}`);
              img.setAttribute("alt", "Profile picture");
              cardcontainer.appendChild(img);

        

        const cardinfocontainer = document.createElement("div")
              cardinfocontainer.setAttribute("class", "card-info-container")
              cardinfocontainer.innerHTML = 
                  ` <h3 id="name" class= "card-name cap">${data.results[0].name.first} ${data.results[0].name.last}</h3>
                    <p class= "card-text">${data.results[0].email}</p>
                    <p class="card-text cap">${data.results[0].location.city} ${data.results[0].location.state}</p> `
              card.appendChild(cardinfocontainer);


}




   // .then(data => cards(data.results))





    /*

<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                <h3 id="name" class="modal-name cap">name</h3>
                <p class="modal-text">email</p>
                <p class="modal-text cap">city</p>
                <hr>
                    <p class="modal-text">(555) 555-5555</p>
                    <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                    <p class="modal-text">Birthday: 10/21/2015</p>
                </div>
            </div>

*/

  
