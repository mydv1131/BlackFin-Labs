import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// SKIN PRODUCTS
import Skin1 from "../../assets/Products/FINFIN.jpeg";
import Skin2 from "../../assets/Products/FINIF_SOAP.jpeg";

import Ortho1 from "../../assets/Products/OSYN_GEL.jpeg";
import Ortho2 from "../../assets/Products/OSYN_GOLD.jpeg";
import Ortho3 from "../../assets/Products/OSYN_SPRAY.jpeg";
import Ortho4 from "../../assets/Products/OSYN_HD.png";

import cough1 from "../../assets/Products/BIL_GOLD.jpeg";
import cough2 from "../../assets/Products/BIL_SYRUP.jpeg";

const products = [
    {
        id: 1,
        name: "OSYNFLEX GEL",
        image: Ortho1,
        tagline: [
            "Relieves muscle and joint pain",
            "Fast absorption formula",
        ],
        ingredients: [
            "Pregabalin 8% w/w",
            "Diclofenac 5%",
            "Methyl Salicylate",
            "Menthol 5%",
            "Capsaicin 0.035%",
        ],
        description: "Provides fast relief from joint and muscle pain.",
    },
    {
        id: 2,
        name: "OSYNFLEX HD",
        image: Ortho2,
        tagline: ["High density bone support formula"],
        ingredients: [
            "Calcium Citrate Maleate 1250mg",
            "L-methylfolate 0.5mg",
            "Vitamin B12 1500mcg",
            "Vitamin D3",
        ],
        description: "Relieves muscle stiffness and supports bone strength.",
    },
    {
        id: 3,
        name: "OSYNFLEX SPRAY",
        image: Ortho3,
        tagline: ["Quick spray for instant pain relief"],
        ingredients: [
            "Diclofenac Diethylamine",
            "Menthol",
            "Methyl Salicylate",
            "Camphor",
        ],
        description: "Improves mobility and reduces joint discomfort.",
    },
    {
        id: 4,
        name: "OSYNFLEX GOLD",
        image: Ortho4,
        tagline: ["Advanced formula for stronger relief"],
        ingredients: [
            "Diclofenac Diethylamine",
            "Menthol",
            "Methyl Salicylate",
            "Camphor",
        ],
        description: "Quick-action spray for pain relief.",
    },
    {
        id: 5,
        name: "FINFIN CREAM",
        image: Skin1,
        tagline: ["Deep hydration and skin nourishment"],
        ingredients: ["Aloe Extract", "Vitamin E", "Natural Oils"],
        description: "Enhances glow and maintains skin softness.",
    },
    {
        id: 6,
        name: "FINIFIN SOAP",
        image: Skin2,
        tagline: ["Controls oil and prevents acne"],
        ingredients: ["Neem Extract", "Turmeric", "Herbal Base"],
        description: "Gentle cleansing for healthy skin.",
    },
    {
        id: 7,
        name: "Bil DUO",
        image: cough1,
        tagline: [
            "Broad spectrum antibiotic",
            "Stable to beta lactamase",
            "Excellent tolerance & safety",
        ],
        ingredients: ["Cefixime 200mg", "Ornidazole 500mg"],
        description: "Effective treatment for bacterial infections.",
    },
    {
        id: 8,
        name: "Bil Syrup",
        image: cough2,
        tagline: ["Supports cough and cold relief"],
        ingredients: ["Bilirubin", "Calcium", "Magnesium", "Vitamin C"],
        description: "Soothes throat and strengthens immunity.",
    },
];

const AllProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showEnquiryForm, setShowEnquiryForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
    });

    useEffect(() => {
        document.body.style.overflow =
            selectedProduct || showEnquiryForm ? "hidden" : "auto";
    }, [selectedProduct, showEnquiryForm]);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const sendEnquiry = () => {
        if (!formData.name || !formData.email || !formData.mobile) {
            alert("Please fill all fields");
            return;
        }

        emailjs
            .send(
                "service_mxgbhm7",
                "template_pix3lir",
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    user_mobile: formData.mobile,
                    product_name: selectedProduct.name,
                },
                "_tQgPP9oSaY6VUxGb"
            )
            .then(() => {
                alert("Enquiry sent successfully!");
                setShowEnquiryForm(false);
                setSelectedProduct(null);
                setFormData({ name: "", email: "", mobile: "" });
            })
            .catch(() => {
                alert("Failed to send enquiry. Try again later.");
            });
    };

    return (
        <div className="h-screen  px-4 md:px-16 py-28">
            <div className="text-center mb-14">
                <h1 className="text-3xl md:text-5xl font-bold text-[#0a1a4d]">
                    Our Products
                </h1>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
                    >
                        <div className="h-44 md:h-56 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="p-4">
                            <h2 className="font-semibold text-[#0a1a4d] text-sm md:text-base">
                                {product.name}
                            </h2>

                            <ul className="text-xs text-gray-600 mt-2 space-y-1">
                                {product.tagline.map((line, i) => (
                                    <li key={i}>• {line}</li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setSelectedProduct(product)}
                                className="mt-4 w-full bg-[#0a1a4d] text-white py-2 rounded-xl hover:bg-[#142c7a] transition"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Product Detail Modal */}
            {selectedProduct && !showEnquiryForm && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                    onClick={() => setSelectedProduct(null)}
                >
                    <div
                        className="bg-white rounded-3xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-3 right-4 text-xl"
                        >
                            ✕
                        </button>

                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            className="w-full h-56 object-cover rounded-xl mb-4"
                        />

                        <h2 className="text-2xl font-bold text-[#0a1a4d] mb-2">
                            {selectedProduct.name}
                        </h2>

                        <p className="text-gray-700 mb-4">
                            {selectedProduct.description}
                        </p>

                        <div className="mb-4">
                            <h3 className="font-semibold text-[#0a1a4d] mb-2">
                                Ingredients:
                            </h3>
                            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                {selectedProduct.ingredients.map((ing, i) => (
                                    <li key={i}>{ing}</li>
                                ))}
                            </ul>
                        </div>

                        {/* <button
                            onClick={() => setShowEnquiryForm(true)}
                            className="w-full bg-[#0a1a4d] text-white py-3 rounded-xl hover:bg-[#142c7a] transition"
                        >
                            Enquire Now
                        </button> */}
                    </div>
                </div>
            )}

            {/* Enquiry Modal */}
            {showEnquiryForm && selectedProduct && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-3xl p-8 w-full max-w-md relative">
                        <button
                            onClick={() => setShowEnquiryForm(false)}
                            className="absolute top-3 right-4 text-xl"
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-bold mb-6 text-center text-[#0a1a4d]">
                            Enquiry for {selectedProduct.name}
                        </h2>

                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a1a4d]"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a1a4d]"
                            />

                            <input
                                type="tel"
                                name="mobile"
                                placeholder="Mobile Number"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a1a4d]"
                            />

                            <button
                                onClick={sendEnquiry}
                                className="w-full bg-[#0a1a4d] text-white py-3 rounded-xl hover:bg-[#142c7a] transition"
                            >
                                Submit Enquiry
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllProducts;