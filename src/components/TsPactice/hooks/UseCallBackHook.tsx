import React, { useCallback } from 'react'

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
