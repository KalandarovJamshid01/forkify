class SearchView {
  #parentElement = document.querySelector('.search');
  #data;
  getValue() {
    const val = document.querySelector('.search__field').value;
    return val;
  }
  addHandleEvent(handle) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handle();
    });
  }
}
export default new SearchView();
