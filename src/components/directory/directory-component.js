import CategoryItem from "../category-item/category-item-component";
import './directory.style.scss';

const Directory = ({categories}) => {

    return(
        <div className="categories-container">
            {categories.map((category) => {
            return(
                <CategoryItem category = {category}/>
            )
            })} 
        </div>
    )
}

export default Directory;