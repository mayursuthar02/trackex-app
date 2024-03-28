import { useState } from 'react'
import { BiSun } from 'react-icons/bi'
import { CiMenuKebab } from 'react-icons/ci'
import { RxDashboard } from 'react-icons/rx'


const Header = ({title, setToggleMenu, toggleMenu}) => {


  const toggleMenuFun = () => {
      if (toggleMenu == "") {
          setToggleMenu("active")
      }
  }
  return (
    <header>
        <h2 className="title">
        {title}
        </h2>
        <div className="icon__btn">
        <CiMenuKebab className='icon' onClick={toggleMenuFun}/>
        </div>
    </header>
  )
}

export default Header
