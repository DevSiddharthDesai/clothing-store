import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from '../../components/product-card/product-card';
import './shop.styles.scss';

const Shop = () => {

    const { categoriesMap } = useContext(CategoriesContext);

    return(
      <>
        {
          Object.keys(categoriesMap).map(title => {
            const products = categoriesMap[title];
            return <>
            <Link to={title}><h2 className="single-category-title">{title}</h2></Link>
            <div className="products-container">
              {
                products
                  .filter((_, idx) => idx < 4)
                  .map((product) => <ProductCard product={product} />)
              }
            </div>
            </>
          })
        }
      </>
    )
}

export default Shop;