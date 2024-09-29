import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import profile from '../assets/profile.png';
import shoppingBag from '../assets/shopping-cart.png';
import NavButton from '../UI/NavigationButton';
import styles from './MainNavigation.module.css';
import Modal from '../UI/Modal';
import Login from './Auth/Login';
import Button from '../UI/Button';
import CloseButton from '../UI/CloseButton';
import { useModal } from '../hooks/useModal';

export default function MainNavigation() {
    const { isAuthModalOpen, isMenuModalOpen, toggleMenu, toggleAuth } = useModal();
    const navigate = useNavigate();

    return (
        <nav className={styles.nav}>
            <ul className={styles.ulClass}>
                <li className={styles['logo-container']}>
                    <NavLink to="/">
                        <img className={styles.logo} src={logo} alt='Logo' />
                    </NavLink>
                </li>
                <li className={styles['icon-button-container']}>
                    <button className={styles.burgerMenu} onClick={() => toggleMenu()}>
                        ☰
                    </button>
                    {isMenuModalOpen ?
                        <Modal open={isMenuModalOpen} onClose={() => toggleMenu()} modalStyles={styles.modal}>
                            <div className={styles.openMenu}>
                                <CloseButton onHandleClick={() => toggleMenu()} />
                                <p onClick={() => {
                                    navigate('/products')
                                    toggleMenu();
                                }}>All Products</p>
                                <p onClick={() => {
                                    navigate('/products')
                                    toggleMenu();
                                }}>Men</p>
                                <p onClick={() => {
                                    navigate('/products')
                                    toggleMenu();
                                }}>Women</p>
                                <p onClick={() => {
                                    navigate('/products')
                                    toggleMenu();
                                }}>Kids</p>
                                <p>Favorites</p>
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
                        onHandleClick={() => toggleAuth()}
                    />
                </li>
                <li className={styles['search-bar-container']}>
                    <div className={styles['search-bar']}>
                        <img src={search} alt='search icon' />
                        <input className={styles.input} type='text' placeholder='Search...' />
                    </div>
                </li>
            </ul>
            {isAuthModalOpen ? <Modal open={isAuthModalOpen} onClose={toggleAuth} modalStyles={styles.modal}>
                <CloseButton onHandleClick={() => toggleAuth()} />
                <Login />
            </Modal> : null}

        </nav>

    );
}
