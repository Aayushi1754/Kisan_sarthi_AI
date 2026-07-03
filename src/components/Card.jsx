import React from "react";

const Card = ({ img, title, description }) => {

    return (

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">

            <img
                src={img}
                alt={title}
                className="w-full h-56 object-cover"
            />

            <div className="p-5">

                <h2 className="text-2xl font-bold dark:text-white">
                    {title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mt-3">
                    {description}
                </p>

                <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition">
                    Explore Now →
                </button>

            </div>

        </div>

    );
};

export default Card;