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
      <h1 className="mb-6 text-4xl">{props.assignment} submissions</h1>
      <button className="px-4 py-3 mb-10 text-2xl duration-200 border border-red-500 rounded-lg hover:bg-red-500" onClick={() => router.push("/admin")}>
        Back
      </button>
      <div className="grid grid-cols-2">
        <div className="text-center">
          <h1 className="mb-2 text-2xl">Period 3</h1>
          {value &&
            value.map((doc, i) =>
              doc.period == "p3" ? (
                <>
                  <Link
                    key={i}
                    href={`/admin/assignment/submission/${props.assignment}/${doc.email}`}
                    passHref
                  >
                    <h1 className="inline text-3xl duration-200 hover:text-green-400 hover:cursor-pointer">
                      {doc.email}
                    </h1>
                  </Link>
                  <br />
                </>
              ) : null
            )}
        </div>
        <div className="text-center">
          <h1 className="mb-2 text-2xl">Period 6</h1>
          {value &&
            value.map((doc, i) =>
              doc.period == "p6" ? (
                <>
                  <Link
                    key={i}
                    href={`/admin/assignment/submission/${props.assignment}/${doc.email}`}
                    passHref
                  >
                    <h1 className="inline text-3xl duration-200 hover:text-green-400 hover:cursor-pointer">
                      {doc.email}
                    </h1>
                  </Link>{" "}
                  <br />
                </>
              ) : null
            )}
        </div>
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
