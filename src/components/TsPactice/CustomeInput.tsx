import React from "react"


type CustomeInputProps = React.ComponentProps<'input'>

const CustomeInput =(props:CustomeInputProps, {...rest})=>(
    <input  {...rest}/>
)
export default CustomeInput
