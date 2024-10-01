import { useEffect, useState } from "react";

export function useModal() {
    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
    const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1200) {
                setIsMenuModalOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        if (isAuthModalOpen || isMenuModalOpen || isFiltersModalOpen, isAlertModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsMenuModalOpen, isMenuModalOpen, isAuthModalOpen, isFiltersModalOpen, isAlertModalOpen]);


    function toggleMenu() {
        setIsMenuModalOpen((prev) => !prev);
    }

    function toggleFilters() {
        setIsFiltersModalOpen(!isFiltersModalOpen);
    }

    function toggleAuth() { setIsAuthModalOpen(!isAuthModalOpen); }

    function toggleAlert() { setIsAlertModalOpen(!isAlertModalOpen); }

    return {
        isFiltersModalOpen,
        isAuthModalOpen,
        isMenuModalOpen,
        isAlertModalOpen,
        toggleMenu,
        toggleFilters,
        toggleAuth,
        toggleAlert,
    }
}