import React from "react";
import {Link} from "react-router-dom";
import {BsPlus, BsEyeFill} from "react-icons/bs";
import "./product.css"



const Product = ({product}) => {
    const {id,image,price,title,category} = product;
    
    return(
       <div className="border">
            <div className="" >
                {/*image*/}
                <div className="clothes">
                    <img className="image" src={image} alt="clothing"/>
                </div>
                {}
                <div></div>
            </div>
       </div> 
    );
};

export default Product;