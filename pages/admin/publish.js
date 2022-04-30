import Link from "next/link";
import { useRef, useEffect } from "react";
import { collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestoreApp } from "../../firebase";
import { useAuth } from "../../components/contexts/AuthContext";
import { useRouter } from "next/router";

export default function Publish() {
    const router = useRouter();
    const { currentUser } = useAuth();
    const titleRef = useRef();

    useEffect(() => {
      if(!currentUser) {
        router.push("/login");
      }
    }, [currentUser, router]) 
  
    const [user, loading, error] = useCollectionData(
      query(
        collection(firestoreApp, "users"),
        where("admin", "==", true)
      )
    )
    if(user !== undefined && user[0].email !== currentUser.email) {
      router.push("https://www.youtube.com/watch?v=xvFZjo5PgG0")
    }
    
    const submit = async (event) => {
        event.preventDefault();
        await firestoreApp
            .collection("assignments")
            .doc(titleRef.current.value)
            .set({
                name: titleRef.current.value
            });
        await router.push("/admin")
    }

    return (
        <div className="flex items-center justify-center h-screen p-6">
            <form className="flex flex-col items-center justify-center" onSubmit={submit}>
                <input placeholder="Name of assignment" name="name" id="name" className="px-4 py-3 mb-3 bg-black rounded-2xl" autoComplete="off" ref={titleRef}/>
                <button type="submit" className="px-3 py-3 duration-200 border border-green-400 rounded-xl hover:bg-green-400 text-2x ">Publish</button>
            </form>
        </div>
    );
}