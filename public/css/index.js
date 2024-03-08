const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon Toggling
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)){
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
}

sunIcon.addEventListener("click", () => {
  themeSwitch();
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();


// NAVBAR SCROLL
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
  
    if(window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');
    }
  }

// HOVER VIDEO
const videoContainer = document.querySelector('#myVid');
const video = document.querySelector('#video');

// Kiểm tra xem trình duyệt có hỗ trợ sự kiện touchstart không
if ('ontouchstart' in window || navigator.maxTouchPoints) {
    videoContainer.addEventListener('touchstart', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
} else {
    // Sử dụng mouseenter và mouseleave như trước cho máy tính
    videoContainer.addEventListener('mouseenter', function () {
        video.play();
    });

    videoContainer.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0;
    });
}

