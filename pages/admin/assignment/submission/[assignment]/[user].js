import { useRouter } from "next/router";
import { firestoreApp } from "../../../../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { useAuth } from "../../../../../components/contexts/AuthContext";
import { useEffect } from "react";

export default function Submission() {
  const router = useRouter();
  const path = router.asPath.split("/");
  const assignment = path[path.length - 2].replace("%20", " ");
  const user = path[path.length - 1];
  const { currentUser } = useAuth();
  
  useEffect(() => {
    if(!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]) 

  const [userValue, userLoading, userError] = useCollectionData(
    query(
      collection(firestoreApp, "users"),
      where("admin", "==", true)
    )
  )
  if(userValue !== undefined && userValue[0].email !== currentUser.email) {
    router.push("https://www.youtube.com/watch?v=xvFZjo5PgG0")
  }
  
  const [value, loading, error] = useCollectionData(
    query(
      collection(firestoreApp, "responses"),
      where("assignment", "==", assignment),
      where("email", "==", user)
    )
  );

  return (
    <div className="h-full p-6">
      <h1 className="mb-4 text-3xl">
        {user}&apos;s submission for {assignment}
      </h1>
      <textarea
        readOnly={true}
        className="p-6 mb-2 text-xl bg-black rounded-2xl"
        placeholder={value && value[0].answer}
        cols="130"
        rows="30"
      />
    </div>
  );
}
