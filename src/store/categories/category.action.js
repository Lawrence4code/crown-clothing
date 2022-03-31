import { createAction } from '../../utils/reducer/reducer.util';
import { CATEGORIES_TYPE } from './category.types';

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_TYPE.SET_CATEGORIES_MAP, categoriesMap);