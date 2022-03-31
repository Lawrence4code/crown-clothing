import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from '../../components/product/product.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import { CategoryContainer, CategoryTitle } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const categoriesMap = useSelector(selectCategoriesMap);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
      </CategoryContainer>
    </>
  );
};

export default Category;
