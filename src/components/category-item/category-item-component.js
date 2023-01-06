import {CategoryContainer, BackgroundImage, CategoryBodyContainer, H2, P} from './category-item';

const CategoryItem = ({category}) => {
    
    const {title, id, imageUrl} = category;
    
    return(
    <CategoryContainer key={id}>
        <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}}></BackgroundImage>
        <CategoryBodyContainer>
            <H2>{title}</H2>
            <P>Shop Now</P>
        </CategoryBodyContainer>
    </CategoryContainer>
    )
}

export default CategoryItem;