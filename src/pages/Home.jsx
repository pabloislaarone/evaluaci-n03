import { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'

export default function Home() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1
          className="text-5xl font-bold mb-4 text-green-400"
          style={{ textShadow: '0 0 30px #39ff14, 0 0 60px #39ff1444' }}
        >
          Rick & Morty Universe
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Explora los personajes del multiverso. Datos consumidos en tiempo real desde la Rick and Morty API.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 border border-green-400 rounded-full px-4 py-1 text-green-400 text-sm portal-glow">
          <span className="animate-pulse">●</span> API Live
        </div>
      </div>

      {/* Characters Grid */}
      {loading && (
        <p className="text-center text-green-400 animate-pulse">Cargando personajes...</p>
      )}
      {error && (
        <p className="text-center text-red-400">Error: {error}</p>
      )}
      {!loading && !error && (
        <>
          <h2 className="text-gray-300 text-xl mb-6 border-b border-gray-800 pb-2">
            Personajes ({characters.length} resultados)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {characters.map(char => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
