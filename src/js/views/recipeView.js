import icons from '../../img/icons.svg';

class RecipeView {
  #parentElement = document.querySelector('.recipe');
  #data;
  #errorMessages = `Sizning qidirayotgan malumotingiz topilmadi.Iltimos qayta urining!!!`;
  render(data) {
    this.#data = data;

    if (!data) return;
    this.#clearHtml();
    this.#generatorHtml(this.#data);
  }
  addHandleEvent(handle) {
    ['hashchange', 'load'].map(val => {
      window.addEventListener(val, handle);
    });
  }
  errorNotify() {
    const html = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${this.#errorMessages}</p>
  </div>`;
    this.#clearHtml();
    this.#parentElement.insertAdjacentHTML('afterbegin', html);
  }
  #clearHtml() {
    this.#parentElement.innerHTML = '';
  }
  spinner() {
    const spinHtml = ` <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
    this.#clearHtml();
    this.#parentElement.insertAdjacentHTML('afterbegin', spinHtml);
  }
  #rendering(data) {
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
  }
  #generatorHtml(data) {
    let html = `<figure class="recipe__fig">
      <img src="${data.image}" alt="${data.name}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${data.name}</span>
      </h1>
    </figure>
    
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          data.time
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          data.servings
        }</span>
        <span class="recipe__info-text">servings</span>
    
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
    
      <div class="recipe__user-generated">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${icons}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>
    
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this.#rendering(data.ingredients).join('')}  
      </ul>
    </div>
    
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`;
    this.#parentElement.insertAdjacentHTML('afterbegin', html);
  }
}
export default new RecipeView();
