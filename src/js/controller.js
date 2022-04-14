import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(`Salom Request took too long! Timeout after ${s} second`)
      );
    }, s * 1000);
  });
};

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    recipeView.spinner();
    await Promise.race([timeout(5), model.loadRecipe(id)]);
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
// console.log(data);
['hashchange', 'load'].map(val => {
  window.addEventListener(val, showRecipe);
});
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
