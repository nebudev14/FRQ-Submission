    import { useRef } from "react";
    import { useCollection } from "react-firebase-hooks/firestore";
    import { firestoreApp } from "../firebase";
    import { useAuth } from "../components/contexts/AuthContext";

    export default function Submit() {
    const assignmentRef = useRef();
    const codeRef = useRef();
    const { currentUser } = useAuth();
    
    const [assignments, assignmentsLoading, assignmentsError] = useCollection(
        firestoreApp.collection("assignments"),
        {}
    );

    const submit = async (event) => {
        event.preventDefault();
        await firestoreApp.collection("responses").doc(assignmentRef.current.value + "-" + currentUser.email).set({
            answer: codeRef.current.value,
            email: currentUser.email
        });
    }

    return (
        <div className="flex flex-col items-start justify-start h-full p-6">
        <h1 className="mb-4 text-3xl">Submit</h1>
        <form onSubmit={submit}>
            <div>
            <label htmlFor="assignment">Choose an assignment: </label>
            <select name="assignment" id="assignment" ref={assignmentRef}>
                {!assignmentsLoading && assignments
                ? assignments.docs.map((doc, i) => (
                    <option key={i} value={doc.data().name}>{doc.data().name}</option>
                    ))
                : null}
            </select>
            <h1 className="mb-4 text-2xl">Paste your code here: </h1>
            <textarea
                name="code"
                id="code"
                cols="150"
                rows="30"
                className="p-6 mb-2 rounded-2xl"
                ref={codeRef}
            />
            </div>
            <button className="px-4 py-3 text-2xl duration-200 border border-green-400 rounded-lg hover:bg-green-400" type="submit">
            Submit
            </button>
        </form>
        </div>
    );
    }
