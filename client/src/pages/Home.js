import { useContext } from "react";
import React from "react";
import {ProductContext} from "../contexts/ProductContext"
import "./Home.css";
import Product from "../components/Product"




const Home = () => {
    const {products} = useContext(ProductContext);


    const filteredProducts = products.filter((item) => {
        return(
          item.category === "men's clothing" || item.category ==="women's clothing"  
        ); 
    });

    return (
       <div>
        <section className="py-16">
            <div className="container">
                <div className="grid">
                    {filteredProducts.map((product) => {
                        return(
                            <Product className="grid" product={product} key={product.id}/>
                        );
                    })}
                </div>
            </div>
        </section>
       </div> 
    );
};

export default Home;