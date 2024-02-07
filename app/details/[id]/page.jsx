// Importaciones de módulos y componentes necesarios
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'

// Función asincrónica para obtener los datos de un Pokémon por su ID
async function getPokemonById(id) {
  try {
    // Realizar una solicitud GET a la API de Pokémon con el ID proporcionado
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    // Extraer los datos relevantes del Pokémon de la respuesta
    const pokemonData = {
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      sprites: response.data.sprites,
      order: response.data.order
    }
    // Devolver los datos del Pokémon
    return pokemonData
  } catch (error) {
    // Manejar cualquier error que ocurra durante la solicitud
    console.error('Error al obtener los datos del Pokémon:', error)
    // Devolver un objeto vacío en caso de error
    return {}
  }
}

// Componente funcional para mostrar los detalles de un Pokémon
const DetailsPokemons = async ({ params }) => {
  // Obtener los datos del Pokémon utilizando su ID proporcionado
  const pokemonData = await getPokemonById(params.id)

  // Renderizar los detalles del Pokémon
  return (
    <div className="container mx-auto p-4">
      {/* Botón para regresar a la página principal */}
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
        {/* Sección para mostrar los detalles del Pokémon */}
        <div className="border rounded-md p-4 gap-1">
          <p className="text-lg font-semibold">
            Name:
            {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1).toLowerCase()}
          </p>
          <p className="text-lg">Height: {pokemonData.height} Mts</p>
          <p className="text-lg">Weight: {pokemonData.weight} Kg</p>
          <p className="text-lg">Order: {pokemonData.order}</p>
        </div>
      </div>
    </div>
  )
}

// Exportar el componente DetailsPokemons para su uso en otras partes de la aplicación
export default DetailsPokemons
