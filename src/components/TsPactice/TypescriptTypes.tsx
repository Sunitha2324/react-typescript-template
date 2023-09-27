import React from 'react'
import Events from './Events'

//need to inform type of the props to the typescript
//Typescript types
type TypescriptTypesProps = {
  //Typescript types
  name: string
  message: string
  noMsg: number
  isloggedin?: boolean
  //Array type []
  fullname: {
    fname: string
    lname: string
  }[]
  //Union of string literal
  status: 'success' | 'error' | 'loading'
}

//Css style type
type StylecontProps = {
  styles: React.CSSProperties
}

//Typescript types
type HeadingProps = {
  children: string
}

//if we passing any componet as a children then need to use the React.ReactNode
type OscarProps = {
  children: React.ReactNode
}

// passing any componnet need to use React.Component
type CompProps = {
  Component: React.ComponentType
}
// export default function TypescriptTypes(props: TypescriptTypesProps) {
export default function TypescriptTypes({
  name,
  message,
  noMsg,
  isloggedin,
  fullname,
  status,
}: TypescriptTypesProps) {
  return (
    // <div>
    //   {isloggedin && name}
    //   Hello {props.name}, the {props.message} and number of message is
    //   {props.noMsg}
    //   <div>
    //     Full name to display:
    //     {props.fullname.map((name) => {
    //       return <p> {name.fname}</p>
    //     })}
    //   </div>
    // </div>
    <div>
      {isloggedin && name}
      Hello {name}, the {message} and number of message is
      {noMsg}
      <div>
        Full name to display:
        {fullname.map((name) => {
          return <p> {name.fname}</p>
        })}
        Staus of the message is: {status}
      </div>
      <Heading> passing Children</Heading>
      <Oscar>
        <Heading> React Node : passing the components as a children</Heading>
      </Oscar>
      <Events handleClick={(e) => console.log('Hello')} />
      <Stylecont styles={{ color: 'red' }} />
    </div>
  )
}

const Heading = ({ children }: HeadingProps) => {
  return <div>{children}</div>
}
const Oscar = ({ children }: OscarProps) => {
  return <>{children}</>
}

// const Greet = (props: TypescriptTypesProps) => {}

const Stylecont = ({ styles }: StylecontProps) => {
  return (
    <div style={styles}>
      Pssing styles as a props through React.CSSProperties
    </div>
  )
}

const Comp = ({ Component }: CompProps) => {
  return <Component />
}
