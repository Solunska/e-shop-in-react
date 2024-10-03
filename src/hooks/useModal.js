import { useCallback, useEffect, useState } from "react";

export function useModal() {
    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
    const [isAlertOpen, setIsAlertModalOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1200) {
                setIsMenuModalOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        if (isAuthModalOpen || isMenuModalOpen || isFiltersModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsMenuModalOpen, isMenuModalOpen, isAuthModalOpen, isFiltersModalOpen]);

    const toggleAlert = useCallback(() => {
        setIsAlertModalOpen(!isAlertOpen);
    }, [isAlertOpen]);

    useEffect(() => {
        if (isAlertOpen) {
            const timeout = setTimeout(() => {
                toggleAlert();
            }, 3000)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [isAlertOpen, toggleAlert])

    function toggleMenu() {
        setIsMenuModalOpen((prev) => !prev);
    }

    function toggleFilters() {
        setIsFiltersModalOpen(!isFiltersModalOpen);
    }

    function toggleAuth() { setIsAuthModalOpen(!isAuthModalOpen); }

    return {
        isFiltersModalOpen,
        isAuthModalOpen,
        isMenuModalOpen,
        isAlertOpen,
        toggleMenu,
        toggleFilters,
        toggleAuth,
        toggleAlert,
    }
}