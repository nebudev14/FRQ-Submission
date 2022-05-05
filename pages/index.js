import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../components/contexts/AuthContext";

export default function Home() {
  const router = useRouter();
  const { currentUser } = useAuth();
  useEffect(() => {
    if(!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router])  

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="mb-6 text-2xl">Mr Chen&apos;s FRQ Submission Page</h1>
      <button
        className="px-4 py-3 text-2xl duration-200 border border-pink-600 rounded-lg hover:bg-pink-600"
        onClick={() => router.push("/submit")}
      >
        Submit
      </button>
    </div>
  );
}