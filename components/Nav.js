import Link from 'next/link';

import { FaHome } from 'react-icons/fa';

export default function Nav() {
    const routes = [
        {
            "route": "/",
            "icon": <FaHome size={30} />
        }
    ]
    
    return (
        <div className="flex items-center justify-center w-screen">
            
        </div>
    );
}