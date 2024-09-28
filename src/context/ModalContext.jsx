import { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isFiltersModalOpen, setIsFiltersModalOpen, isAuthModalOpen, setIsAuthModalOpen, isMenuModalOpen, setIsMenuModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
}