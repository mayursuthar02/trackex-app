import { Link } from "react-router-dom";
import { CgArrowRight } from 'react-icons/cg'
import { SiMoneygram } from 'react-icons/si'



const NavMenu = ({toggleMenu, setToggleMenu}) => {

    const toggleMenuFun = () => {
        if (toggleMenu == "active") {
            setToggleMenu("")
        }
    }
  return (
    <>
      <nav className={`nav__menuBar ${toggleMenu}`}>

        <div className="nav__header">
            <h2 className="logo__title"><SiMoneygram/>TrackEx</h2>
            <CgArrowRight className="icon" onClick={toggleMenuFun}/>
        </div>

        <ul className="menu__links">
            <Link to={'/'} className="menu__link">
              <img src="/src/assets/Icon/apps.png" alt="" className="icon"/>
              Dashboard
            </Link>

            <Link to={'/all-income'} className="menu__link">
              <img src="/src/assets/Icon/arrow-small-up.png" alt="" className="icon"/>
              All Income
            </Link>

            <Link to={'/all-expense'} className="menu__link">
              <img src="/src/assets/Icon/arrow-small-down.png" alt="" className="icon"/>
              All Expense
            </Link>
        </ul>
      </nav>

      <div className={`overlay ${toggleMenu}`} onClick={toggleMenuFun}></div>
    </>
  );
};

export default NavMenu;
