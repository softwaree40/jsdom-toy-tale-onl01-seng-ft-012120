let addToy = false;

 document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const submitNewToyBtn = document.querySelector('.add-toy-form');
  const countNumbersOfLike = document.querySelector('like-btn');
  countNumbersOfLike.addEventListener("click",() =>{ alert("welcome")})
  getToys();

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
     }
   });
   
   submitNewToyBtn.addEventListener('submit', handleSubmit)
   
 });

function getToys(){
  fetch("http://localhost:3000/toys")
  .then(function(response){              
    return response.json();
  })
  .then(toys => renderToys(createToyCards(toys)))
}

function createToyCards(toys){ 

  return toys.map(toy => {  
    return (
      `
        <div class="card">
          <h2>${toy.name}</h2>
          <img src=${toy.image} class="toy-avatar" />
          <p> ${toy.likes} Likes </p>
          <button class="like-btn">Like <3</button>
        </div>
      `
      
    )
    
  })
  
}

function renderToys(toyCards) {
  toyCardsWrapper = document.querySelector('#toy-collection')
  toyCardsWrapper.innerHTML = toyCards
}


function handleSubmit(e) {
  e.preventDefault()
  const inputs = e.target.querySelectorAll('input')
  const toy = {
    name: inputs[0].value,
    image: inputs[1].value,
    likes: 0
  }

  createNewToy(toy)
}

  
function createNewToy(toy){

  let configObj = {
   method : "post",
  headers: {
   "Content-Type": "application/json",
   "accept": "application/json"
  },
  body: JSON.stringify(toy)

  }

  fetch('http://localhost:3000/toys', configObj)
  
 
}
// function handleLike(event){
// console.log(event.target)

// }
function handleButtonClick(){







}