import './category-item.scss';

const CategoryItem = ({category}) => {
    
    const {title, id, imageUrl} = category;
    
    return(
    <div className="category-container" key={id}>
        {/* <img> */}
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
        </div>
    </div>
    )
}

export default CategoryItem;