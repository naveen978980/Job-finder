import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="px-6 py-4 flex justify-between items-center shadow-md"
         style={{ background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
      <h1 className="text-xl font-bold text-gray-800">RozgarYojna</h1>
      <div className="space-x-4 text-gray-800">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/login" className="hover:text-blue-600 transition">Login</Link>
        <Link to="/profile" className="hover:text-blue-600 transition">Profile</Link>
      </div>
    </nav>
  );
}
