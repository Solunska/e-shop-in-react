import { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase"; // Ensure this is your correct Firebase config
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    console.log("Current user:", currentUser); // Log current user state

    useEffect(() => {
        console.log('Initializing auth state...');

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("onAuthStateChanged fired, user:", user); // Log every time onAuthStateChanged is fired
            if (user) {
                setCurrentUser(user);
                setUserLoggedIn(true);
                console.log("User logged in");
            } else {
                setCurrentUser(null);
                setUserLoggedIn(false);
                console.log("No user logged in");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const value = {
        currentUser,
        userLoggedIn,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
