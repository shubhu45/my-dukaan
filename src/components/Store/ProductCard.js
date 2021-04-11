import React, { useState } from 'react'
import './ProductCard.scss'
import Config from '../../config/config.json'
import { Button, ButtonGroup } from '@material-ui/core';
import VariantsModal from './Modal/VariantsModal';

export default function ProductCard(props){
    let product = props.product;
    let OfferPercentage = (product.selling_price/product.original_price) * 100;
    product.OfferPercentage = OfferPercentage < 100 ? parseInt(OfferPercentage): ""; 
    let vegIcon = Config.productCard.vegIcon;
    let nonVegIcon = Config.productCard.nonVegIcon;
    let variants = product.variants;
    let add_ons = product.add_ons;
    
    const [itemCount, setItemCount] = useState(0);
    const [showVariantsModal, setShowVariantsModal] = useState(false)
    
    let handleIncrement = () => {
        setItemCount(itemCount + 1)
    }

    let handleDecrement = () => {
        if(itemCount > 0){
            setItemCount(itemCount - 1)
        }
    }

    let checkVariants = () => {
        if(product && product.variants && Array.isArray(product.variants) && product.variants.length){
            setShowVariantsModal(true)
        }else{
            setItemCount(itemCount + 1)
        }
    }

    let handleCloseVariantsModal = () => {
        setShowVariantsModal(false)
    }

    return(<div className="product-card-container">
        <div> 
            <span className="product-img-wrap">
                <img className="product-img" src={product.image} alt={product.name}></img>
                <div className="discount-badge-wrap">
                    {product && product.OfferPercentage && <span className="product-discount-badge">{product.OfferPercentage}% OFF</span>}
                </div>
            </span>
        </div>
        <div className="product-name-container">
                <div className="top-container">
                    <img src={product.productType === "veg" ? vegIcon:nonVegIcon} alt={"product-type"}></img>
                    <h3 className="product-name">{product.name}</h3>
                </div>
                <div className="bottom-container">
                    <div style={{display: 'flex'}}>
                        <h3 className="product-cost"><span>&#8377;</span>{product.selling_price}</h3>
                        {product.selling_price !== product.original_price && 
                            <h3 className="product-cost line-through mg-10"><span>&#8377;</span>{product.original_price}</h3>
                        }
                    </div>  
                    <div>
                        {itemCount> 0 ? <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button onClick={(e)=> handleDecrement()}>-</Button>
                            <Button onClick={(e) => console.log("Update the count")}>{itemCount}</Button>
                            <Button onClick={(e) => handleIncrement()}>+</Button>
                        </ButtonGroup> : <Button variant="contained" color="primary" onClick={()=> checkVariants()}>Add +</Button>}
                    </div>
                </div>
        </div>
        <VariantsModal
            showModal={showVariantsModal}
            handleCloseModal={handleCloseVariantsModal}
            variants={variants}
            add_ons={add_ons}
        />
    </div>)
}