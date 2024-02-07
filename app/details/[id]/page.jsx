import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
async function getPokemonById(id) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemonData = {
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      sprites: response.data.sprites
    }
    return pokemonData
  } catch (error) {
    console.error('Error fetching Pokémon data:', error)
    return {}
  }
}

const DetailsPokemons = async ({ params }) => {
  const pokemonData = await getPokemonById(params.id)

  return (
    <div className="container mx-auto p-4">
      <Link href="/">
        <button className="bg-primary mb-5 hover:bg-blue-700 font-bold py-2 px-4 rounded mt-4 inline-block">
          Back to Home
        </button>
      </Link>
      <h1 className="text-3xl font-bold mb-4 text-center">Pokémon Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-md p-4">
          <Image
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            width={200}
            height={200}
            className="mx-auto"
            priority={true}
          />
        </div>
        <div className="border rounded-md p-4 gap-1">
          <p className="text-lg font-semibold">
            Name: {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1).toLowerCase()}
          </p>
          <p className="text-lg">Height: {pokemonData.height} Mts</p>
          <p className="text-lg">Weight: {pokemonData.weight} Kg</p>
        </div>
      </div>
    </div>
  )
}

export default DetailsPokemons
