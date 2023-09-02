import React, { useRef } from 'react'

const UseRefHook = () => {
  const ref = useRef(null)
  const handleRef = () => {
    console.log(ref.current?.value)
  }
  return (
    <>
      <input ref={ref} placeholder="placeholder...." />
      <button onClick={handleRef}>Ref</button>
    </>
  )
}

export default UseRefHook
