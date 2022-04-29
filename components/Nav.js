import Link from "next/link";

import { FaHome } from "react-icons/fa";

export default function Nav() {
  const routes = [
    {
      route: "/",
      icon: <FaHome size={35} />,
    },
  ];

  return (
    <div className="flex items-center justify-end w-screen px-5 py-3 bg-black">
      {routes.map((route, i) => (
        <Link href={route.route} passHref>
          <div className="text-white duration-200 hover:cursor-pointer hover:text-green-400">
            {route.icon}
          </div>
        </Link>
      ))}
    </div>
  );
}
