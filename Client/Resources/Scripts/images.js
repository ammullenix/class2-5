let subjectUrl = "https://pokeapi.co/api/v2/pokemon?limit=20"
let pokeData = []

async function handleOnLoad(){
    await getData()
    displayImages()
}

async function getData(){
    let response = await fetch(subjectUrl)
    let data = await response.json()
    pokeData = data.results
}

async function displayImages(){
    let html = `
        <div style="text-align:center;">
            <h1>Pokemon Images</h1>
        </div>
        <div style="display:flex; flex-wrap:wrap; justify-content:center;">
    `

    for (let i = 0; i < pokeData.length; i++){
        let response = await fetch(pokeData[i].url)
        let pokemonData = await response.json()
        let imageUrl = pokemonData.sprites.front_default

        html += `
            <div style="margin:10px; text-align:center;">
                <img src="${imageUrl}" alt="${pokemonData.name}">
            </div>
        `
    }

    html += `</div>`
    document.getElementById("app").innerHTML = html
}
 