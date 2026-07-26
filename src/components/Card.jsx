import React from "react";

const Card = ({
    id,
    img,
    title,
    description,
    onEdit,
    onDelete
}) => {

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

                <div className="flex gap-3 mt-6">

                    <button
                        onClick={() => onEdit(id)}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => onDelete(id)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );
};

export default Card;