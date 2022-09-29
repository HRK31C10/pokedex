const ListaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelector('.pokemon-card')

ListaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click',() =>{

        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const PokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        PokemonSelecionadoNaListagem.classList.add('ativo')

    })
})