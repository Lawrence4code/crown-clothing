import { CATEGORIES_TYPE } from './category.types';

const CATEGORIES_INITIAL_STATE = {
  categoriesMap: [],
};

export const CategoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_TYPE.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
