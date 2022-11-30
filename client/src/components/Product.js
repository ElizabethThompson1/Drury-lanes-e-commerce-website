import React from "react";
import {Link} from "react-router-dom";
import {BsPlus, BsEyeFill} from "react-icons/bs";
import "./product.css"



const Product = ({product}) => {
    const {id,image,price,title,category} = product;
    console.log(product);
    
    return(
        <div className="">
            <div className="border">
                <div className="button-container" >
                    <button className="button">
                        <BsPlus/>
                    </button>  
                    <Link to={`/product/${id}`}>
                        <BsEyeFill  className="eye"/>
                    </Link>
                </div> 
                    {/*image*/}
                <div className="clothes">
                    <img className="image" src={image} alt="clothing"/>
                </div>
            </div>  
            <div className="category">{category}</div>
            <Link style={{textDecoration: 'none'}} to={`/product/${id}`}>
                <h2 className="product-title">{title}</h2>
            </Link>
            <div className="price">${price}</div>
        </div> 
    );
};

export default Product;