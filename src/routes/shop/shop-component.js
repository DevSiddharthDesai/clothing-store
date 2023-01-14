import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from '../../components/product-card/product-card';
import './shop.styles.scss';
import {setCategoriesMap} from '../../store/categories/categories.selector';

const Shop = () => {

  const categoriesMap = useSelector(setCategoriesMap);

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