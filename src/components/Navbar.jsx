import React from "react";

const Navbar = () => {
    return (
        <div
            className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] z-50 
      flex items-center justify-between 
      px-6 py-4 rounded-full 
      bg-white/10 backdrop-blur-[20px] 
      border border-white/10 shadow-lg"
        >
            <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-lg">
                St. Xavier's Higher Secondary School
            </p>

            <nav className="gap-6 bg-transparent font-medium hidden sm:flex">
                <a href="#home" className="text-sm font-bold bg-transparent">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white drop-shadow-lg">Home</p>
                </a>
                <a href="#about" className="text-sm font-bold bg-transparent">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white drop-shadow-lg">About</p>
                </a>
                <a href="#contact" className="text-sm font-bold bg-transparent">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white drop-shadow-lg">Contact</p>
                </a>
            </nav>
        </div>
    );
};

export default Navbar;