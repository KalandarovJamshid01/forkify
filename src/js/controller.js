import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import * as model from './model.js';
import recipeView from './views/recipeView.js';

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
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
