class SearchView {
  #parentElement = document.querySelector('.search');
  data;
  getValue() {
    const val = document.querySelector('.search__field').value;
    return val;
  }
  addHandleEvent(data) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  }
}
export default new SearchView();
