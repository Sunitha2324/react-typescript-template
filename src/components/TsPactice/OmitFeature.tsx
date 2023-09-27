import React from 'react'

type CustomeButtonProps = {
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export function CustomeButton({ children }: CustomeButtonProps) {
  return <div>{children}</div>
}

const OmitComponet = () => {
  return <CustomeButton> Hello </CustomeButton>
}
export default OmitComponet
