import Link from 'next/link';
import { useState } from 'react';
import MenuIcon from './MenuIcon';

const Navbar = ({ textColor = 'text-white '}: {textColor?: string}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 rounded-lg mb-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center" style={{ maxWidth: "1500px" }}>
        <Link href="/" legacyBehavior>
          <a className={`text-xl font-bold ${isOpen ? 'text-white' : textColor} z-50`}>Portfolio</a>
        </Link>
        <div className="hidden lg:flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className={` ${textColor} hover:text-yellow`}>About</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a className={` ${textColor} hover:text-yellow`}>Projects</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={` ${textColor} hover:text-yellow`}>Contact</a>
          </Link>
        </div>
        <div className="block lg:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none ${isOpen ? 'text-white' : 'text-gray-700 hover:text-gray-900'}`}
          >
            <MenuIcon isOpen={isOpen} />
          </button>
        </div>
      </div>
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-75 flex flex-col items-center justify-center z-40 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-white mb-8" onClick={() => setIsOpen(false)}>Home</a>
        </Link>
        <Link href="/projects" legacyBehavior>
          <a className="text-2xl font-bold text-white mb-8" onClick={() => setIsOpen(false)}>Projects</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="text-2xl font-bold text-white" onClick={() => setIsOpen(false)}>Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;