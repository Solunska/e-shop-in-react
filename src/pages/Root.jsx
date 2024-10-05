import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "../context/CartContext";
import { FiltersContextProvider } from "../context/FiltersContext";
import { SearchContextProvider } from "../context/SearchContext";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
    return (
        <AuthProvider>
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
        </AuthProvider>
    );
}
