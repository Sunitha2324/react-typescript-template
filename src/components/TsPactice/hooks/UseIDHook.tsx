import React, { useId } from 'react'

const UseIDHook = () => {
  const idone = useId()
  const idtwo = useId()
  const idthrer = useId()
  return (
    <>
      {idone}
      <br />
      {idtwo}
      <br />
      {idthrer}
    </>
  )
}

export default UseIDHook
