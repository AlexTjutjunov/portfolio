$(document).ready(function () {
   $(".testimonials-reiting").starRating({
      initialRating: 5,
      starShape: 'rounded',
      strokeColor: '#FFB742',
      hoverColor: '#FFB742',
      activeColor: '#FFB742',
      strokeWidth: 10,
      starSize: 20,
      readOnly: true,
      useGradient: false,
   });

   $('.testimonials-description-block').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      responsive: [
         {
         breakpoint: 1201,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         },
      },
      {
         breakpoint: 851,
         settings: {
            slidesToShow: 1,
         }
      }
   ]
   })

   $('.works-menu-link').click(function (e) {
      e.preventDefault();
      let value = $(this).attr('data-filter');
      if (value === 'all') {
         $('.workds-img').fadeIn(1000);
      } else {
         $('.workds-img').not('.' + value).hide(1000);
         $('.workds-img').filter('.' + value).fadeIn(1000);
      };
   })
   $('.works-menu-item a').click(function () {
      $('.works-menu-item a').removeClass('active');
      $(this).addClass('active');
   })

   $('.burger').click(function () {
      $('.burger').toggleClass('active');
      $('.nav').toggleClass('active');
      $('.menu').toggleClass('active');
   })
});