import Link from "next/link";
import { firestoreApp } from "../../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";

export default function Assignment(props) {
  const [value, loading, error] = useCollectionData(
    query(
      collection(firestoreApp, "responses"),
      where("assignment", "==", props.assignment)
    )
  );

  console.log(value);

  return (
    <div className="h-screen p-6 ">
      <h1 className="text-3xl">{props.assignment} submissions</h1>
      <div className="flex flex-col items-start justify-start text-left">
        {value &&
          value.map((doc, i) => (
            <Link
              key={i}
              href={`/admin/assignment/submission/${props.assignment}/${doc.email}`}
              passHref
            >
              <h1>{doc.email}</h1>
            </Link>
          ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { assignment } = context.params;

  return {
    props: {
      assignment,
    },
  };
};
