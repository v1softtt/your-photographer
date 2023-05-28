
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1200,
});

document.querySelector("#phone").onkeydown = function (e) {
  inputphone(e, document.querySelector("#phone"));
};

function inputphone(e, phone) {
  function stop(evt) {
    evt.preventDefault();
  }
  let key = e.key,
    v = phone.value;
  not = key.replace(/([0-9])/, 1);

  if (not == 1 || "Backspace" === not) {
    if ("Backspace" != not) {
      if (v.length < 3 || v === "") {
        phone.value = "+7(";
      }
      if (v.length === 6) {
        phone.value = v + ")";
      }
      if (v.length === 10) {
        phone.value = v + "-";
      }
      if (v.length === 13) {
        phone.value = v + "-";
      }
    }
  } else {
    stop(e);
  }
}

const lightbox = GLightbox({});

AOS.init();
