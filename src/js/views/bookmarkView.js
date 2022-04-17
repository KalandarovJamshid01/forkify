class BookmarksView {
  #parentElement = document.querySelector('.bookmarks__list');
  #data;
  render(data) {
    this.#data = data;
    this.#clearHtml();
    this.#data.map(val => this.#generateHtml(val));
  }
  #clearHtml() {
    this.#parentElement.innerHTML = '';
  }
  #generateHtml(val) {
    const html = ` <li class="preview">
    <a class="preview__link " href="#${val.id}">
      <figure class="preview__fig">
        <img src="${val.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${val.name}</h4>
        <p class="preview__publisher">${val.publisher}</p>
        
      </div>
    </a>
  </li>`;
    this.#parentElement.insertAdjacentHTML('afterbegin', html);
  }
}
export default new BookmarksView();
