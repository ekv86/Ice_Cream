(() => {
  const refs = {
    openModalBtnTablet: document.querySelector("[data-modal-open-products]"),
    openModalBtnMobile: document.querySelector("[data-modal-open-products1]"),
    closeModalBtn: document.querySelector("[data-modal-close-products]"),
    modal: document.querySelector("[data-modal-products]"),
  };

  refs.openModalBtnTablet.addEventListener("click", toggleModal);
  refs.openModalBtnMobile.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn1: document.querySelector("[data-modal-open-ingredients]"),
    openModalBtn2: document.querySelector("[data-modal-open-ingredients2]"),
    openModalBtn3: document.querySelector("[data-modal-open-ingredients3]"),
    closeModalBtn: document.querySelector("[data-modal-close-ingredients]"),
    modal: document.querySelector("[data-modal-ingredients]"),
  };

  refs.openModalBtn1.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.openModalBtn3.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-read]"),
    closeModalBtn: document.querySelector("[data-modal-close-read]"),
    modal: document.querySelector("[data-modal-read]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-location]"),
    closeModalBtn: document.querySelector("[data-modal-close-location]"),
    modal: document.querySelector("[data-modal-location]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-franchise]"),
    closeModalBtn: document.querySelector("[data-modal-close-franchise]"),
    modal: document.querySelector("[data-modal-franchise]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();



