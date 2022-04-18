import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsview from './views/resultsview.js';
import paginationView from './views/paginationView.js';
import bookmarkView from './views/bookmarkView.js';
const resultsController = async function () {
  try {
    const inputValue = searchView.getValue();
    resultsview.spinner();
    await model.loadSearchResult(inputValue);
    paginationController();
    // resultsview.render(model.state.search);
  } catch (err) {}
};
const paginationController = async function (page = model.state.search.page) {
  const data = await model.paginationResult(page);
  resultsview.render(data);
  paginationView.render(model.state.search);
};
const servingControl = function (servingNum) {
  model.servingRecipe(servingNum);
  recipeView.render(model.state.recipe);
};

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    recipeView.spinner();
    await model.loadRecipe(id);
    servingControl();
  } catch (err) {
    recipeView.errorNotify();
  }
};
const bookmarkController = function () {
  if (model.state.recipe.bookmarked) {
    model.deleteBookMark(model.state.recipe.id);
  } else {
    model.bookMarkAdd(model.state.recipe);
  }
  bookmarkView.render(model.state.bookMarkAdd);
  recipeView.render(model.state.recipe);
};
const controlLoadBookmark = function () {
  const data = model.getLocalSto();
  bookmarkView.render(data);
};
const init = function () {
  paginationView.addHandleEvent(paginationController);
  searchView.addHandleEvent(resultsController);
  recipeView.addHandleEvent(showRecipe);
  recipeView.addHandleServings(servingControl);
  recipeView.addHandleBookMark(bookmarkController);
  bookmarkView.addHandleEvent(controlLoadBookmark);
};
init();
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
