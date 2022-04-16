import icons from '../../img/icons.svg';

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
  #renderHtml() {
    const recipe = this.#data.results;
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
