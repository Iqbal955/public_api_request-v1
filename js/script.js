
//############ DOM elements #############
const search = document.querySelector("search-container");
const modal = document.querySelector("div .modal-info-container");
const modalimg = document.querySelector(".modal-img");
const modalcontainer = document.getElementById("modal-container");

//############ FETCH ####################
fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => showInfo(data.results))


//############ GenerateHTML ##################

function showInfo(data) {
  
    
    console.log(modalimg);

    for (var i = 0; i < data.length; i++) {

        modalimg.innerHTML = 
           
    ` <img src= ${data[i].picture.large}>`;

   

    }
    
 
    }







