import { async } from 'regenerator-runtime';
import { API_URL, PAGINATION_NUM } from './config';
import { getJSON } from './helper';
export const state = {
  recipe: {},
  search: {
    results: [],
    perPage: PAGINATION_NUM,
    page: 1,
  },
  bookMarkAdd: [],
};
export const loadRecipe = async function (id) {
  try {
    const jSON = await getJSON(API_URL + id);
    console.log(jSON);
    const obj = jSON.data.recipe;
    console.log(obj);
    state.recipe = {
      id: obj.id,
      name: obj.title,
      time: obj.cooking_time,
      image: obj.image_url,
      publisher: obj.publisher,
      servings: obj.servings,
      url: obj.source_url,
      ingredients: obj.ingredients,
    };
    if (state.bookMarkAdd.some(val => val.id === state.recipe.id)) {
      state.recipe.bookmarked = true;
    }
  } catch (err) {
    throw err;
  }
};
export const loadSearchResult = async function (inputValue) {
  const data = await getJSON(API_URL + '?search=' + inputValue);
  state.search.results = data.data.recipes.map(recipe => {
    return {
      id: recipe.id,
      img: recipe.image_url,
      publisher: recipe.publisher,
      title: recipe.title,
    };
  });
};
export const paginationResult = async function (page = state.search.page) {
  state.search.page = page;
  const startIn = (page - 1) * state.search.perPage;
  const lastIn = page * state.search.perPage;
  return state.search.results.slice(startIn, lastIn);
};
export const servingRecipe = async function (
  peopleNumber = state.recipe.servings
) {
  state.recipe.ingredients.map(val => {
    val.quantity = (val.quantity * peopleNumber) / state.recipe.servings;
  });
  state.recipe.servings = peopleNumber;
};
const saveLocalStorage = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookMarkAdd));
};
export const getLocalSto = function () {
  const arr = JSON.parse(localStorage.getItem('bookmarks'));
  if (!arr) return;
  state.bookMarkAdd = arr;
  return arr;
};
export const bookMarkAdd = function (recipe) {
  state.bookMarkAdd.push(recipe);
  console.log(state.bookMarkAdd);
  state.recipe.bookmarked = true;
  saveLocalStorage();
};

export const deleteBookMark = function (id) {
  const index = state.bookMarkAdd.findIndex(val => val.id === id);
  state.bookMarkAdd.splice(index, 1);
  state.recipe.bookmarked = false;
  saveLocalStorage();
};
