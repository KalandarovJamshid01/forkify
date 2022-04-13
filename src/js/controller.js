const recipeContainer = document.querySelector('.recipe');
import { async } from 'regenerator-runtime';
import icons from '../img/icons.svg';
import * as model from './model.js';
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
  renederHtml(model.state.recipe);
};

showRecipe();
const rendering = function (data) {
  let arr = data.map(val => {
    return `<li class="recipe__ingredient">
  <svg class="recipe__icon">
    <use href="${icons}#icon-check"></use>
  </svg>
  <div class="recipe__quantity">${val.quantity}</div>
  <div class="recipe__description">
    <span class="recipe__unit">${val.unit}</span>
    ${val.description}
  </div>
</li>`;
  });
  return arr;
};



['hashchange', 'load'].map(val => {
  window.addEventListener(val, showRecipe);
});

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
