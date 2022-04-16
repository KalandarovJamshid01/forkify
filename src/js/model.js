import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helper';
export const state = {
  recipe: {},
  search: {
    results: [],
  },
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
  } catch (err) {
    throw err;
  }
};
export const loadSearchResult = async function () {
 };
