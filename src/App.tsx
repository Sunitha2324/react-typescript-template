import { FC } from 'react'
import Navbar from './components/navbar/Navbar'
// import './App.css'
import UseStateHook from './components/TsPactice/hooks/UseStateHook'
import Home from './components'

const App: FC = () => {
  return (
    <div id="App">
      <Navbar />
      <button onClick={() => console.log('Hello!')}>Hello</button>
      <UseStateHook />
      <Home />
    </div>
  )
}

export default App
