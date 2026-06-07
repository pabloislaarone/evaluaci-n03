import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-green-400" style={{ textShadow: '0 0 10px #39ff14' }}>
          ⚡ R&M Universe
        </Link>
        <div className="flex gap-6">
          <Link
            to="/"
            className={`text-sm transition-colors ${location.pathname === '/' ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}
          >
            Home
          </Link>
          <Link
            to="/entities"
            className={`text-sm transition-colors ${location.pathname === '/entities' ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}
          >
            Entities
          </Link>
        </div>
      </div>
    </nav>
  )
}
