import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8">
          We are a company dedicated to creating amazing web applications using Next.js.
        </p>
        <Link 
          href="/" 
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
} 