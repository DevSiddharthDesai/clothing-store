import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import './single-category-style.scss';

const SingleCategory = () => {

    const { categoryName } = useParams();

    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState([]);

    // useEffect(() => {

    // },[categoryName, cate])
    
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