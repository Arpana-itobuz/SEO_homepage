const menu = document.getElementById("menu");
const nav_list = document.getElementById("nav_list");
menu.addEventListener("click", () => {
  console.log('hi');
  if (nav_list.classList.contains("hide")) {
    nav_list.classList.remove("hide");
    nav_list.classList.add("show");
  } else {
    nav_list.classList.add("hide");
    nav_list.classList.remove("show");
  }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,

    },
    pagination: {
      el: ".swiper-pagination",
    
      clickable: true,
    //   hideOnClick:true,
    },
  });
