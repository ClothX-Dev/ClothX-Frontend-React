import './header.css'

const Header = () => {

    return (
        <header className='mainHeader'>
            <nav className='mainNavigation' aria-label='main-navigation'>
                <div className='leftMainNav'>
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
                                    <a href='#'>Login/Sign up</a>
                                </li>
                                <li>
                                    <a href='#'>About us</a>
                                </li>
                                <li>
                                    <a href='#'>Services</a>
                                </li>
                                <li>
                                    <a href='#'>Location</a>
                                </li>
                                <li>
                                    <a href='#'>Help & Support</a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <div className='mainIconCont'>
                        <a href='#'>
                            <img src='src/assets/clothXPrimaryLogo-1.png' alt='' />
                            <img src='src/assets/clothXPrimaryLogo-2.png' alt='React Icon' />
                        </a>
                    </div>
                </div>
                <div className='rightMainNav'>
                    <ul>
                        <li>
                            <a href='#'>Location</a>
                        </li>
                        <li className='active'>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About us</a>
                        </li>
                        <li>
                            <a href='#'>Services</a>
                        </li>
                    </ul>
                    <a href='#'>
                        <button className='loginBtn'>Login/Sign up</button>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header
