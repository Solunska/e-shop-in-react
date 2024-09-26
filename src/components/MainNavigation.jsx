import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import profile from '../assets/profile.png';
import shoppingBag from '../assets/shopping-cart.png';
import NavButton from '../UI/NavigationButton';
import styles from './MainNavigation.module.css';
import { useContext, useEffect, useState } from 'react';
import Modal from '../UI/Modal';
import { NavbarContext } from '../context/NavBarContext';
import Login from './Auth/Login';

export default function MainNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isModalOpen, setIsModalOpen } = useContext(NavbarContext);


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1200) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className={styles.nav}>
            <ul className={styles.ulClass}>
                <li className={styles['logo-container']}>
                    <NavLink to="/">
                        <img className={styles.logo} src={logo} alt='Logo' />
                    </NavLink>
                </li>
                <li className={styles['icon-button-container']}>
                    <button className={styles.burgerMenu} onClick={toggleMenu}>
                        ☰
                    </button>
                    {isMenuOpen ?
                        <div className={styles.openMenu}>
                            <p onClick={() => {
                                navigate('/products')
                                toggleMenu();
                            }}>Products</p>
                            <p onClick={() => {
                                navigate('/shopping-cart')
                                toggleMenu();
                            }}>Shopping cart</p>
                            <p>Favorites</p>
                            <p onClick={() => {
                                setIsModalOpen(true)
                                toggleMenu();
                            }}>Profile</p>
                        </div>
                        : null}
                    <span onClick={() => { navigate('/products') }}>All products</span>
                    <NavButton
                        styles={styles['icon-button']}
                        image={shoppingBag}
                        alt='shopping bag logo'
                        imgStyles={styles['icon-image']}
                        onHandleClick={() => { navigate('/shopping-cart') }}
                    />
                    <NavButton
                        styles={styles['icon-button']}
                        image={profile}
                        alt='profile logo'
                        imgStyles={styles['icon-image']}
                        onHandleClick={() => { setIsModalOpen(true) }}
                    />
                </li>
                <li className={styles['search-bar-container']}>
                    <div className={styles['search-bar']}>
                        <img src={search} alt='search icon' />
                        <input className={styles.input} type='text' placeholder='Search...' />
                    </div>
                </li>
            </ul>
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} modalStyles={styles.modal}>
                <Login />
            </Modal>
        </nav>

    );
}
