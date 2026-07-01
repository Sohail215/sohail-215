import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#081C3A] flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <h1 className="text-8xl md:text-9xl font-bold text-yellow-400">
          404
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
          Page Not Found
        </h2>

        <p className="text-gray-300 mt-6 text-lg leading-8">
          The page you are looking for doesn't exist or has been moved.
          Let's take you back to the luxury experience.
        </p>

        <Link
          href="/"
          className="inline-block mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-full font-bold transition-all duration-300"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}