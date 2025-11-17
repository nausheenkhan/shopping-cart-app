import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, increaseQty, decreaseQty, clearCart } from "../redux/cartSlice";

export default function Cart() {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Your Cart</h2>

            {items.map((i) => (
                <div key={i.id} className="flex gap-4 items-center my-3">
                    <img src={i.image} className="w-16" />
                    <h3 className="w-40">{i.title}</h3>

                    <div className="flex gap-2">
                        <button onClick={() => dispatch(decreaseQty(i.id))}>-</button>
                        <span>{i.qty}</span>
                        <button onClick={() => dispatch(increaseQty(i.id))}>+</button>
                    </div>

                    <span>₹{i.price * i.qty}</span>
                    <button onClick={() => dispatch(removeItem(i.id))}>❌</button>
                </div>
            ))}

            <h3 className="text-xl font-bold mt-4">Total: ₹{total.toFixed(2)}</h3>
            <button className="bg-red-600 text-white px-3 py-1 mt-2 rounded" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
    );
}