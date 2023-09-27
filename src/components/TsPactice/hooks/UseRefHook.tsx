import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
  const ref = useRef<HTMLInputElement>(null)
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

export const MutableRef = () => {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef<number | null>(null)
  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current)
  }
  const interval = () => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    return () => {
      stopTimer()
    }
  }
  useEffect(interval, [])
  return (
    <div>
      Hook Timer {timer}-
      <br />
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  )
}
