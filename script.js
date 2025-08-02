
const page1_gsap = gsap.timeline();

gsap.from(".nav",
    {
        top:"-20%",
        duration: 2,
        delay: 1,
        ease: "power5.out",
    }
)

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      freeMode: true, // Allows the slider to move continuously without snapping.
      speed: 2000,    // The duration of the transition (in ms). A higher value means slower movement.
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 0, // A minimal delay ensures the next transition starts immediately.
        disableOnInteraction: false, // Continue autoplay after user interaction
      },
    });
