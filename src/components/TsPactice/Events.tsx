import React from 'react'

type EventsProps = {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
    name: string
  ) => void
}

type InputEventProps = {
  clickEvent: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}
export default function Events({ handleClick }: EventsProps) {
  return (
    <div>
      <button
        onClick={(event) => handleClick(event, 10, 'Button name is Handler')}
      >
        Clcik
      </button>
    </div>
  )
}

export function InputEvent({ clickEvent, value }: InputEventProps) {
  return (
    // const handleEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
    //   console.log("Click")
    // }

    <input value={value} onChange={(event) => clickEvent(event)} />
  )
}
