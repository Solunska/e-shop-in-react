import { useParams } from "react-router-dom";

export default function Product(){
    const { productId } = useParams();
    return <h1>Product Details for {productId}</h1>
}