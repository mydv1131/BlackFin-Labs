// import { FaCertificate, FaRecycle, FaShieldAlt } from "react-icons/fa";
// import whybg from "../assets/about2.jpg";

// export default function WhyChoose() {
//     return (
//         <section
//             className="relative text-white py-28 px-10 overflow-hidden bg-cover bg-center"
//             style={{ backgroundImage: `url(${whybg})` }}
//         >

//             {/* Dark Overlay for readability */}
//             <div className="absolute inset-0 bg-black/60"></div>

//             <h2 className="relative text-5xl text-center mb-20 font-light tracking-wide">
//                 Why BlackFin Lab
//             </h2>

//             <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

//                 <div className="border border-white/40 p-12 text-center rounded-sm backdrop-blur-sm hover:bg-white/10 transition">
//                     <FaCertificate className="text-5xl mx-auto mb-6 text-white/80" />
//                     <h3 className="text-2xl mb-6 font-medium">Authenticity</h3>
//                     <p className="text-white/80 leading-relaxed">
//                         We use only premium grade ingredients.
//                     </p>
//                 </div>

//                 <div className="border border-white/40 p-12 text-center rounded-sm backdrop-blur-sm hover:bg-white/10 transition">
//                     <FaRecycle className="text-5xl mx-auto mb-6 text-white/80" />
//                     <h3 className="text-2xl mb-6 font-medium">Purity</h3>
//                     <p className="text-white/80 leading-relaxed">
//                         Clinically tested and safe formulations.
//                     </p>
//                 </div>

//                 <div className="border border-white/40 p-12 text-center rounded-sm backdrop-blur-sm hover:bg-white/10 transition">
//                     <FaShieldAlt className="text-5xl mx-auto mb-6 text-white/80" />
//                     <h3 className="text-2xl mb-6 font-medium">Quality</h3>
//                     <p className="text-white/80 leading-relaxed">
//                         International manufacturing standards.
//                     </p>
//                 </div>

//             </div>
//         </section>
//     );
// }
import { FaCertificate, FaRecycle, FaShieldAlt } from "react-icons/fa";
import whybg from "../../assets/about.jpg";

export default function WhyChoose() {
    return (
        <section
            className="relative py-28 px-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${whybg})` }}
        >
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-[#626558]/70 backdrop-blur-sm"></div>

            <div className="relative max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl text-center mb-16 font-semibold text-white tracking-wide">
                    Why Choose Black Finlabs ?
                </h2>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white/20 border border-white/30 p-10 text-center rounded-2xl backdrop-blur-xl hover:bg-white/30 transition duration-300 shadow-lg">
                        <FaCertificate className="text-4xl mx-auto mb-5 text-white" />
                        <h3 className="text-xl mb-4 font-semibold text-white">
                            Authentic Medicines
                        </h3>
                        <p className="text-white/80 leading-relaxed text-sm">
                            We provide genuine, government-approved, and clinically verified medicines sourced exclusively from trusted and reputed manufacturers. Every product we offer undergoes strict quality verification to ensure authenticity, reliability, and complete peace of mind for our customers. Your health deserves nothing less than certified excellence.
                        </p>
                    </div>

                    <div className="bg-white/20 border border-white/30 p-10 text-center rounded-2xl backdrop-blur-xl hover:bg-white/30 transition duration-300 shadow-lg">
                        <FaRecycle className="text-4xl mx-auto mb-5 text-white" />
                        <h3 className="text-xl mb-4 font-semibold text-white">
                            Safe & Tested
                        </h3>
                        <p className="text-white/80 leading-relaxed text-sm">
                            All medicines and healthcare products are stored, handled, and dispensed in compliance with regulated pharmaceutical standards and temperature-controlled environments. Our commitment to safety ensures that every product maintains its potency, effectiveness, and integrity from storage to delivery.
                        </p>
                    </div>

                    <div className="bg-white/20 border border-white/30 p-10 text-center rounded-2xl backdrop-blur-xl hover:bg-white/30 transition duration-300 shadow-lg">
                        <FaShieldAlt className="text-4xl mx-auto mb-5 text-white" />
                        <h3 className="text-xl mb-4 font-semibold text-white">
                            Trusted Care
                        </h3>
                        <p className="text-white/80 leading-relaxed text-sm">
                            Beyond dispensing medicines, we offer professional guidance, personalized consultation, and compassionate healthcare support. Our experienced team is dedicated to helping you make informed decisions, ensuring the well-being of you and your family with care you can truly rely on.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}