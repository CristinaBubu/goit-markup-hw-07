(() => {
  const refs = {
    openModalBtn: document.querySelector("[js-open-menu]"),
    closeModalBtn: document.querySelector("[js-close-menu]"),
    modal: document.querySelector("[js-menu-container]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
    
 
})();