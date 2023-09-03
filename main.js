const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuBtn.classList.toggle('fa-times');
});

document.addEventListener('scroll', () => {
  navbar.classList.remove('active');
  menuBtn.classList.remove('fa-times');
});

// Active nav Y > 150px
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
});

// Active Links

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });
  navLi.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
      li.style.pointerEvents = 'auto';
    }
  });
});

// Swipers

const gallerySwiper = new Swiper('.gallery-slider', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  spaceBetween: 50,
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const reviewsSwiper = new Swiper('.reviews-slider', {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  spaceBetween: 50,
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});


(() => {
  const getCookie = (name) => {
    const value = " " + document.cookie;
    console.log("value", `==${value}==`);
    const parts = value.split(" " + name + "=");
    return parts.length < 2 ? undefined : parts.pop().split(";").shift();
  };

  const setCookie = function (name, value, expiryDays, domain, path, secure) {
    const exdate = new Date();
    exdate.setHours(
      exdate.getHours() +
        (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
    );
    document.cookie =
      name +
      "=" +
      value +
      ";expires=" +
      exdate.toUTCString() +
      ";path=" +
      (path || "/") +
      (domain ? ";domain=" + domain : "") +
      (secure ? ";secure" : "");
  };

  const $cookiesBanner = document.querySelector(".cookies-eu-banner");
  const $cookiesBannerButton = $cookiesBanner.querySelector("button");
  const cookieName = "cookiesBanner";
  const hasCookie = getCookie(cookieName);

  if (!hasCookie) {
    $cookiesBanner.classList.remove("hidden");
  }

  $cookiesBannerButton.addEventListener("click", () => {
    setCookie(cookieName, "closed");
    $cookiesBanner.remove();
  });
})();