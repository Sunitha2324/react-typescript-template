import React from 'react'

// Generic funtion
//? It is able to create components that can work with a variety of data types rather than a single data type. Also, it provides type safety without compromising the performance, or productivity

type GenericProps<T> = {
  items: T[]
  clickHandler: (value: T) => void
}
const Generic = <T extends {}>({ items, clickHandler }: GenericProps<T>) => {
  return <div>{items.map((list) => list)}</div>
}
export default Generic

const GenericConsume = () => {
  const item = ['x', 'g', 't', 'y', 'u']
  return <Generic items={item} clickHandler={() => console.log('hello')} />
}

function identity<T>(arg: T): T {
  return arg
}
let output1 = identity<string>('edureka')
let output2 = identity<number>(117)
console.log(output1)
console.log(output2)

function A<T>(arg: T): T {
  return arg
}
