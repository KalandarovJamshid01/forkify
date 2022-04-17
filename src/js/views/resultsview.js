import icons from '../../img/icons.svg';
import recipeView from './recipeView';
class ResultsView {
  #parentElement = document.querySelector('.results');
  #data;
  #clearHtml() {
    this.#parentElement.innerHTML = '';
  }

  render(data) {
    this.#data = data;
    this.#clearHtml();
    this.#renderHtml();
  }
  spinner() {
    this.#clearHtml();
    let spinHtml = `<div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
    this.#parentElement.insertAdjacentHTML('afterbegin', spinHtml);
  }
  #renderHtml() {
    const recipe = this.#data;
    recipe.forEach(val => {
      const html = ` <li class="preview">
    <a class="preview__link preview__link--active" href="#${val.id}">
      <figure class="preview__fig">
        <img src="${val.img}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${val.title}</h4>
        <p class="preview__publisher">${val.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`;
      this.#parentElement.insertAdjacentHTML('afterbegin', html);
    });
  }
}

export default new ResultsView();
