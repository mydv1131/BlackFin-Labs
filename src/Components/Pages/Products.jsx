import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

import Skin from "../../assets/Category/skincare02.png";
import Ortho from "../../assets/Category/ortho01.svg";
import Health from "../../assets/Category/Cough.png";

import skin1 from "../../assets/Products/FINFIN.jpeg";
import skin2 from "../../assets/Products/FINIF_SOAP.jpeg";

import ortho1 from "../../assets/Products/OSYN_GEL.jpeg";
import ortho2 from "../../assets/Products/OSYN_GOLD.jpeg";
import ortho3 from "../../assets/Products/OSYN_SPRAY.jpeg";
import ortho4 from "../../assets/Products/OYSN_HD.jpeg";

import cough1 from "../../assets/Products/BIL_GOLD.jpeg";
import cough2 from "../../assets/Products/BIL_SYRUP.jpeg";


const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showEnquiryForm, setShowEnquiryForm] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
    });

    const categories = [
        { id: 1, name: "Skin Care", image: Skin },
        { id: 2, name: "Ortho", image: Ortho },
        { id: 3, name: "Cough & Fever", image: Health },
    ];

    const medicines = {
        "Skin Care": [
            {
                id: 1,
                name: "Finifi Mupirocin Topical 2% w/w Ointment",
                image: skin1,
                tagline:
                    ["Exhibits excellent activity against major skin pathogens,",
                        "Specifically noted as being better than bacitracin for treating impetigo.",
                        "Effective against methicillin-resistant Staphylococcus aureus (MRSA) strains."
                        ,],
                ingredients: [
                    "Ketoconazole 2% w/w",
                    "Neomycin Sulphate 0.5% w/w",
                    "Nystatin 100000 I.U./gm",
                    "Triamcinolone Acetonide 0.1% w/w",
                ],
            },
            {
                id: 2,
                name: "Finif Soap",
                image: skin2,
                tagline:
                    ["Finfin Cream is a topical medication used to treat fungal infections of the skin.",
                        "Kojic acid Used as a primary skin-lightening agent.",
                        "Glycolic acid Exfoliates dead skin cells for a brighter look.",
                        "Titanium dioxide Used to make the soap appear more 'appealing and pleasing.'",
                        "Perfume Adds fragrance to the soap.",],
                ingredients: [
                    "Glycerine",
                    "Kojic acid",
                    "Glycolic acid",
                    "Titanium dioxide",
                    "Soap Noodels",
                    "Perfume",
                ],
            },
        ],
        Ortho: [
            {
                id: 3,
                name: "Osyn Gel",
                image: ortho1,
                tagline: ["Osyn Gel helps treat muscle and joint pain.", "Osyn Gel helps treat muscle and joint pain."],
                ingredients: [
                    "Pregablin 8% w/w",
                    "Diclofenac 5%",
                    "Methyl Salicylate",
                    "Menthol 5%",
                    "Capsaicin 0.035%",
                ],
            },
            {
                id: 4,
                name: "Osyn Gold",
                image: ortho2,
                tagline: ["Advanced relief formula for joint pain.", "Advanced relief formula for joint pain."],
                ingredients: ["Diclofenac", "Capsaicin", "Menthol"],
            },
            {
                id: 5,
                name: "Osyn Spray",
                image: ortho3,
                tagline: ["Quick spray relief for muscle pain.", "Quick spray relief for muscle pain."],
                ingredients: ["Diclofenac", "Menthol"],
            },
            {
                id: 6,
                name: "Osyn HD",
                image: ortho4,
                tagline: ["High density formula to reduce falls and fractures.", "High density formula to reduce falls and fractures."],
                ingredients: ["Calcium Citrate Maleate 1250mg", "L-methylfolate 0.5mg", "Vitamin B12 1500mg", "Vitamin D3"],
            },
        ],
        "Cough & Fever": [
            {
                id: 7,
                name: "Bil DUO",
                image: cough1,
                tagline: ["A broad spectrun cephalosporin antibiotic", "Stable to beta lactamase degradation", "Ensures better safety & excellent tolerance.",
                    "Provides an effecttive for the treatment of typoid fever in children even in case of multidrug-resistant s.typhi.",],
                ingredients: ["Cefixime 200mg", "Ornidazole 500mg"],
            },
            {
                id: 8,
                name: "Bil Syrup",
                image: cough2,
                tagline: ["Bil Syrup helps treat cough and cold.", "Bil Syrup helps treat cough and cold."],
                ingredients: ["Bilirubin", "Calcium", "Magnesium", "Vitamin C"],
            },
        ],
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEnquiry = () => {
        if (!formData.name || !formData.email || !formData.mobile) {
            alert("Please fill all fields");
            return;
        }

        const templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            user_mobile: formData.mobile,
            medicine_name: selectedProduct?.name,
        };

        emailjs
            .send(
                "service_mxgbhm7",
                "template_pix3lir",
                templateParams,
                "_tQgPP9oSaY6VUxGb"
            )
            .then(() => {
                alert("Enquiry sent successfully!");
                setShowEnquiryForm(false);
                setSelectedProduct(null);
                setFormData({ name: "", email: "", mobile: "" });
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Failed to send enquiry. Please try again later.");
            });
    };

    return (
        <section className="w-full bg-white rounded-t-3xl mt-16 py-10 px-5 lg:px-16">

            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl text-[#0a1a4d]">
                    𝓔𝔁𝓹𝓵𝓸𝓻𝓮 𝓞𝓾𝓻 𝓒𝓵𝓲𝓷𝓲𝓬𝓪𝓵 𝓒𝓸𝓵𝓵𝓮𝓬𝓽𝓲𝓸𝓷
                </h2>
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-md md:text-xl text-[#0a1a4d]/80"
                >
                    Science-backed solutions designed to repair and restore your skin.
                </motion.h3>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {categories.map((item) => (
                    <div key={item.id} className="bg-[#b5e9f98d] rounded-3xl shadow-xl overflow-hidden">
                        <img src={item.image} alt={item.name} className="h-56 w-full object-cover" />
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-[#0a1a4d]">{item.name}</h3>
                            <button
                                onClick={() => setSelectedCategory(item.name)}
                                className="mt-4 px-4 py-2 bg-[#0a1a4d] text-white rounded-xl"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Category Modal */}
            {selectedCategory && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-3xl p-6 max-w-5xl w-full max-h-[85vh] flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold">
                                {selectedCategory} Products
                            </h3>
                            <button onClick={() => setSelectedCategory(null)}>×</button>
                        </div>

                        <div className="overflow-y-auto">
                            <div className="grid md:grid-cols-3 gap-4">
                                {medicines[selectedCategory]?.map((med) => (
                                    <div key={med.id} className="border rounded-2xl overflow-hidden">
                                        <img src={med.image} alt={med.name} className="h-40 w-full object-cover" />
                                        <div className="p-4 text-center text-[#0a1a4d]">
                                            <h4>{med.name}</h4>

                                            <div className="flex gap-2 mt-3">
                                                <button
                                                    onClick={() => setSelectedProduct(med)}
                                                    className="w-1/2 bg-[#0a1a4d] text-white py-2 rounded-lg text-sm"
                                                >
                                                    View Details
                                                </button>

                                                {/* <button
                                                    onClick={() => {
                                                        setSelectedProduct(med);
                                                        setShowEnquiryForm(true);
                                                    }}
                                                    className="w-1/2 bg-[#0a1a4d] text-white py-2 rounded-lg text-sm"
                                                >
                                                    Enquiry
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Product Details Modal */}
            {selectedProduct && !showEnquiryForm && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[55] px-4">
                    <div className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto relative">
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-2 right-3 text-2xl"
                        >
                            ×
                        </button>

                        <div className="grid md:grid-cols-2 gap-6">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="w-full h-60 object-cover rounded-2xl shadow-xl shadow-gray-400"
                            />

                            <div>
                                <h2 className="text-2xl font-bold mb-3 text-[#0a1a4d]">
                                    {selectedProduct.name}
                                </h2>

                                <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
                                    {selectedProduct.tagline?.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>

                                <h4 className="font-semibold mb-2 text-[#0a1a4d]">Ingredients:</h4>
                                <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
                                    {selectedProduct.ingredients?.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>

                                {/* <button
                                    onClick={() => setShowEnquiryForm(true)}
                                    className="w-full bg-[#0a1a4d] text-white py-3 rounded-xl"
                                >
                                    Enquiry Now
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Enquiry Modal */}
            {showEnquiryForm && selectedProduct && (
                <div className="fixed inset-0 bg-[#0a1a4d]/40 backdrop-blur-sm flex items-center justify-center z-[60] px-4">
                    <div className="bg-white rounded-3xl p-8 w-full max-w-md relative">
                        <button
                            onClick={() => setShowEnquiryForm(false)}
                            className="absolute top-4 right-6 text-2xl"
                        >
                            ×
                        </button>

                        <h2 className="text-2xl font-bold mb-4 text-center text-[#0a1a4d]">
                            Enquiry for {selectedProduct.name}
                        </h2>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mb-3 p-3 border rounded-lg text-[#0a1a4d] border-[#0a1a4d] placeholder-[#0a1a4d]"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mb-3 p-3 border rounded-lg border-[#0a1a4d] placeholder-[#0a1a4d]"
                        />

                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full mb-4 p-3 border rounded-lg border-[#0a1a4d] placeholder-[#0a1a4d]"
                        />

                        <button
                            onClick={sendEnquiry}
                            className="w-full bg-[#0a1a4d] text-white py-3 rounded-xl"
                        >
                            Submit Enquiry
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Products;