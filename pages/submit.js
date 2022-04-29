import { useCollection } from "react-firebase-hooks/firestore";
import { firestoreApp } from "../firebase";

export default function Submit() {
  const [assignments, assignmentsLoading, assignmentsError] = useCollection(
    firestoreApp.collection("assignments"),
    {}
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
        </div>
      </form>
    </div>
  );
}
