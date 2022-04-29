import Link from "next/link";

import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../components/contexts/AuthContext";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Nav() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      await router.push("/login");
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
          <div className="text-white duration-200 hover:cursor-pointer hover:text-green-400">
            {route.icon}
          </div>
        </Link>
      ))}
      {currentUser != null ? (
        <div className="ml-auto text-white duration-200 hover:cursor-pointer hover:text-red-500" onClick={handleLogout}>
          <BiLogOut size={30} />
        </div>
      ) : null}
    </div>
  );
}
