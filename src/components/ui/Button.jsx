import React from 'react'
  const Button=({
    children, // this is component inside prop like Save/ login
    variant="primary", // default is primary and is colour of button
    size="md", //size of button 
    disabled=false, // clickable or not , right now false=working  button 
    onClick 
  }) =>
  {
    const styles={
      primary:"bg-green-500 text-white", secondary:"bg-gray-500 text-white", 
      outline:"border border-green-500" 
    }
    const sizes=
    { 
      sm:"px-2 py-1",
       md:"px-4 py-2", 
       lg:"px-6 py-3" 

    }
    return ( 
    <button disabled={disabled} 
    onClick={onClick} 
    className={'${styles[variant]} ${sizes[size]} rounded'} > {children} </button> 
  ) 
  }
     export default Button
