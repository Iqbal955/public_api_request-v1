
//############ DOM elements #############
const search = document.querySelector("search-container");
const modal = document.querySelector("div .modal-info-container");
const modalImg = document.querySelector(".modal-img");
const modalcontainer = document.getElementById("modal-container");

//############ FETCH ####################
fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => showInfo(data.results))


//############ GenerateHTML ##################

function showInfo(data) {
  
    
    

    for (var i = 0; i < data.length; i++) {

        modalImg.innerHTML = 
            `
     <img src= ${data[i].picture.large}>`;


        //modalImg.src = `${data[i].picture.large}>`
    

    }
    
 
    }







