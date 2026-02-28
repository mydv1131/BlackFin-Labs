import React from "react";
import { NavLink } from "react-router-dom";
import insta from "../../assets/Insta.svg";
import fb from "../../assets/Fb.svg";
const Footer = () => {
    return (
        <footer className="bg-white text-black mt-16">

            <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        Blackfin Labs
                    </h2>
                    <p className="text-black/80 text-sm leading-relaxed">
                        Your trusted neighborhood pharmacy providing quality medicines,
                        professional consultation, and reliable healthcare support.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm text-black/80">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `transition hover:text-white ${isActive ? "text-blue font-semibold" : "text-black"
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `transition hover:text-white ${isActive ? "text-blue font-semibold" : "text-black"
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    `transition hover:text-white ${isActive ? "text-white font-semibold" : ""
                                    }`
                                }
                            >
                                Products
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `transition hover:text-white ${isActive ? "text-white font-semibold" : ""
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Contact Us
                    </h3>
                    <ul className="space-y-2 text-sm text-black">
                        <li>Unit No.12, Bhutani Cyber park, 4th Floor Tower Industrial Phase-2, C-Block, Goutam Budh, Nagar Noida (UP) pin-201301
                        </li>
                        <li>📞 +91 98765 43210</li>
                        <li>✉️ blackfinlabspvtltd@gmail.com</li>
                        <li className="flex items-center gap-2">
                            <p className="text-black font-semibold">Follow us on</p>
                            <div className="text-lg flex gap-2 items-center justify-center font-semibold bg-gradient-to-r to-[#adb0a3] from-[#3b3f2f] bg-clip-text text-transparent">
                                {/* instagram */}
                                <button
                                    onClick={() => window.open("https://www.instagram.com/yash_pharma/", "_blank")}
                                ><img src={insta} alt="" className="w-8 h-8" /></button>
                                {/* facebook */}
                                <button
                                    onClick={() => window.open("https://www.facebook.com/yashpharma/", "_blank")}
                                ><img src={fb} alt="" className="w-8 h-8" /></button>

                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 text-center py-4 text-sm text-black">
                © {new Date().getFullYear()} MediCare Pharmacy. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;