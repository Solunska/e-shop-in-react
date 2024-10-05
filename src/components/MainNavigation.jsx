import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import searchImg from '../assets/search.png';
import profile from '../assets/profile.png';
import shoppingBag from '../assets/shopping-cart.png';
import NavButton from '../UI/NavigationButton';
import styles from './MainNavigation.module.css';
import Modal from '../UI/Modal';
import Login from './Auth/Login';
import Button from '../UI/Button';
import CloseButton from '../UI/CloseButton';
import { useModal } from '../hooks/useModal';
import { useFilter } from '../hooks/useFilter';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/SearchContext';

export default function MainNavigation() {
    const { isAuthModalOpen, isMenuModalOpen, toggleMenu, toggleAuth } = useModal();
    const { handleFilterKids, handleFilterMens, handleFilterWomen } = useFilter();
    const navigate = useNavigate();
    const [ query, setQuery ] = useState('');
    const { search, setSearch } = useContext(SearchContext);
    console.log(search)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSearch(query);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [query, setSearch]);

    function handleOnChange(event) {
        setQuery(event.target.value);
    }

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
                                    navigate('/products');
                                    toggleMenu();
                                }}>All Products</p>
                                <p onClick={() => {
                                    handleFilterMens();
                                    navigate('/products/mens');
                                    toggleMenu();
                                }}>Men</p>
                                <p onClick={() => {
                                    handleFilterWomen();
                                    navigate('/products/womens');
                                    toggleMenu();
                                }}>Women</p>
                                <p onClick={() => {
                                    navigate('/products/kids');
                                    handleFilterKids();
                                    toggleMenu();
                                }}>Kids</p>
                                <p>Favorites</p>
                            </div>
                        </Modal>
                        : null}
                    <Button
                        variant="link"
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
                    <div className={location.pathname === '/products' ? styles['search-bar'] : `${styles['search-bar']} ${styles.hidden}`}>
                        <img src={searchImg} alt='search icon' />
                        <input className={styles.input} type='text' placeholder='Search...' onChange={handleOnChange} />
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
