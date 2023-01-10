import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { CategoriesContext } from "../../context/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import './single-category-style.scss';
import {setCategoriesMap} from '../../store/categories/categories.selector';

const SingleCategory = () => {

    const { categoryName } = useParams();

    const categoriesMap = useSelector(setCategoriesMap);
    
    return(
        <>
        <h1 className="singlecategorytitle">{categoryName.toUpperCase()}</h1>
        <div className="products-container">
            {categoriesMap[categoryName].map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
      </>
    )
}

export default SingleCategory;