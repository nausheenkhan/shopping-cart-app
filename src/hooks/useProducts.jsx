import { useState, useEffect } from "react";

export default function useProducts() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;
        const fetchProducts = async() => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                if (mounted) {
                    setProducts(data);
                }
            } catch(err) {
                if (mounted) {
                    setError('Failed to fetch products');
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }
        
        fetchProducts();

        return() => { mounted =  false };
    }, []);

    return { loading, products, error };
}