import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error al cargar el producto:", error));
    }, [id]);


    if (!product) {
        return <p>Producto no encontrado.</p>;
    }

    return (
        <div className="product-detail-container">

            <div className="product-image">
                <img src={product.imgUrl} alt={product.name} />
            </div>


            <div className="product-details">
                <h2>{product.name}</h2>


                <div className="product-price-link">
                    <h3>Precio Amazon</h3>
                    <p>{product.amazonPrice}</p>
                    <a
                        href={product.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-link"
                    >
                        Comprar en Amazon
                    </a>
                </div>
                <div className="product-price-link">
                    <h3>Precio CompuGamer</h3>
                    <p>{product.compuGamerPrice}</p>
                    <a
                        href={product.compuGamerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-link"
                    >
                        Comprar en CompuGamer
                    </a>
                </div>
            </div>

            <div className="product-description">
                <h3>Descripción</h3>
                {product.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
}
