import Link from "next/link";
import { firestoreApp } from "../../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useAuth } from "../../../components/contexts/AuthContext";
import { useEffect } from "react";

export default function Assignment(props) {
  const router = useRouter();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  const [user, loading, error] = useCollectionData(
    query(collection(firestoreApp, "users"), where("admin", "==", true))
  );
  if (user !== undefined && user[0].email !== currentUser.email) {
    router.push("https://www.youtube.com/watch?v=xvFZjo5PgG0");
  }
  ``;

  const [value, valueLoading, valueError] = useCollectionData(
    query(
      collection(firestoreApp, "responses"),
      where("assignment", "==", props.assignment)
    )
  );

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
