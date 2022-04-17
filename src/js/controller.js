import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsview from './views/resultsview.js';
import paginationView from './views/paginationView.js';
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

paginationView.addHandleEvent(paginationController);
const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    recipeView.spinner();
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.errorNotify();
  }
};

// console.log(data);
recipeView.addHandleEvent(showRecipe);
searchView.addHandleEvent(resultsController);
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
