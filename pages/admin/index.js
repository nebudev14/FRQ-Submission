import { useCollection } from 'react-firebase-hooks/firestore';
import { firestoreApp } from "../../firebase";

export default function Admin() {
    const [assignments, assignmentsLoading, assignmentsError] = useCollection(
        firestoreApp.collection("assignments"),
        {}
    );
    
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="mb-4 text-2xl text-green-400">Your assignments</h1>
            {!assignmentsLoading && assignments ? assignments.docs.map((doc) => doc.data().name) : null}
        </div>
    );
}