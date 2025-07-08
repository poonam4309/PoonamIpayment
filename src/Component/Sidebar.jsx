import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaMoneyCheckAlt,
  FaExchangeAlt,
  FaBook,
  FaLink,
  FaBalanceScale,
  FaCode,
  FaUserSecret
} from 'react-icons/fa';
import { User, ChevronDown, LogOut, Settings, LayoutDashboard } from 'lucide-react';
import { FaPaypal } from "react-icons/fa6";

const handleLogout = () => {
  localStorage.removeItem('isAuthenticated');
  window.location.reload(); // Or navigate to /login if using useNavigate
};

const links = [

  { name: 'Business Summary', path: '/', icon: <FaTachometerAlt size={20} /> },
  { name: 'Payin', path: '/payin', icon: <FaPaypal size={20} /> },
  { name: 'Payout', path: '/payout', icon: <FaMoneyCheckAlt size={20} /> },
  { name: 'Bulk Payment', path: '/bulk-payment', icon: <FaLink size={20} /> },
  { name: 'Transactions', path: '/transactions', icon: <FaExchangeAlt size={20} /> },
  { name: 'Passbook', path: '/passbook', icon: <FaBook size={20} /> },
  // { name: 'Payment Links', path: '/payment-links', icon: <FaLink size={20} /> },
  { name: 'Settlements', path: '/settlements', icon: <FaBalanceScale size={20} /> },
 { name: 'Client', path: '/client', icon: <FaUserSecret size={20} /> }, 
  { name: 'Developer (Doc)', path: '/developer', icon: <FaCode size={20} /> },
  { name: 'Profile ', path: '/profile', icon: <User size={20} /> },

];

const Sidebar = () => {
  const location = useLocation();

  return (
<aside className="w-64 h-screen bg-blue-900 text-white shadow-lg font-semibold overflow-y-auto">
      <div className="p-5 text-2xl font-bold tracking-wide cursor-pointer ">
        I Payments User
      </div>
      <nav className=" py-4 space-y-3 px-4">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={` flex gap-4  px-4 py-2 rounded-lg transition-all duration-200 ${location.pathname === link.path
              ? 'bg-blue-700 text-white font-semibold'
              : 'hover:bg-blue-400 hover:text-white'
              }`}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
        <Link to="/profile" className="flex items-center gap-2 hover:text-green-600 ">
          <p className="w-5 h-5" />
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
      