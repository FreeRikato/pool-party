import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Pool Party</h1>
      <p className="text-lg text-gray-600 mb-8">Welcome to the app</p>
      <Link
        to="/about"
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Go to About
      </Link>
    </div>
  );
}
