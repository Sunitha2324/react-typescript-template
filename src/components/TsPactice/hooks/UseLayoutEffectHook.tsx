import React, { useLayoutEffect, useEffect } from 'react'
const UseLayoutEffectHook = () => {
  //use efffect
  //The component has been re-rendered
  useEffect(() => {
    console.log('useLayoutEffect')
  }, [])

  //! Always runs before Use-Effect
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, [])
  return <> Layout Component</>
}

export default UseLayoutEffectHook
