import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

import Product from "../../components/product/product.component";

import './shop.styles.scss';


const Shop = () => {
    const products = useContext(ProductsContext);

    return (
    <div className="products-container">
        {products?.map((product) => {
            return (<Product key={product.id} product={product} />)
        })}
    </div>
    )
}

export default Shop;