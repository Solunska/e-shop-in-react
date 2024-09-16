import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import { NavbarProvider } from "../context/NavBarContext";

export default function RootLayout() {
    return (
        <NavbarProvider>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </NavbarProvider>
    );
}
