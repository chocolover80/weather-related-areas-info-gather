function bindEventListeners() {
  //Numerical inputs (used for lat and lng gathering)
  Array.from(document.getElementsByClassName("numerical-inputs")).forEach(
    (each) => {
      each.addEventListener("keypress", function (evt) {
        if ((evt.keyCode!==45) && evt.keyCode < 48 || evt.keyCode > 57) {
          evt.preventDefault();
        }
      });
    }
  );
}
