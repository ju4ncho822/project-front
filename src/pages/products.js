import React, { useEffect, useState } from "react";
import ProductGrid from "../components/productGrid";
import { useParams } from "react-router-dom";

export default function Products() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        fetch(`http://localhost:3000/products/category/${category}`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error al cargar los productos:", error));
    }, [category]);

    return (
        <div>
            <ProductGrid products={products} />
        </div>
    );
}
