import React, { useEffect, useState } from "react";

const Stats = () => {
    const [counts, setCounts] = useState({
        rating: 0,
        customers: 0,
        products: 0,
        years: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts((prev) => ({
                rating: prev.rating < 98 ? prev.rating + 3 : 98,
                customers: prev.customers < 5000 ? prev.customers + 100 : 5000,
                products: prev.products < 350 ? prev.products + 10 : 350,
                years: prev.years < 15 ? prev.years + 1 : 15,
            }));
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-white py-5 px-5 sm:px-10 lg:px-20 rounded-2xl mt-5">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <div className="text-center mb-5">
                    <h2 className="text-2xl font-bold text-[#0a1a4d]">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-[#0a1a4d]/70 mt-2">
                        Trusted by thousands in our community
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {/* Approval Rating */}
                    <div className="bg-[#b5e9f98d] backdrop-blur-lg p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition duration-300">
                        <h3 className="text-3xl font-bold text-[#0a1a4d]">
                            {counts.rating}%
                        </h3>
                        <p className="text-black/70 mt-2">Approval Rating</p>
                    </div>

                    {/* Happy Customers */}
                    <div className="bg-[#b5e9f98d] backdrop-blur-lg p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition duration-300">
                        <h3 className="text-3xl font-bold text-[#0a1a4d]">
                            {counts.customers}+
                        </h3>
                        <p className="text-black/70 mt-2">Happy Customers</p>
                    </div>

                    {/* Products */}
                    <div className="bg-[#b5e9f98d] backdrop-blur-lg p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition duration-300">
                        <h3 className="text-3xl font-bold text-[#0a1a4d]">
                            {counts.products}+
                        </h3>
                        <p className="text-black/70 mt-2">Medicines Available</p>
                    </div>

                    {/* Years */}
                    <div className="bg-[#b5e9f98d] backdrop-blur-lg p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition duration-300">
                        <h3 className="text-3xl font-bold text-[#0a1a4d]">
                            {counts.years}+
                        </h3>
                        <p className="text-black/70 mt-2">Years of Service</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;