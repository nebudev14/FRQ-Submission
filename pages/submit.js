import { useCollection } from "react-firebase-hooks/firestore";
import { firestoreApp } from "../firebase";

export default function Submit() {
  const [assignments, assignmentsLoading, assignmentsError] = useCollection(
    firestoreApp.collection("assignments"),
    {}
  );
  

  return (
    <div className="flex flex-col items-start justify-start h-full p-6">
      <h1 className="mb-4 text-3xl">Submit</h1>
      <form>
        <div>
          <label for="assignment">Choose an assignment: </label>
          <select name="assignment" id="assignment">
            {!assignmentsLoading && assignments
              ? assignments.docs.map((doc) => (
                  <option value={doc.data().name}>{doc.data().name}</option>
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
          />
        </div>
        <button className="px-4 py-3 text-2xl duration-200 border border-green-400 rounded-lg hover:bg-green-400">
          Submit
        </button>
      </form>
    </div>
  );
}
