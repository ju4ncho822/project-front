import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./productGrid.css";

export default function ProductGrid({ products }) {

    const [searchQuery, setSearchQuery] = useState("");

  
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mt-4">

            <div className="busqueda">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
            </div>


            <div className="row">
                {filteredProducts.map((product) => (
                    <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="card">
                            <img
                                src={product.imgUrl}
                                className="card-img-top"
                                alt={product.name}
                            />
                            <div className="card-body">
                                <Link to={`/products/${product._id}`}>
                                    <h5 className="card-title">{product.name}</h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
