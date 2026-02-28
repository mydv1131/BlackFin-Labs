// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import logo from "../assets/yash.svg"

// const Navbar = () => {

//     const navLinks = [
//         { path: "/", name: "Home" },
//         { path: "/about", name: "About" },
//         { path: "/contact", name: "Contact" },
//         { path: "/products", name: "Products" }
//     ]

//     const base =
//         "px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center"

//     const active =
//         "bg-[#626558] text-white shadow-md scale-105"

//     const inactive =
//         "text-black hover:bg-white/30 hover:backdrop-blur-md"

//     return (
//         <>
//             {/* ================= Mobile Navbar ================= */}
//             <nav
//                 className="
//                 md:hidden
//                 fixed top-2 left-1/2 -translate-x-1/2
//                 w-[92%]
//                 bg-[#B9BAA3]/70
//                 backdrop-blur-lg
//                 rounded-3xl
//                 shadow-xl
//                 border border-white/40
//                 z-50
//             "
//             >
//                 <div className="flex justify-around items-center py-3">
//                     {navLinks.map((item) => (
//                         <NavLink
//                             key={item.path}
//                             to={item.path}
//                             className={({ isActive }) =>
//                                 `${base} ${isActive ? active : inactive}`
//                             }
//                         >
//                             {item.name}
//                         </NavLink>
//                     ))}
//                 </div>
//             </nav>


//             {/* ================= Desktop Navbar ================= */}
//             <nav
//                 className="
//                 hidden md:flex
//                 fixed top-6 left-1/2 -translate-x-1/2
//                 w-4/5
//                 bg-[#B9BAA3]/60
//                 backdrop-blur-xl
//                 border border-white/40
//                 shadow-xl
//                 rounded-3xl
//                 z-50
//             "
//             >
//                 <div className="
//                     flex justify-between items-center
//                     px-10 py-4
//                     w-full
//                 ">
//                     {/* Logo */}
//                     <div className="">
//                         <img
//                             src={logo}
//                             alt="logo"
//                             className="h-12 w-36 object-contain"
//                         />
//                     </div>

//                     {/* Links */}
//                     <div className="flex gap-6">
//                         {navLinks.map((item) => (
//                             <NavLink
//                                 key={item.path}
//                                 to={item.path}
//                                 className={({ isActive }) =>
//                                     `${base} ${isActive ? active : inactive}`
//                                 }
//                             >
//                                 {item.name}
//                             </NavLink>
//                         ))}
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/yash.svg";
import insta from "../assets/Insta.svg";
import fb from "../assets/Fb.svg";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about2", label: "About" },
        { to: "/products", label: "Products" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <>
            {/* ================= MOBILE NAV ================= */}
            <nav className="md:hidden fixed top-0 left-1/2 -translate-x-1/2 w-[92%] z-50">

                {/* Top Glass Bar */}
                <div className="m-3 h-12 flex items-center justify-between px-5 py-4 bg-white/20 backdrop-blur-xl border rounded-2xl border-[#626558] shadow-lg">

                    {/* Brand Name */}


                    {/* Hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex flex-col gap-1.5"
                    >
                        <span
                            className={`w-6 h-0.5 bg-[#040746] transition-all duration-300 ${open ? " bg-[#ff0000] rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-[#040746] transition-all duration-300 ${open ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-[#040746] transition-all duration-300 ${open ? "bg-[#ff0000] -rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                    <div className="text-lg flex gap-2 items-center justify-center font-semibold bg-gradient-to-r to-[#adb0a3] from-[#3b3f2f] bg-clip-text text-transparent">

                        {/* <button
                            onClick={() => window.open("https://www.instagram.com/yash_pharma/", "_blank")}
                        ><img src={insta} alt="" className="w-8 h-8" /></button>

                        <button
                            onClick={() => window.open("https://www.facebook.com/yashpharma/", "_blank")}
                        ><img src={fb} alt="" className="w-8 h-8" /></button> */}

                        <h3 className="text-2xl font-bold">BlackFin Labs</h3>

                    </div>
                </div>

                {/* Animated Dropdown */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ y: -300, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -300, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/20 backdrop-blur-xl border border-[#626558] px-6 py-6 space-y-6 m-3 rounded-2xl shadow-xl"
                        >
                            {navLinks.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `block text-lg font-medium transition ${isActive
                                            ? "text-[#0a1a4d] underline underline-offset-4"
                                            : "text-[#0a1a4d]"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 w-[95%] bg-white/30 backdrop-blur-xl 
            border border-[#626558]/40 shadow-xl rounded-3xl z-50 md:h-18">
                <div className="flex justify-between items-center px-10 py-0 w-full">

                    {/* Logo + Name */}
                    <div className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-20 w-40 object-contain"
                        />

                    </div>

                    {/* Links */}
                    <div className="flex gap-8">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `text-md font-medium transition ${isActive
                                        ? "text-blue-900 bg-gradient-to-r from-[#4c669f8a] to-[#8b9dc38a] rounded-md px-2"
                                        : "text-[#626558] hover:text-green-600"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Spacer */}
            <div className="h-24"></div>
        </>
    );
};

export default Navbar;