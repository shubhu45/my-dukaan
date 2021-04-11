import React from 'react'
import ProductCard from './ProductCard';
import './ProductList.scss'

export default function ProductList(props){
    const category = props.category;
    
    return(
        <div key={category.id} className="product-list-container">
            <h3 className="category-title">{category.name} <span className="product-count">{category.product_count}</span></h3>
            {
                category && category.products && category.products.length > 0 && category.products.map((product,id) => {
                    return <ProductCard 
                            id={product.id}
                            product={product}/>
                })
            }
        </div>
    )
}