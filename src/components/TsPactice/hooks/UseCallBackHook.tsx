import React, { useCallback } from 'react'

//! useCallback used to memorised the function and ensure that it remains the same reference across the  re-render as long as its dependent and don't changed , this is usefull while passing callback  to child componnet to prevent uncessary re-render, it will have fumction and depedency array
const UseCallBackHook = () => {
  const handleClick = useCallback(() => {
    console.log('call back hook called')
  }, [])
  return (
    <div>
      <button onClick={handleClick}>Use call Back hook button</button>
    </div>
  )
}

export default UseCallBackHook
