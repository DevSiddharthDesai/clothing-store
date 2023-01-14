import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const setCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    const categoriesMap = categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    },{})
    return categoriesMap;
  }
)

// export const setCategoriesMap = (state) => {
//     const categoriesMap = state.categories.categories.reduce(
//       (acc, { title, items }) => {
//         acc[title.toLowerCase()] = items;
//         return acc;
//       },
//       {}
//     );
//     return categoriesMap;
// };