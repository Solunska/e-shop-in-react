import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "../context/CartContext";
import { FiltersContextProvider } from "../context/FiltersContext";
import { SearchContextProvider } from "../context/SearchContext";

export default function RootLayout() {
    return (
        <SearchContextProvider>
            <FiltersContextProvider>
                <CartContextProvider>
                    <MainNavigation />
                    <main>
                        <Outlet />
                    </main>
                </CartContextProvider>
            </FiltersContextProvider>
        </SearchContextProvider>
    );
}
