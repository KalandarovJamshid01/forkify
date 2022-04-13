const recipeContainer = document.querySelector('.recipe');
import { async } from 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
const showRecipe = async function () {
  const id = window.location.hash.slice(1);
  console.log(id);
  await model.loadRecipe(id);
  recipeContainer.innerHTML = '';
  recipeView.render(model.state.recipe);
};

showRecipe();

// ['hashchange', 'load'].map(val => {
//   window.addEventListener(val, showRecipe);
// });
window.addEventListener('hashchange', showRecipe);
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
