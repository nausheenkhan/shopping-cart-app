import React from 'react'
import useProducts from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'


export default function Home() {
const { products, loading, error } = useProducts();


if (loading) return <p className="p-6">Loading products...</p>
if (error) return <p className="p-6 text-red-500">{error}</p>


return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
            <ProductCard key={p.id} product={p} />
        ))}
    </div>
)
}