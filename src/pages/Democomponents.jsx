import React, {useState} from "react"
import { 
Button,
Input,
Loader,
Toast,
Modal
} from "../components/ui/temp"
const Democomponents = () => {

const [open,setOpen] = useState(false)

return (
<div className="p-8 space-y-6">

<h1 className="text-3xl font-bold">
UI Component Library
</h1>

<div className="flex gap-4">
<Button
variant="primary"
size="md"
>
Primary Button
</Button>


<Button
variant="secondary"
size="lg"
>
Secondary Button
</Button>

</div>
<Input
label="Email"
placeholder="Enter email"
/>


<Loader />


<Toast
show={true}
message="Success Message"
type="success"
/>


<Button
onClick={()=>setOpen(true)}
>
Open Modal
</Button>


<Modal
isOpen={open}
onClose={()=>setOpen(false)}
title="AI Assistant"
>

<p>
This is modal content
</p>

</Modal>


</div>
)

}
export default Democomponents