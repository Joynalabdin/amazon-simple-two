import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] =useState([]);

    const handleAddProduct = (product) =>{
        console.log("Added item");
        const newCart=[...cart,product] 
        setCart(newCart); 
    }
    return (
        <div className="shop-continer">
            <div className="product-continer">
            
                {
                    products.map(pd=><Product handleAddProduct={handleAddProduct} product={pd}  >
                         </Product>)
                }
            
            </div>
            <div className="cart-continer">
                <Cart cart={cart}>

                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;