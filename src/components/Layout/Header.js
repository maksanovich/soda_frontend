import React, { useEffect, useState } from "react"
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import logo from './../../assets/img/logo-soda.svg';
import { faListUl, faSearch, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from "react-redux";
import Avatar from 'react-avatar';
import { logoutUser } from "../../reduces/userSlice";

export default function Header() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector(state => state.currentUser)

  const [mobileMenuToggle, setMobileMenuToggle] = useState("")

  useEffect(() => {
    console.log(currentUser)
  }, [])

  const logout = () => {
    dispatch(logoutUser())
  }

  return (
    <>
      <header className="bg-white-800 shadow-md">
        <div className="mx-auto py-3 px-4 flex items-center justify-between">
          <NavLink to="/"><img src={logo} className="h-7" /></NavLink>
          <nav className="hidden lg:block bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
            <ul className="flex space-x-12">
              <li><NavLink to="features" className="text-gray-500 hover:text-gray-800 font-medium text-base">Features</NavLink></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 font-medium text-base">Online Tools</a></li>
              <li><NavLink to="pricing" className="text-gray-500 hover:text-gray-800 font-medium text-base">Pricing</NavLink></li>
              <li><NavLink to="support" className="text-gray-500 hover:text-gray-800 font-medium text-base">Support</NavLink></li>
            </ul>
          </nav>
          <div>
            <button className="px-5 text-gray-500 hover:text-gray-800"><FontAwesomeIcon icon={faSearch} /></button>
            {
              currentUser.isLogined ?
                <Avatar className="cursor-pointer" name={currentUser.data.email} size={35} round={true} onClick={logout} /> :
                <>
                  <button className="px-5 text-gray-500 hover:text-gray-800 font-medium text-base" onClick={() => navigate('sign-in')}><FontAwesomeIcon className="px-1" icon={faUserLarge} />Sign in</button>
                </>
            }
            <button className="sm:hidden px-5 text-gray-500 hover:text-gray-800" onClick={() => setMobileMenuToggle(!mobileMenuToggle)}><FontAwesomeIcon icon={faListUl} /></button>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  )
}
