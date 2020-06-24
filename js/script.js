
//############ DOM elements #############
const search = document.querySelector("search-container");
const modal = document.querySelector("div .modal-info-container");
const modalImg = document.querySelector(".modal-img");
const modalcontainer = document.getElementById("modal-container");
const array = [];
var div;
let card;
let gallery;
let cardcontainer;
let img;
let divModal;
let cardinfocontainer;
let xbutton;
let divModalInfoContainer;
const body = document.body;
let len;



let modalbtnContainer;
let nextbutton;
let prevbutton;
//############ FETCH ####################
const fetchURL = "https://randomuser.me/api/?results=12";
let i;



fetch("https://randomuser.me/api/?results=12") //fetches the api
    .then(fetchPeopleJSON => fetchPeopleJSON.json()) //turns api to json
    .then(fetchpeopledata => { 

        const data = fetchpeopledata.results //sets data = result of json 
             data
            .then(cards(data)) //runs the functions 
            .then(modalEvents(data))
            .then(searchBar(data))
    });

/*
having one large async function, that runs getProfiles passing in the fetchURL from line 14, 
then with the data running each function asynchronously

*/




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


function createmodal(data, i) {

    //######################## MODAL ####################################

    console.log(data);
    console.log("this is " + i);
  


        divModal = document.createElement("div");
        divModal.setAttribute("class", "modal-container");

        div = document.createElement("div");
        div.setAttribute("class", "modal")
        divModal.appendChild(div);


        xbutton = document.createElement("button");
        xbutton.setAttribute("id", "modal-close-btn");
        xbutton.setAttribute("class", "modal-close-btn");
        xbutton.textContent = "x";


        div.appendChild(xbutton);

        divModalInfoContainer = document.createElement("div");
        divModalInfoContainer.setAttribute("class", "modal-info-container")
        div.appendChild(divModalInfoContainer);

            divModalInfoContainer.innerHTML =
                `<img class="modal-img" src= "${data[i].picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${data[i].name.first} ${data[i].name.last}</h3>
                <p class="modal-text">E-mail ${data[i].email}</p >
                <p class="modal-text cap">City: ${data[i].location.city}</p>
                <hr>
                    <p class="modal-text">Phone Number ${data[i].cell}</p>
                    <p class="modal-text">Adress:${data[i].location.street.name} ${data[i].location.street.number} ${data[i].location.postcode}.</p>
                    <p class="modal-text">Age: ${data[i].dob.age}</p>`;


            modalbtnContainer = document.createElement("div"); //creating the container for the next and previous button
            modalbtnContainer.setAttribute("class", "modal-btn-container"); //setting the class


            nextbutton = document.createElement("button");
            nextbutton.setAttribute("id", "modal-next");
            nextbutton.setAttribute("class", "modal-next btn");
            nextbutton.textContent = "Next";



            prevbutton = document.createElement("button");
            prevbutton.setAttribute("id", "modal-prev");
            prevbutton.setAttribute("class", "modal-prev btn");
            prevbutton.textContent = "Prev";

            modalbtnContainer.appendChild(prevbutton);
            modalbtnContainer.appendChild(nextbutton);
            div.appendChild(modalbtnContainer);  //  append to current modal (named div), that is clicked on( the i'th modal from the createmodal loop);

            

            body.appendChild(divModal);

            

            xbutton.onclick = function () {
                div.remove();
                divModal.remove();
            }

             //does not need to be called   modalEvents(data, i);




    

    return data;



    
}


function modalEvents(data) {
    for (let i = 0, len = data.length; i < len; i++) { //loops through all cards
        gallery.children[i + 1].onclick = function () { //for each card a event listener is added
            createmodal(data, i) //when the card is clicked the createmodal get called (which is the function that creates the modal)
            nextprev(data, i); //the next and previous button event function is then called
            console.log(i);

        }
    }




}



function nextprev(data, i) {


    
    console.log("in nextprev the i is" + i);
    var dataArr = Object.entries(data);

    dataArr.forEach(dataArr => {
       
        // ######################### Prev and Next click function and creation ################################

        console.log(nextbutton);


        nextbutton.onclick = function () { //when the next button is clicked
            div.remove(); //the modal gets hidden
            divModal.remove(); //the divmodal gets hidden

            createmodal(dataArr[i + 1], i); //the createmodal gets called and creates a modal for the next card in the loop


        }


        prevbutton.onclick = function () { //when the next button is clicked
            div.remove(); //the modal gets hidden
            divModal.remove(); //the divmodal gets hidden
            createmodal(dataArr[i - 1], i); //the createmodal gets called and creates a modal for the next card in the loop


        }
    });
    return dataArr;
    return i;

}




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















