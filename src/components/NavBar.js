//CSS
//import styles from './NavBar.module.css'
import styles from './NavBar.module.css'

import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
            Mini <span>blog</span>
        </NavLink>
        <ul className={styles.link_list}>
            <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => (isActive ? styles.active : "")} 
                > 
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>
                    Sobre
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar