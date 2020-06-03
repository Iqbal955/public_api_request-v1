
//############ DOM elements #############
const search = document.querySelector("search-container");
const modal = document.querySelector("div .modal-info-container");
const modalImg = document.querySelector(".modal-img");
const modalcontainer = document.getElementById("modal-container");
const array = [];
let card;
let gallery;
let cardcontainer;
let img;
let cardinfocontainer;
//############ FETCH ####################
const fetchURL = "https://randomuser.me/api/?results=12";




////////////Trying to turn the code into multiple functions and into await and async + promises /

//taking the getProfiles and making it into an async function
async function getProfiles(url) {
    const fetchPeople = await fetch(url);
    const fetchPeopleJSON = await fetchPeople.json();
    const fetchPeopleData = await fetchPeopleJSON.results;
    return fetchPeopleData;
};
/*
having one large async function, that runs getProfiles passing in the fetchURL from line 14, 
then with the data running each function asynchronously

*/
async function displayData() {
    getProfiles(fetchURL)
        .then(cards)
        .then(createmodal)
        .then(searchBar)


};


//############ GenerateHTML ##################

function cards(data) {

   
    for (let i = 0; i < data.length; i++) {


        gallery = document.getElementById("gallery");
        card = document.createElement("div");
        card.setAttribute("class", "card");
        gallery.appendChild(card);


        cardcontainer = document.createElement("div")
        cardcontainer.setAttribute("class", "card-img-container");
        card.appendChild(cardcontainer);




        img = document.createElement("img");
        img.setAttribute("class", "card-img");
        img.setAttribute("src", `${data[i].picture.large}`);

        img.setAttribute("alt", "Profile picture");
        cardcontainer.appendChild(img);



        cardinfocontainer = document.createElement("div")
        cardinfocontainer.setAttribute("class", "card-info-container")
        cardinfocontainer.innerHTML =
            `<h3 id="name" class= "card-name cap">${data[i].name.first} ${data[i].name.last}</h3>
                    <p class= "card-text">${data[i].email}</p>
                    <p class="card-text cap">${data[i].location.city} ${data[i].location.state}</p>`
        card.appendChild(cardinfocontainer);


       

    }
    return data;
    
}



function createmodal(data) {

    //######################## MODAL ####################################


    gallery.addEventListener("click", (e) => {


        
        const etarget = event.target;

        console.log(etarget.length);
        for (let i = 0; i < 1; i++) {
            console.log("click1");







            const divModal = document.createElement("div");
            divModal.setAttribute("class", "modal-container");

            const div = document.createElement("div");
            div.setAttribute("class", "modal")
            divModal.appendChild(div);

            const button = document.createElement("button");
            button.setAttribute("id", "modal-close-btn");
            button.setAttribute("class", "modal-close-btn");
            button.textContent = "x";


            div.appendChild(button);

            const divModalInfoContainer = document.createElement("div");
            divModalInfoContainer.setAttribute("class", "modal-info-container")
            div.appendChild(divModalInfoContainer);

            const img = document.createElement("img");
            divModalInfoContainer.innerHTML =
                `<img class="modal-img" src= "${data[i].picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${data[i].name.first} ${data[i].name.last}</h3>
                <p class="modal-text">E-mail ${data[i].email}</p >
                <p class="modal-text cap">City: ${data[i].location.city}</p>
                <hr>
                    <p class="modal-text">Phone Number ${data[i].cell}</p>
                    <p class="modal-text">Adress:${data[i].location.street.name} ${data[i].location.street.number} ${data[i].location.postcode}.</p>
                    <p class="modal-text">Age: ${data[i].dob.age}</p>`;


            const body = document.body;


            body.appendChild(divModal);

            button.onclick = function () {
                div.style.display = "none";
                divModal.style.display = "none";
            }

        }

    })

}

           // })


     // return data;
    






    function searchBar() {

        const searchBar = document.getElementById("search-input");



        searchBar.addEventListener("keyup", function (e) {
            const input = e.target.value.toLowerCase();
            const items = gallery.querySelectorAll(".card-info-container");
            const first = items.firstChild;
            const cardArray = document.querySelectorAll(".card");



            cardArray.forEach(function (cardArray) {



                const nameRes = cardArray.querySelector("h3").textContent;
                //console.log(nameRes);

                if (nameRes.toLowerCase().indexOf(input) != -1) {

                    cardArray.style.display = "flex";

                }

                else {

                    cardArray.style.display = "none";

                }

            });




        });

       

    }


displayData();












