'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const PokemonCard = ({ pokemons }) => {
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState('asc')

  const sortPokemons = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
  }

  const sortedPokemons = [...pokemons].sort((a, b) => {
    if (sortBy === 'order') {
      if (sortOrder === 'asc') {
        return a.order - b.order
      } else {
        return b.order - a.order
      }
    } else {
      if (sortOrder === 'asc') {
        return a[sortBy] > b[sortBy] ? 1 : -1
      } else {
        return b[sortBy] > a[sortBy] ? 1 : -1
      }
    }
  })
  console.log(sortedPokemons)
  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">Pokémon List</h1>
        <div className="mb-4 space-x-4 flex justify-start">
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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {sortedPokemons.map((pokemon) => (
            <Link
              href={`/details/${pokemon.id}`}
              key={pokemon.id}
            >
              <div className="relative border rounded-md p-4 cursor-pointer hover:bg-primary hover:border-secondary transition duration-300">
                <div className="absolute top-2 left-2 bg-gray-500 text-text rounded-full px-2 z-10">
                  {pokemon.order}
                </div>
                <Image
                  src={pokemon.sprites.front_default}
                  alt=" front default"
                  className="mx-auto"
                  height={200}
                  width={200}
                  priority={true}
                />
                <p className="text-center font-semibold">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}
                </p>
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

export default PokemonCard
