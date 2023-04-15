import { Link, NavLink } from 'react-router-dom'

import DressetLogo from '../../assets/dresset_logo.png'

import './header.css'

const Header = () => {
    return (
        <header className='mainHeader'>
            <nav className='mainNavigation' aria-label='main-navigation'>
                <nav className='leftMainNav'>
                    <input type='checkbox' id='dummyCheckbox' />
                    <label htmlFor='dummyCheckbox' className='hamburger'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <aside className='secondaryNav'>
                        <nav className='sideBarNav' aria-label='sidebar-navigation'>
                            <ul>
                                <li className='profileImgCont'>
                                    <img src='src/assets/profileIconNav.png' alt='' />
                                </li>
                                <li>
                                    <Link to='#'>Login/Sign up</Link>
                                </li>
                                <li>
                                    <Link to='about'>About us</Link>
                                </li>
                                <li>
                                    <Link to='services'>Services</Link>
                                </li>
                                <li>
                                    <Link to='location'>Location</Link>
                                </li>
                                <li>
                                    <Link to='#'>Help & Support</Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <div className='mainIconCont'>
                        <a href='#'>
                            <img src={DressetLogo} alt='Dresset Logo Icon ' />
                        </a>
                    </div>
                </nav>
                <nav className='rightMainNav'>
                    <ul>
                        <li>
                            <NavLink
                                to='/location'
                                className={({ isActive }) => (isActive ? 'active' : '')}>
                                Location
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'active' : '')}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                className={({ isActive }) => (isActive ? 'active' : '')}>
                                About us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/services'
                                className={({ isActive }) => (isActive ? 'active' : '')}>
                                Services
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink to='/login'>
                        <button className='loginBtn'>Login/Sign up</button>
                    </NavLink>
                </nav>
            </nav>
        </header>
    )
}

export default Header
