import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import AiImg from '../../assets/AiImg.png'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false)
    }, [location.pathname])

    const menuClose = ()=>{
        setMenuOpen(false)
    }

    return (
        <div className={styles.main}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link to='/'><img src={Logo} alt="logo.png" /></Link>
                </div>
                <div className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
                    <div className={styles.ai}>
                        <Link to="/aiPlanner" className={styles.aiText}>
                            <img src={AiImg} alt="AI" />
                        </Link>
                        <Link to='/aiPlanner' onClick={menuClose}>AI Travel Planner</Link>
                    </div>
                    <Link to='/explore' onClick={menuClose}>Explore</Link>
                    <Link to='/blog' onClick={menuClose}>Blog</Link>
                    <Link to='/faq' onClick={menuClose}>FAQ</Link>
                    <Link to='/groupTrip' onClick={menuClose}>Group Trip</Link>
                </div>
                <div className={styles.hamburger} onClick={()=> setMenuOpen(!menuOpen)}>
                    ☰
                </div>
            </nav>
        </div>

    )
}

export default Navbar
