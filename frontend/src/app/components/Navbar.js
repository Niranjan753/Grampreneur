import Link from 'next/link';

const NavLink = ({ href, children }) => (
  <Link href={href} className="text-white hover:text-gray-300 transition-colors duration-300">
    {children}
  </Link>
);

const Navbar = () => {
  return (
    <nav className="w-full fixed top-4 z-50 flex justify-center hover:animate-">
      <div className="bg-gradient-to-r from-silver via-silver to-black backdrop-blur-md rounded-full px-3 py-4 flex items-center space-x-6 border border-gray-700 transition-all duration-1000 hover:bg-gradient-to-r hover:from-black hover:via-silver hover:to-black hover:border-silver hover:shadow-lg hover:shadow-silver/20">
        <NavLink href="/">Home</NavLink>
        <NavLink href="#about-us">About Us</NavLink>
        <NavLink href="/#features">Features</NavLink>
        <NavLink href="/#contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;