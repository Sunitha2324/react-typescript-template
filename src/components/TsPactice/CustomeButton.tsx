import React from "react";

type CustomeButtonProps={
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>
const CustomeButton =({variant, children, ...rest}:CustomeButtonProps)=>(
    <button className={`class-name-${variant}`} {...rest}> {children}</button>
)
export default CustomeButton;

// Button with Omit props

type CustomeButtonOmit = {
    variant: 'primary' | 'secondary',
    children:string
} & Omit<React.ComponentProps<'button'>, 'children'>




// Button with Omit props