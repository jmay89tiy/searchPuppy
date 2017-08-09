let wrapper = document.querySelector("#wrapper");
let buttton = document.getElementById("button");
let inputText;
let url = "https://proxy.calweb.xyz/http://www.recipepuppy.com/api/?="
let container = document.getElementById("container");

document.getElementById("button").addEventListener("click", addDoggos);

function addDoggos() {
inputText= document.querySelector("#input").value;
fetch(url + inputText)
.then(
    // The promise returns a response from the server.
    function(response) {
      // We process the response accordingly.
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        // console.log(data);
        searchDoggos(data);
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
}



  function searchDoggos(data) {
for(let i=0; i<data.results.length; i++) {
  console.log(data.results[i])
  let singleResult = data.results[i]
      let div = document.createElement("div"); // new div creation
      div.className = "recipeCard"
       div.innerHTML = `
       <img class="pics" src="${singleResult.thumbnail}">
       <a href="${singleResult.href}"><h3 class="titles">${singleResult.title}</h3></a>
       <div class="mats"><p>Ingredients: </p> ${singleResult.ingredients}</div>
       `;
      // above is creation of the h3 and the following info pulled using template
      wrapper.appendChild(div); // adding to div
    }
  }




  //function addDoggos(url, inputText) {
    //addDoggos = url + inputText;
  //}

  // make search terms couple with original fetch request via function
  // function searchDoggos(inputText) {
    /*fetch(url).then {
      document.getElementById("button").addEventListener("click", addDoggos);
      let div = document.createElement("div"); // new div creation
      div.className = "recipeCard"
       div.innerHTML = `
       <h3 class="titles">${title}</h3>
       <img class="pics" src="${thumbnail}">
       <div class="mats">${ingredients}</div>
       `;
      // above is creation of the h3 and the following info pulled using template
      wrapper.appendChild(div); // adding to div
    }
  }

  //make function for new search
*/




















// var myButton = document.getElementById( "button" );
// myButton.addEventListener( "click", function(){
  // console.log( "My Button was clicked" );




/*
https://proxy.calweb.xyz/http://www.recipepuppy.com/api/?q=bisquit

for search results */
