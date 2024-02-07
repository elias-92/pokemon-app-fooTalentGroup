// Importaciones de módulos y componentes necesarios
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// Definición del componente PokemonCard
const PokemonCard = ({ pokemons }) => {
  // Estados para controlar el orden y la dirección de clasificación
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState('asc')

  // Función para ordenar los Pokémon según un campo específico
  const sortPokemons = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
  }

  // Función para ordenar los Pokémon de acuerdo al criterio seleccionado
  const sortedPokemons = [...pokemons].sort((a, b) => {
    if (sortBy === 'order') {
      // Ordenar por el número de orden de aparición
      if (sortOrder === 'asc') {
        return a.order - b.order
      } else {
        return b.order - a.order
      }
    } else {
      // Ordenar por otros campos como nombre, peso o altura
      if (sortOrder === 'asc') {
        return a[sortBy] > b[sortBy] ? 1 : -1
      } else {
        return b[sortBy] > a[sortBy] ? 1 : -1
      }
    }
  })

  // Renderizado del componente
  return (
    <div className="container mx-auto p-4">
      <div>
        {/* Título de la lista de Pokémon */}
        <h1 className="text-3xl font-bold mb-4 text-center">Pokémon List</h1>
        <div className="mb-4 space-x-4 flex justify-start">
          {/* Selector de criterio de ordenamiento */}
          <select
            className="bg-primary hover:bg-blue-700 font-bold py-2 px-4 rounded"
            onChange={(e) => sortPokemons(e.target.value)}
            defaultValue="sort"
          >
            <option
              value="sort"
              disabled
            >
              Sort by...
            </option>
            <option value="order">Sort by Order</option>
            <option value="name">Sort by Name</option>
            <option value="weight">Sort by Weight</option>
            <option value="height">Sort by Height</option>
          </select>
          {/* Botón para activar el ordenamiento */}
          <button
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => sortPokemons(sortBy)}
          >
            <Image
              src={`/arrow-${sortOrder === 'asc' ? 'up' : 'down'}.svg`}
              alt={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
              width={24}
              height={24}
              priority={true}
            />
          </button>
        </div>

        {/* Grid para mostrar las tarjetas de los Pokémon */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {sortedPokemons.map((pokemon) => (
            <Link
              href={`/details/${pokemon.id}`}
              key={pokemon.id}
            >
              <div className="relative border rounded-md p-4 cursor-pointer hover:bg-primary hover:border-secondary transition duration-300">
                {/* Div para mostrar el número de orden de aparición */}
                <div className="absolute top-2 left-2 bg-gray-500 text-text rounded-full px-2 z-10">
                  {pokemon.order}
                </div>
                {/* Imagen del Pokémon */}
                <Image
                  src={pokemon.sprites.front_default}
                  alt=" front default"
                  className="mx-auto"
                  height={200}
                  width={200}
                  priority={true}
                />
                {/* Nombre del Pokémon */}
                <p className="text-center font-semibold">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}
                </p>
                {/* Altura y peso del Pokémon */}
                <p className="text-center">Height: {pokemon.height} Mts</p>
                <p className="text-center">Weight: {pokemon.weight} Kg</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// Exportar el componente PokemonCard para su uso en otras partes de la aplicación
export default PokemonCard
