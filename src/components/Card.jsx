import React from 'react'

export const Card = (props) => {
  return (
    <div className="border rounded-xl shadow-lg p-4 dark:bg-gray-800 dark:text-white">

      <img
        className="w-80 h-48 object-cover rounded-lg"
        src={props.img}
        alt={props.title}
      />

      <h2 className="text-xl font-bold mt-3">
        {props.title}
      </h2>

      <p className="text-gray-600 mt-2">
        {props.description}
      </p>

    </div>
  )
}

export default Card