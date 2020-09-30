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
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 871,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  //
  const tabItem = $('.tab'),
    // searchContentItem = $('.tabs-content'),
    activeTabClass = 'tab--active',
    activeContentClass = 'tabs-content--active',
    tabsWrapper = '.tabs-wrapper'

  tabItem.on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass(activeTabClass);
    $($(this)
      .closest(tabsWrapper)
      .siblings()
      .find('div')
    ).removeClass(activeContentClass);

    $(this).addClass(activeTabClass);
    $($(this).attr('href')).addClass(activeContentClass);

    productSlider.slick('setPosition')
  });

  //
  const addToFavBtn = $('.product-item__favorite'),
    favBtnActiveClass = 'product-item__favorite--active'

  addToFavBtn.on('click', function () {
    $(this).toggleClass(favBtnActiveClass)
  })

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

  //
  const footerTopTitleToggler = $('.footer__top-title--toggler');
  
  footerTopTitleToggler.on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  })

  //
  const asideBtn = $('.btn-aside');

  asideBtn.on('click', function () {
    $(this).next().slideToggle();
  })
})
