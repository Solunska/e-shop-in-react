import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "../context/CartContext";

export default function RootLayout() {
    return (
        <CartContextProvider>
                <MainNavigation />
                <main>
                    <Outlet />
                </main>
        </CartContextProvider>
    );
}
