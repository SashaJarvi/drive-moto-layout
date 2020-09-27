$(function () {
  const bannerSectionSlider = $('.banner-section__slider')

  bannerSectionSlider.slick({
    dots: true,
    prevArrow:
      `<button class="banner-section__slider-btn banner-section__slider-btn--prev">
        <img src="./images/arrow-left.svg" alt="">
      </button>`,
    nextArrow:
      `<button class="banner-section__slider-btn banner-section__slider-btn--next">
        <img src="./images/arrow-right.svg" alt="">
      </button>`,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          arrows: false
        }
      }
    ]
  });

  //
  const searchTabsItem = $('.tab'),
    // searchContentItem = $('.tabs-content'),
    activeTabClass = 'tab--active',
    activeContentClass = 'tabs-content--active'

  searchTabsItem.on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass(activeTabClass);
    $($(this).parent()
      .siblings()
      .find('div')
    ).removeClass(activeContentClass);

    $(this).addClass(activeTabClass);
    $($(this).attr('href')).addClass(activeContentClass);
  });

  //
  const addToFavBtn = $('.product-item__favorite'),
    favBtnActiveClass = 'product-item__favorite--active'

  addToFavBtn.on('click', function () {
    $(this).toggleClass(favBtnActiveClass)
  })

  //
  const productSlider = $('.product-slider');

  productSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      `<button class="product-slider__slider-btn product-slider__slider-btn--prev">
        <img src="./images/arrow-left-black.svg" alt="">
       </button>`,
    nextArrow:
      `<button class="product-slider__slider-btn product-slider__slider-btn--next">
        <img src="./images/arrow-right-black.svg" alt="">
       </button>`,
  });

  //
  $('.filter-style').styler();

  $('.filter__item-drop, .filter-btn-extra').on('click', function () {
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200);
  })

  $(".js-range-slider").ionRangeSlider({
    grid: false,
    type: "double",
    min: 100000,
    max: 500000,
    hide_from_to: true
  });

  //
  const productItemWrapper = $('.product-item__wrapper'),
    productItemWrapperListClass = 'product-item__wrapper--list',
    catalogFilterBtnGrid = $('.catalog__filter-btngrid'),
    catalogFilterBtnLine = $('.catalog__filter-btnlist'),
    activeCatalogFilterButtonClass = 'catalog__filter-button--active';

  catalogFilterBtnGrid.on('click', function () {
    $(this).addClass(activeCatalogFilterButtonClass);
    catalogFilterBtnLine.removeClass(activeCatalogFilterButtonClass);
    productItemWrapper.removeClass(productItemWrapperListClass);
  });

  catalogFilterBtnLine.on('click', function () {
    $(this).addClass(activeCatalogFilterButtonClass);
    catalogFilterBtnGrid.removeClass(activeCatalogFilterButtonClass);
    productItemWrapper.addClass(productItemWrapperListClass);
  })

  //
  const rateStarsBlock = $('.rate__stars');

  rateStarsBlock.rateYo({
    starWidth: '23px',
    spacing: '7px',
    normalFill: '#c4c4c4',
    ratedFill: '#1c62cd'
  })
  
  //
  const menuBtn = $('.menu__btn'),
    menuMobile = $('.menu-mobile'),
    menuMobileActiveClass = 'menu-mobile--show';
  
  menuBtn.on('click', function () {
    menuMobile.toggleClass(menuMobileActiveClass);
  })
})
