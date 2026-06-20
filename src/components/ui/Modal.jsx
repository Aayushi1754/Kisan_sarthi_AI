import React, {useEffect} from "react"


/**
 * Props:
 * isOpen: show or hide modal
 * onClose: close function
 * title: modal heading
 * children: modal content
 */


const Modal = ({
    isOpen,
    onClose,
    title,
    children
}) => {


useEffect(()=>{

const handleKey = (e)=>{

if(e.key==="Escape"){
    onClose()
}

}


document.addEventListener(
"keydown",
handleKey
)


return ()=> 
document.removeEventListener(
"keydown",
handleKey
)


},[onClose])


if(!isOpen) return null



return (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center">


<div className="bg-white p-6 rounded-lg w-96">


<h2 className="text-xl font-bold">
{title}
</h2>


<div>
{children}
</div>


<button
className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
onClick={onClose}
>
Close
</button>


</div>


</div>

)


}


export default Modal