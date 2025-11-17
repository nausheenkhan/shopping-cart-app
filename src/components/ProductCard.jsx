import React from 'react'
import { addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div className="p-4 shadow rounded">
            <img src={product.image} className="h-40 mx-auto" />
            <h3 className="font-bold">{product.title}</h3>
            <p>₹{product.price}</p>

            <button
                className="bg-blue-600 text-white px-3 py-1 mt-2 rounded"
                onClick={() => dispatch(addItem(product))}
            >
                Add to Cart
            </button>
        </div>
    );
}