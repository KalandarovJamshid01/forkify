import icons from '../../img/icons.svg';
class PaginatonView {
  #parentElement = document.querySelector('.pagination');
  #data;
  addHandleEvent(handle) {
    this.#parentElement.addEventListener('click', function (e) {
      if (!e.target.closest('.btn--inline')) return;
      const page = +e.target.closest('.btn--inline').getAttribute('id');
      console.log('hello');
      handle(page);
    });
  }
  render(data) {
    this.#data = data;
    this.#renderHtml();
  }
  #renderHtml() {
    const currentPage = this.#data.page;
    const lastPage = Math.ceil(this.#data.results.length / this.#data.perPage);
    const btnPrev = `<button class="btn--inline pagination__btn--prev">
    id=${currentPage + 1}
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>${currentPage - 1}</span>
  </button>`;
    const btnNext = ` <button class="btn--inline pagination__btn--next">
    <span>${currentPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;
    if (currentPage > 1) {
      this.#parentElement.insertAdjacentHTML('afterbegin', btnPrev);
    }
    if (currentPage < lastPage) {
      this.#parentElement.insertAdjacentHTML('afterBegin', btnNext);
    }
  }
}
export default new PaginatonView();
