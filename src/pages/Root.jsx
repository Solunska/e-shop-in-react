import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import { NavbarProvider } from "../context/NavBarContext";
import { CartContextProvider } from "../context/CartContext";

export default function RootLayout() {
    return (
        <CartContextProvider>
            <NavbarProvider>
                <MainNavigation />
                <main>
                    <Outlet />
                </main>
            </NavbarProvider>
        </CartContextProvider>
    );
}
