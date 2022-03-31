import { createAction } from '../../utils/reducer/reducer.util';
import { CATEGORIES_TYPE } from './category.types';

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_TYPE.SET_CATEGORIES, categoriesArray);
