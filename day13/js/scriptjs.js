const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,
  autoplay:{
    delay:500,
    playOnMouseEnter: true,
  },
  slidesPerView:3,

  pagination: {
    el: '.swiper-pagination',
	clickable:true,
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  scrollbar: {
    el: '.swiper-scrollbar',
  },
});