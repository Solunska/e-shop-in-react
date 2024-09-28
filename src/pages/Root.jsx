import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import { ModalProvider } from "../context/ModalContext";
import { CartContextProvider } from "../context/CartContext";

export default function RootLayout() {
    return (
        <CartContextProvider>
            <ModalProvider>
                <MainNavigation />
                <main>
                    <Outlet />
                </main>
            </ModalProvider>
        </CartContextProvider>
    );
}
