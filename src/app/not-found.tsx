import Link from "next/link";

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-bold text-white mt-3">404. Page not found</h2>

      <p className="text-lg text-white mt-2">
        Sorry, the page you were looking for cannot be found.
      </p>

      <Link href="/">
        <button
          className="px-14 py-2.5 mt-5 bg-gradient-to-tr from-[#171616] to-[#4f4f4f]
         hover:bg-opacity-90 hover:opacity-90 rounded-full"
        >
          Back to Home
        </button>
      </Link>
    </main>
  );
}

export default NotFound;
