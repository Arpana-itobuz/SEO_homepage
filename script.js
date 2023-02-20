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

const ourPlans = document.querySelectorAll(".website-cost-plans");
const Plans = document.querySelectorAll(".cost");
// const navBarItems = document.querySelectorAll("a");
console.log(ourPlans);

ourPlans.forEach((item) => {
  item.addEventListener("mouseover", function () {
    console.log("hi");
    item.style.transform = "scale(1.03)";
    item.firstElementChild.style.color="white"
    item.lastElementChild.style.background="yellow"
    item.style.color ="white";
    item.style.transition = "transform 2s";
  });

  item.addEventListener("mouseout", function () {
    console.log("hi");
    item.style.color ="black";
    item.style.transform = "scale(1)";
    item.firstElementChild.style.color="#6f77f1"
    item.lastElementChild.style.background="none"
    item.style.transition = "transform 1s";
  });
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
