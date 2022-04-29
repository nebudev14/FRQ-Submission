import { firestoreApp } from "../../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  getFirestore,
  doc,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";

export default function Assignment(props) {
    const [value, loading, error] = useCollectionData(
        query(collection(firestoreApp, "responses"), where("assignment", "==", "frq-1"))
      );
        
      console.log(value);

  return (
    <div className="h-screen p-6 ">
      <h1 className="text-3xl">{props.assignment} submissions</h1>
      <div className="flex flex-col items-center justify-start">
      {value &&
          value.map((doc, i) => (
            <div key={i}>
              <h1>{doc.email}</h1>
            </div>
          ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async context => {
    const {assignment} = context.params;
    
    return {
        props: {
            assignment
        }
    }
}