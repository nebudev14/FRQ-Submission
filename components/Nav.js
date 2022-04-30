import Link from "next/link";

import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { MdAssignment } from "react-icons/md";
import { useAuth } from "../components/contexts/AuthContext";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestoreApp } from "../firebase";

export default function Nav() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const router = useRouter();

  const [user, loading, userError] = useCollectionData(
    query(collection(firestoreApp, "users"), where("admin", "==", true))
  );

  useEffect(() => {
    if (user && currentUser && user[0].email === currentUser.email)
      setAdmin(true);
  }, [user, setAdmin, currentUser]);

  const handleLogout = async () => {
    setError("");

    try {
      await router.push("/login");
      await logout();
    } catch {
      setError("Could not log out.");
    }
  };

  const routes = [
    {
      route: "/",
      icon: <FaHome size={35} />,
    },
  ];

  return (
    <div className="flex items-center justify-start w-full px-5 py-3 bg-black">
      {routes.map((route, i) => (
        <Link href={route.route} key={i} passHref>
          <div className="mr-auto text-white duration-200 hover:cursor-pointer hover:text-green-400">
            {route.icon}
          </div>
        </Link>
      ))}
      {admin && currentUser != null ? (
        <div className="flex items-center">
          <Link href="/admin/publish" passHref>
            <div className="mr-4 text-white duration-200 hover:cursor-pointer hover:text-green-400">
              Create
            </div>
          </Link>
          <Link href="/admin" passHref>
            <div className="mr-4 text-white duration-200 hover:cursor-pointer hover:text-green-400">
              <MdAssignment size={30} />
            </div>
          </Link>
        </div>
      ) : null}
      {currentUser != null ? (
        <div
          className="text-white duration-200 hover:cursor-pointer hover:text-red-500"
          onClick={handleLogout}
        >
          <BiLogOut size={30} />
        </div>
      ) : null}
    </div>
  );
}
