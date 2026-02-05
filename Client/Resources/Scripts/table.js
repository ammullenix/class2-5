let subjectUrl = "https://pokeapi.co/api/v2/pokemon"
let pokeData = []
let pokemonNames = []
let pokemonUrls = []

async function handleOnLoad(){
   await getData();
   displayTable();
}

async function getData(){
    let response = await fetch(subjectUrl)
    let data = await response.json()
    pokeData = data.results

    pokeData.forEach(function(pokemon){
        pokemonNames.push(pokemon.name)
        pokemonUrls.push(pokemon.url)
    })
    localStorage.setItem('pokemonNames', JSON.stringify(pokemonNames))
    localStorage.setItem('pokemonUrls', JSON.stringify(pokemonUrls))    
}

function displayTable(){
    let html=`<div class="header" style="text-align: center;">
    
    </div>
    <br></br>
    <table class="table">
    <tr>
      <th><h1>Pokemon</h1></th>
      <th></th>
    </tr>`
    pokeData.forEach(function(pokemon){
        html+=`<tr>
        <td>${pokemon.name}</td>
      </tr>`
    })
    html += `</table>`
    document.getElementById('app').innerHTML = html
}