
pegarPokemons(3);


var quantidade = document.getElementById('quantidade');

quantidade.addEventListener('keyup',()=>{
    pegarPokemons(quantidade.value);
})

function pegarPokemons(quantidade){
fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
.then(Response => Response.json())
.then(allpokemon => {

    var pokemons =[];

    allpokemon.results.map((val)=>{
         
        fetch(val.url)
        .then(Response => Response.json())
        .then(pokemonSingle => {
            pokemons.push({nome:val.name, imagem:pokemonSingle.sprites.front_default});

            if(pokemons.length == quantidade){

                var pokemonBoxes = document.querySelector('.pokemon-boxes');
                pokemonBoxes.innerHTML = "";
                
                pokemons.map(function(val){
                    pokemonBoxes.innerHTML+= `
                    
                    <div class="pokemon-box">
                        <img src="`+val.imagem+`" />
                        <p>`+val.nome+`</p>
                    </div>
                    `;
                })
            }
        })

    })

    pokemons.map((val)=>{
        console.log(val.name)
    })
})
}
