import Product from '../product/product.component';

import {
  CategoryPreviewContainer,
  CategoryPreviewStyles,
  CategoryPreviewTitle,
} from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={title}>{title}</CategoryPreviewTitle>
      </h2>
      <CategoryPreviewStyles>
        {products
          .filter((_, index) => {
            return index < 4;
          })
          .map((product) => {
            return <Product key={product.id} product={product} />;
          })}
      </CategoryPreviewStyles>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
