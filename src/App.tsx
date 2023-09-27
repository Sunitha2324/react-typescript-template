import { FC } from 'react'
import Navbar from './components/navbar/Navbar'
// import './App.css'
import UseStateHook from './components/TsPactice/hooks/UseStateHook'
import Home from './components'
import TypescriptTypes from './components/TsPactice/TypescriptTypes'
import UseCallBackHook from './components/TsPactice/hooks/UseCallBackHook'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import { BookmarkLink } from './components/Bookmark'
import Bookmark from './components/Bookmark'
import UseRefHook, { MutableRef } from './components/TsPactice/hooks/UseRefHook'
import { RestristComp } from './components/TsPactice/Restriction-never'
import LiteralExclude from './components/TsPactice/Literal-exclude'
import OmitComponet from './components/TsPactice/OmitFeature'
import AsPolymorphic from './components/AsPolymorphic'

const name = [
  { fname: 'hioj', lname: 'ukll' },
  { fname: 'ggg', lname: 'uukikll' },
  { fname: 'higtyoj', lname: 'juio' },
]
import UseReducerHook from './components/TsPactice/hooks/UseReducerHook'
const App: FC = () => {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <BookmarkLink />,
      children: [
        { path: '/home', element: <Home /> },
        { path: '/navbar', element: <Navbar /> },
        { path: '/usestatehook', element: <UseStateHook /> },
        {
          path: '/typescript-types',
          element: (
            <TypescriptTypes
              name="John"
              message="Mesage from Grtch"
              noMsg={10}
              fullname={name}
              status="success"
            />
          ),
        },
        {
          path: '/usecallbackhook',
          element: <UseCallBackHook />,
        },
        {
          path: '/',
          element: <BookmarkLink />,
        },
        { path: '/usereducer', element: <UseReducerHook /> },
        {
          path: '/useref',
          element: <UseRefHook />,
        },
        {
          path: '/mutableref',
          element: <MutableRef />,
        },
        { path: '/restreticnever', element: <RestristComp /> },
        {
          path: '/literalexclude',
          element: <LiteralExclude position="center" />,
        },
        { path: '/omitfetaure', element: <OmitComponet /> },

        { path: '/aspolymorphic', element: <AsPolymorphic /> },
      ],
    },
  ])
  return (
    <div id="App">
      {/* <Navbar />
      <button onClick={() => console.log('Hello!')}>Hello</button>
      <UseStateHook />
      <Home /> */}
      <RouterProvider router={route} />
    </div>
  )
}

export default App
