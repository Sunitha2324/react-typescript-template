import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Bookmark() {
  return (
    <div>
      <ol className="container">
        <li>
          <NavLink to="/home"> Home</NavLink>
        </li>
        <li>
          <NavLink to="/navbar"> Nav bar</NavLink>
        </li>
        <li>
          <NavLink to="/usestatehook"> UseState Hook</NavLink>
        </li>
        <li>
          <NavLink to="/typescript-types"> Typescript types</NavLink>
        </li>
        <li>
          <NavLink to="/usecallbackhook"> Usecallback hook</NavLink>
        </li>
        <li>
          <NavLink to="/usereducer"> Use Reducer Hook</NavLink>
        </li>
        <li>
          <NavLink to="/useref"> Use ref</NavLink>
        </li>{' '}
        <li>
          <NavLink to="/mutableref"> Mutable Ref</NavLink>
        </li>
        <li>
          <NavLink to="/restreticnever"> Restretic Never</NavLink>
        </li>{' '}
        <li>
          <NavLink to="/literalexclude"> Literal exclude</NavLink>
        </li>
        <li>
          <NavLink to="/omitfetaure"> Omit fetaure</NavLink>
        </li>{' '}
        <li>
          <NavLink to="/aspolymorphic"> As polymorphic</NavLink>
        </li>
        <li>
          <NavLink to="/home"> Home</NavLink>
        </li>{' '}
        <li>
          <NavLink to="/home"> Home</NavLink>
        </li>
        <li>
          <NavLink to="/home"> Home</NavLink>
        </li>
        <li></li>
      </ol>
    </div>
  )
}
export const BookmarkLink = () => {
  return (
    <>
      <Bookmark />
      <Outlet />
    </>
  )
}
