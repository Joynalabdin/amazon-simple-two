import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const {img,name,price,stock,seller} = props.product;
    return (
        <div className="product">
            <div>
            <img src={img} alt=""/>
            </div>
            <div>
            <h3 className="product-name">{name}</h3>
            <h5>By:{seller} </h5>
            <h5>${price} </h5>
            <h5> Only {stock} are avilable-Order soom </h5>
            <button className="main-button" onClick={ ()=> props.handleAddProduct (props.product)}>
                Add to cart
                </button>
            </div>          
        </div>
    );
};

export default Product;


