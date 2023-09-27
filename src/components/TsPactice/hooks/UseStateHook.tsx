import { useState, useEffect, useCallback, useRef, useId } from 'react'
import { loginUser } from '../InterfaceValue'
import UseCallBackHook from './UseCallBackHook'
import UseIDHook from './UseIDHook'
import UseLayoutEffectHook from './UseLayoutEffectHook'
import UseMemoHook from './useMemoHook'

// ! Custume Hooks Example
const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title
  }, [title])
}

const UseStateHook = () => {
  const [arr, setArr] = useState<number[]>([])
  const [name, setName] = useState<string | null>(null)
  const [countone, setCountone] = useState<number>(0)
  // Type assertion we use the keyword is as
  const [counttwo, setCounttwo] = useState<loginUser>({} as loginUser)

  const [count, setCount] = useState<number[]>([])
  const [x, setX] = useState<string[] | null>([])

  //! types of declaring the state with value
  // const [value, setValue] = useState(0)
  // const [value, setValue] = useState<string | null>(null)
  // const [value, setValue] = useState<loginUser>({} as loginUser)
  // const [value, setValue] = useState<number | null>(null)
  // const [value, setValue] = useState<loginUser[] | null>([])

  //! useEffect =  useEffect it will have function and depedency array and deals with side effect it doesn't return any value, it will mount demount and re-mount the function so that will see the execution twice

  //?: useffetc  without depedency array syntax
  useEffect(() => {
    console.log('Hi use Effecr')
    // it will not return anything
    return () => {
      'effect function inside return function'
    }
  }, [])

  //?: useffetc with depedency array syntax

  // useEffect(() => {
  //   console.log("Depency array syntax")
  // }, [arrayname])

  //! useCallback used to memorised the function and ensure that it remains the same reference across the  re-render as long as its dependent and don't changed , this is usefull while passing callback  to child componnet to prevent uncessary re-render, it will have fumction and depedency array
  const handleCallback = useCallback(() => {
    setCountone((prev) => prev + 3)
  }, [])

  // useRef hook
  const ref = useRef<HTMLInputElement>(null)
  console.log('use ref', ref?.current?.value)

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('Hook Handler Click')
  }

  // let car = ['maruthi', 'hundai', 'benz', 'jaguare']
  // console.log(' Check the value', 'hundai' in car)

  // let carModel = ['model:20', 'test:400']
  // console.log('Test the mode', 'test' in carModel)

  const car = { make: 'Hyundai', model: 'Elantra', year: 2017 }
  console.log('Test the car', 'model' in car) // true
  console.log('Test the car', 'test' in car) // false

  useDocumentTitle(`You are clicked ${countone}`)

  return (
    <>
      <button onClick={() => setCountone(countone + 1)}>
        CLick the countone {countone}
      </button>
      <button onClick={clickHandler} name="button">
        Hooks Button
      </button>
      <button
        onClick={() => {
          setCountone((prev) => prev + 1)
        }}
      >
        Add count
      </button>
      {/* // use call back hook */}
      <button onClick={handleCallback} name="call">
        Call back hook
      </button>
      <input ref={ref} type="text" placeholder="Add count" />
      {countone}

      <UseCallBackHook />
      <h4>
        <UseIDHook />
      </h4>
      <UseLayoutEffectHook />
      <UseMemoHook />
    </>
  )
}

export default UseStateHook
