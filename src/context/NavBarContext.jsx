import { createContext, useState } from 'react';

export const NavbarContext = createContext();

export function NavbarProvider({ children }) {
    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

    return (
        <NavbarContext.Provider value={{ isFiltersModalOpen, setIsFiltersModalOpen, isAuthModalOpen, setIsAuthModalOpen, isMenuModalOpen, setIsMenuModalOpen }}>
            {children}
        </NavbarContext.Provider>
    );
}