import Link from "next/link";
import { useEffect } from "react";
import { collection, query, where } from "firebase/firestore";
import { useCollection, useCollectionData } from "react-firebase-hooks/firestore";
import { firestoreApp } from "../../firebase";
import { useAuth } from "../../components/contexts/AuthContext";
import { useRouter } from "next/router";

export default function Admin() {
  const router = useRouter();
  const { currentUser } = useAuth();
  
  useEffect(() => {
    if(!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]) 

  const [user, loading, error] = useCollectionData(
    query(
      collection(firestoreApp, "users"),
      where("admin", "==", true),
      where("email", "==", currentUser.email),
    )
  )

  if(user !== undefined && user[0].email !== currentUser.email) {
    router.push("https://www.youtube.com/watch?v=xvFZjo5PgG0")
  }
  
  const [assignments, assignmentsLoading, assignmentsError] = useCollection(
    firestoreApp.collection("assignments"),
    {}
  );
  
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="mb-4 text-2xl text-green-400">Your assignments</h1>
      <div className="grid grid-cols-1">
        {!assignmentsLoading && assignments
          ? assignments.docs.map((doc, i) => (
              <Link
                href={`/admin/assignment/${doc.data().name}`}
                passHref
                key={i}
              >
                <div
                  key={i}
                  className="px-3 py-4 mb-6 duration-200 border border-gray-300 rounded-xl hover:cursor-pointer hover:border-green-300"
                >
                  <h2 className="text-3xl">{doc.data().name}</h2>
                </div>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}
