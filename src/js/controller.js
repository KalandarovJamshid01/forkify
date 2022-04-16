import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsview from './views/resultsview.js';

const resultsController = async function () {
  const inputValue = searchView.getValue();
  await model.loadSearchResult(inputValue);
  resultsview.render(model.state.search);
};
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
