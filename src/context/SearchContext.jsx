import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchContextProvider({ children }) {
    const [search, setSearch] = useState('');

    const searchContext = {
        search,
        setSearch
    }

    return <SearchContext.Provider value={searchContext}>{children}</SearchContext.Provider>
}