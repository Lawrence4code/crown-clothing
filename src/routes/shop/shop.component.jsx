import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

import Product from '../../components/product/product.component';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log({ categoriesMap });
  //   return <h2>Shop component</h2>;
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <>
            <h2>{title}</h2>
            <div className="products-container">
              {categoriesMap[title]?.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Shop;
