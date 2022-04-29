import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="mb-6 text-2xl">Mr Chen&apos;s FRQ Submission Page</h1>
      <button
        className="px-4 py-3 text-2xl duration-200 border border-green-400 rounded-lg hover:bg-green-400"
        onClick={() => router.push("/submit")}
      >
        Submit
      </button>
    </div>
  );
}
