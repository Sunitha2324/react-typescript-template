import React, { FC, createContext, useState } from 'react'
import { User } from './InterfaceValue'
import { ColorType } from './EnumValue'
const Context = createContext<User | null>(null)

const CreateContextComponent: FC = () => {
  const [count, setCount] = useState(0)

  const interValue: User = {
    name: 'ddd',
    age: 12,
  }

  console.log(interValue)
  return (
    <Context.Provider value={interValue}>
      <div>
        Hello
        <br />
        <button
          type="button"
          onClick={() => {
            setCount(count + 1)
          }}
        >
          {' '}
          Click
        </button>
        {count}
        <b>{ColorType.red}</b>
      </div>
    </Context.Provider>
  )
}
export default CreateContextComponent
