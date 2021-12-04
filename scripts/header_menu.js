document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".header-bottom-content__list--item__btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header-bottom-content__container--dropdown");
      
      document.querySelectorAll(".header-bottom-content__list--item__btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("header-bottom-content__active--btn");
        }
      });
      
      document.querySelectorAll(".header-bottom-content__container--dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("header-bottom-content__active-list--item");
        }
      })
      dropdown.classList.toggle("header-bottom-content__active-list--item");
      btn.classList.toggle("header-bottom-content__active--btn")
    })
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header-bottom-content__list")) {
      document.querySelectorAll(".header-bottom-content__container--dropdown").forEach(el => {
          el.classList.remove("header-bottom-content__active-list--item");
      })
       document.querySelectorAll(".header-bottom-content__list--item__btn").forEach(el => {
          el.classList.remove("header-bottom-content__active--btn");
      });
    }
  })
  })