import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import './single-category-style.scss';
import {setCategoriesMap} from '../../store/categories/categories.selector';
import { useEffect, useState } from "react";

const SingleCategory = () => {

    const { categoryName } = useParams();
    const categoriesMap = useSelector(setCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[categoryName]);

    useEffect(() => {
        setProducts(categoriesMap[categoryName]);
    },[categoryName, categoriesMap])
    
    return(
        <>
        <h1 className="singlecategorytitle">{categoryName.toUpperCase()}</h1>
        <div className="products-container">
            {products.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
      </>
    )
}

export default SingleCategory;