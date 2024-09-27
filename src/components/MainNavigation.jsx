import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import profile from '../assets/profile.png';
import shoppingBag from '../assets/shopping-cart.png';
import NavButton from '../UI/NavigationButton';
import styles from './MainNavigation.module.css';
import { useContext, useEffect } from 'react';
import Modal from '../UI/Modal';
import { NavbarContext } from '../context/NavBarContext';
import Login from './Auth/Login';
import Button from '../UI/Button';
import CloseButton from '../UI/CloseButton';

export default function MainNavigation() {
    const { isModalOpen, setIsModalOpen, isMenuModalOpen, setIsMenuModalOpen } = useContext(NavbarContext);

    const toggleMenu = () => setIsMenuModalOpen(!isMenuModalOpen);

    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1200) {
                setIsMenuModalOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        if (isModalOpen || isMenuModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsMenuModalOpen, isMenuModalOpen, isModalOpen]);

    return (
        <nav className={styles.nav}>
            <ul className={styles.ulClass}>
                <li className={styles['logo-container']}>
                    <NavLink to="/">
                        <img className={styles.logo} src={logo} alt='Logo' />
                    </NavLink>
                </li>
                <li className={styles['icon-button-container']}>
                    <button className={styles.burgerMenu} onClick={() => { setIsMenuModalOpen(true) }}>
                        ☰
                    </button>
                    {isMenuModalOpen ?
                        <Modal open={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} modalStyles={styles.modal}>
                            <div className={styles.openMenu}>
                                <CloseButton onHandleClick={() => setIsMenuModalOpen(false)} />
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
                        </Modal>
                        : null}
                    <Button
                        variant="secondary"
                        size="small"
                        onHandleClick={() => { navigate('/products') }}>All products</Button>
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
