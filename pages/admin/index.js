import Link from "next/link";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestoreApp } from "../../firebase";

export default function Admin() {
  const [assignments, assignmentsLoading, assignmentsError] = useCollection(
    firestoreApp.collection("assignments"),
    {}
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
                  className="px-3 py-4 duration-200 border border-gray-300 rounded-xl hover:cursor-pointer hover:border-green-300"
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
