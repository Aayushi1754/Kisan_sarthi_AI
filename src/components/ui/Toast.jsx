import React from 'react'

const Toast=({
    message,
    type="success",
    show
})=>{
    if(!show) return null
    const styles={
    success:
"bg-green-500 text-white",

error:
"bg-red-500 text-white"

}
  return (
    <div className={`fixed bottom-15 px-3 py-5 z-50 rounded-lg right-5 ${styles[type]}`}> {message}

    </div>
  )
}
export default Toast
