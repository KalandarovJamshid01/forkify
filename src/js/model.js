export const state = {
  recipe: {},
};
export const loadRecipe = async function (id) {
  try {
    const data = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const dataJson = await data.json();
    console.log(dataJson);
    const obj = dataJson.data.recipe;
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
    alert(err);
  }
};
