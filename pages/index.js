import Head from "next/head";
import Link from "next/link";

import { FaGoogle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="mb-6 text-2xl">Mr Chen&apos;s FRQ Submission Page</h1>
      <form className="grid grid-cols-1">
        <input className="px-3 py-4 mb-3 bg-gray-900 rounded-lg" placeHolder="Email" id="email" name="email" />
        <input className="px-3 py-4 mb-3 bg-gray-900 rounded-lg" placeHolder="Password" id="password" name="password" />
        <button className="px-8 py-3 mb-4 text-xl border border-pink-600 rounded-lg">
          Login
        </button>
      </form>

      <Link href="/register" passHref>
        <h1 className="duration-200 hover:cursor-pointer hover:text-cyan-400">
          Don&apos;t have an account? Register here!
        </h1>
      </Link>
    </div>
  );
}
