import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black space-y-4">
      <h2 className="text-xl font-bold text-white mt-3">404. Page not found</h2>

      <p className="text-lg text-white mt-2">
        Sorry, the page you were looking for cannot be found.
      </p>

      <Link href="/">
        <button
          className="py-2.5 px-10 bg-gradient-to-tr from-[#181717] to-[#4d4c4c] 
        rounded-full hover:opacity-90 hover:brightness-90"
        >
          Back to Home.
        </button>
      </Link>
    </main>
  );
}
