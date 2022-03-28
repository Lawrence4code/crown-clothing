import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/product/product.component';
import { CategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();

  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  console.log({ category });
  return (
    <div className="category-container">
      {products &&
        products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </div>
  );
};

export default Category;
