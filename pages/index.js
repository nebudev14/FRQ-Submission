import Head from "next/head";
import Link from "next/link";

import { FaGoogle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="mb-6 text-2xl">Mr Chen's FRQ Submission Page</h1>
      <button className="px-3 py-4 mb-4 border border-pink-600 rounded-md">
        <FaGoogle size={25} className="inline mr-2" /> Sign in with Google
      </button>
      <Link href="/admin">
        <h1 className="duration-200 hover:cursor-pointer hover:text-cyan-400">
          (If you are Mr. Chen, just click here!)
        </h1>
      </Link>
    </div>
  );
}
