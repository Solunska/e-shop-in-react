import ProductsCollection from "../components/Products/Products";
import { FiltersContextProvider } from "../context/FiltersContext";

export default function ProductsPage() {
    return <>
        <FiltersContextProvider>
            <ProductsCollection />
        </FiltersContextProvider>
    </>
}