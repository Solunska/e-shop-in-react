import { createContext, useState } from 'react';

export const NavbarContext = createContext();

export function NavbarProvider({ children }) {
    const [showCategories, setShowCategories] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleCategories = () => {
        setShowCategories(prevState => !prevState);
    };

    const hideCategories = () => {
        setShowCategories(false);
    };

    return (
        <NavbarContext.Provider value={{ showCategories, toggleCategories, hideCategories, isModalOpen, setIsModalOpen }}>
            {children}
        </NavbarContext.Provider>
    );
}