import { Link } from 'react-router'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About</h1>
      <p className="text-lg text-gray-600 mb-8">This is the about page</p>
      <Link
        to="/"
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  )
}
