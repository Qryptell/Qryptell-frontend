import Link from "next/link";

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h2 className="text-xl font-bold text-white mt-3">404. Page not found</h2>

      <p className="text-lg text-white mt-3">
        Sorry, the page you were looking for cannot be found.
      </p>

      <Link href="/">
        <button className="px-4 py-2 mt-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md shadow-md">
          Go Back to Home
        </button>
      </Link>
    </main>
  );
}

export default NotFound;
