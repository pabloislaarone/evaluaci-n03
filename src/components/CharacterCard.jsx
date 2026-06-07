export default function CharacterCard({ character }) {
  const statusClass = {
    Alive: 'status-alive',
    Dead: 'status-dead',
    unknown: 'status-unknown',
  }[character.status] || 'status-unknown'

  return (
    <div className="card-hover bg-gray-900 border border-gray-800 rounded-xl overflow-hidden cursor-pointer">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-white text-lg mb-2 truncate">{character.name}</h3>
        <p className="text-sm text-gray-400 mb-1">
          <span className={`status-dot ${statusClass}`}></span>
          {character.status} — {character.species}
        </p>
        <p className="text-sm text-gray-500 truncate">📍 {character.location?.name}</p>
        <p className="text-xs text-green-400 mt-2">#{character.id}</p>
      </div>
    </div>
  )
}
