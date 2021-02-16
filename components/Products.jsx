import React,{useContext} from 'react';
import  { StoreContext } from '../context/StoreContext';
import   ProductList from './ProductList';

const Product =() =>{
     const [products,setProducts] = useContext(StoreContext);
    return(
        <div>
            {/* <h3>{products.name}</h3> */}
            {
                products.map(product=>{
                    return(
                        // console.log(product)
                        <li>{product.name}</li>
                    )
                })
            }
        </div>
    )
}

export default Product;
