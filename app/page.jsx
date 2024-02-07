import axios from 'axios'
import PokemonCard from '@/components/PokemonCard'

async function getPokemons() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')
    const pokemonList = response.data.results
    const pokemonPromises = pokemonList.map(async (pokemon) => {
      const response = await axios.get(pokemon.url)
      const { height, weight, sprites, id } = response.data
      return {
        ...pokemon,
        id,
        height,
        weight,
        sprites
      }
    })
    const pokemonsWithInfo = await Promise.all(pokemonPromises)
    return pokemonsWithInfo
  } catch (error) {
    console.error('Error fetching Pokémon data:', error)
    return []
  }
}

async function HomePage() {
  const pokemons = await getPokemons()
  return (
    <main>
      <PokemonCard
        pokemons={pokemons}
        key={pokemons.id}
      />
    </main>
  )
}

export default HomePage
