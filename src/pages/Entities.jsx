import { useEffect, useState } from 'react'

export default function Entities() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character?page=1')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setLoading(false)
      })
  }, [])

  const statusColor = {
    Alive: 'text-green-400',
    Dead: 'text-red-400',
    unknown: 'text-gray-400',
  }

  const filtered = filter === 'all'
    ? characters
    : characters.filter(c => c.status === filter)

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Entidades</h1>
      <p className="text-gray-500 mb-6">Listado detallado de personajes del universo Rick & Morty</p>

      {/* Filtros */}
      <div className="flex gap-2 mb-6">
        {['all', 'Alive', 'Dead', 'unknown'].map(s => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1 rounded-full text-sm border transition-all ${
              filter === s
                ? 'border-green-400 text-green-400 bg-green-400/10'
                : 'border-gray-700 text-gray-400 hover:border-gray-500'
            }`}
          >
            {s === 'all' ? 'Todos' : s}
          </button>
        ))}
      </div>

      {loading && <p className="text-green-400 animate-pulse">Cargando...</p>}

      {!loading && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500 text-left">
                <th className="pb-3 pr-4">Personaje</th>
                <th className="pb-3 pr-4">Estado</th>
                <th className="pb-3 pr-4">Especie</th>
                <th className="pb-3 pr-4">Género</th>
                <th className="pb-3">Origen</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(char => (
                <tr
                  key={char.id}
                  className="border-b border-gray-900 hover:bg-gray-900 transition-colors"
                >
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={char.image}
                        alt={char.name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-700"
                      />
                      <div>
                        <p className="text-white font-medium">{char.name}</p>
                        <p className="text-gray-600 text-xs">#{char.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <span className={`font-medium ${statusColor[char.status] || 'text-gray-400'}`}>
                      {char.status}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-gray-300">{char.species}</td>
                  <td className="py-3 pr-4 text-gray-400">{char.gender}</td>
                  <td className="py-3 text-gray-500 max-w-xs truncate">{char.origin?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
