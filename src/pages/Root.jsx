import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "../context/CartContext";
import { FiltersContextProvider } from "../context/FiltersContext";

export default function RootLayout() {
    return (
        <FiltersContextProvider>
            <CartContextProvider>
                <MainNavigation />
                <main>
                    <Outlet />
                </main>
            </CartContextProvider>
        </FiltersContextProvider>
    );
}
