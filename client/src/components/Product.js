import React from "react";
import {Link} from "react-router-dom";
import {BsPlus, BsEyeFill} from "react-icons/bs";
import "./product.css"



const Product = ({product}) => {
    const {id,image,price,title,category} = product;
    console.log(product);
    
    return(
        <div>
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
        </div> 
    );
};

export default Product;