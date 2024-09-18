import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import categories from '../assets/categories.png';
import profile from '../assets/profile.png';
import shoppingBag from '../assets/shopping-cart.png';
import NavButton from '../UI/NavigationButton';
import styles from './MainNavigation.module.css';
import { NavbarContext } from '../context/NavBarContext';

export default function MainNavigation() {
    const { toggleCategories, hideCategories } = useContext(NavbarContext);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                hideCategories();
            }
        };
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [hideCategories]);

    return (
        <nav className={styles.nav}>
            <ul className={styles.ulClass}>
                <li className={styles['logo-container']}>
                    <NavLink to="/">
                        <img className={styles.logo} src={logo} alt='Logo' />
                    </NavLink>
                </li>
                <li className={styles['icon-button-container']}>
                    <div>
                        <NavButton
                            styles={styles['icon-button']}
                            image={categories}
                            alt='categories logo'
                            imgStyles={styles['icon-image']}
                            onHandleClick={toggleCategories}
                        />
                        <NavButton
                            styles={styles['icon-button']}
                            image={shoppingBag}
                            alt='shopping bag logo'
                            imgStyles={styles['icon-image']}
                        />
                        <NavButton
                            styles={styles['icon-button']}
                            image={profile}
                            alt='profile logo'
                            imgStyles={styles['icon-image']}
                        />
                    </div>
                </li>
                <li className={styles['search-bar-container']}>
                    <div className={styles['search-bar']}>
                        <i className="fas fa-search search-icon"></i>
                        <input className={styles.input} type='text' placeholder='Search...' />
                    </div>
                </li>
            </ul>
        </nav>
    );
}
