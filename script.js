const ourPlans = document.querySelectorAll(".websiteCostPlans");
const Plans = document.querySelectorAll(".cost");
// const navBarItems = document.querySelectorAll("a");
console.log(ourPlans);

ourPlans.forEach((item) => {
  item.addEventListener("mouseover", function () {
    console.log("hi");
    item.style.transform = "scale(1.03)";
    // Plans.style.color="white"
    item.style.color ="white";
    item.style.transition = "transform 2s";
  });

  item.addEventListener("mouseout", function () {
    console.log("hi");
    item.style.color ="black";
    item.style.transform = "scale(1)";
    item.style.transition = "transform 1s";
  });
});

Plans.forEach((item) => {
    item.addEventListener("mouseover",function(){
        item.style.color="white"
    })

    item.addEventListener("mouseout",function(){
        item.style.color="#6f77f1"
    })
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
