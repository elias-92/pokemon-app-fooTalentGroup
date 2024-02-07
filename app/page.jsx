import axios from 'axios'
import PokemonCard from '@/components/PokemonCard'

/**
 * Función asincrónica para obtener información de los Pokémon desde la API.
 * @returns {Array} Un array de objetos con la información de los Pokémon.
 */
async function getPokemons() {
  try {
    // Realiza una solicitud GET a la API de Pokémon para obtener una lista de Pokémon.
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')
    // Extrae la lista de Pokémon de la respuesta.
    const pokemonList = response.data.results
    // Mapea sobre la lista de Pokémon y realiza solicitudes para obtener más información de cada uno.
    const pokemonPromises = pokemonList.map(async (pokemon) => {
      // Realiza una solicitud GET a la URL del Pokémon para obtener detalles adicionales.
      const response = await axios.get(pokemon.url)
      // Extrae los datos relevantes de la respuesta.
      const { height, weight, sprites, id, order } = response.data
      // Retorna un objeto con la información del Pokémon.
      return {
        ...pokemon,
        id,
        height,
        weight,
        sprites,
        order
      }
    })
    // Espera a que todas las solicitudes paralelas se completen y retorna la información de los Pokémon.
    const pokemonsWithInfo = await Promise.all(pokemonPromises)
    return pokemonsWithInfo
  } catch (error) {
    // Maneja cualquier error que ocurra durante la obtención de datos y registra un mensaje de error.
    console.error('Error fetching Pokémon data:', error)
    // Retorna un arreglo vacío en caso de error.
    return []
  }
}

/**
 * Página principal que renderiza la lista de Pokémon.
 * @returns {JSX.Element} El componente principal de la página.
 */
async function HomePage() {
  // Obtiene la información de los Pokémon.
  const pokemons = await getPokemons()
  // Renderiza el componente PokemonCard con la información de los Pokémon.
  return (
    <main>
      <PokemonCard
        pokemons={pokemons}
        key={pokemons.id}
      />
    </main>
  )
}

// Exporta la función HomePage como componente principal de la página.
export default HomePage
