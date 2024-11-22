new Typed(".multiple-text", {
  strings: ["Paper Crafts", "Knitting & Crochet", "Jewelry Making","Home Decor Crafts","Clay & Pottery","DIY Gifts"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

const container = document.querySelector(".container");
const body = document.querySelector("body");
const homeContent = document.querySelector(".home-content");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const articles = document.querySelectorAll("article");
const sectionH2 = document.querySelectorAll("section h2");
const liveGithub = document.querySelectorAll(".live-github a span");
const resumeList = document.querySelectorAll(".resume-list span");

const toggleIcons = document.querySelectorAll(".toggle-icon");
const icons = document.querySelectorAll(".toggle-icon i");

const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

const activePage = () => {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  sections.forEach((section) => {
    section.classList.remove("active");
  });
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();
      link.classList.add("active");
      setTimeout(() => {
        console.log(`Activating section with ID: ${sections[idx].id}`);
        sections[idx].classList.add("active");
      }, 10);
    }
  });
});

logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();
    navLinks[0].classList.add("active");
    setTimeout(() => {
      sections[0].classList.add("active");
    }, 10);
  }
});

const backgroundColor = "#480026";
const secondColor = "#7b1f5090";

toggleIcons.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.add("disabled");
    setTimeout(() => {
      toggle.classList.remove("disabled");
    }, 2500);
    icons.forEach((icon) => {
      icon.classList.add("rotated");
      setTimeout(() => {
        icon.classList.toggle("bx-sun");
        if (icon.classList.contains("bx-sun")) {
          document.body.classList.toggle("dark-mode");
          icon.style.color = "yellow";
          localStorage.setItem("nightMode", "enabled");
          body.style.backgroundColor = backgroundColor;
          header.style.backgroundColor = secondColor;
          footer.style.backgroundColor = secondColor;
          footer.style.color = "white";
          homeContent.style.color = "white";
          sectionH2.forEach((xsectionH2) => {
            xsectionH2.style.color = "white";
          });
          articles.forEach((article) => {
            article.style.color = "white";
          });
          liveGithub.forEach((live) => {
            live.style.color = "white";
          });
          resumeList.forEach((list) => {
            list.style.color = "white";
          });
        } else {
          icon.style.color = "white";
          localStorage.setItem("nightMode", "disabled");
          document.body.classList.remove("dark-mode");
          body.style.backgroundColor = "white";
          header.style.backgroundColor = backgroundColor;
          footer.style.backgroundColor = backgroundColor;
          footer.style.color = "white";
          sectionH2.forEach((xsectionH2) => {
            xsectionH2.style.color = backgroundColor;
          });
          articles.forEach((article) => {
            article.style.color = backgroundColor;
          });
          liveGithub.forEach((live) => {
            live.style.backgroundColor = secondColor;
          });
          resumeList.forEach((list) => {
            list.style.color = backgroundColor;
          });
        }
        icon.classList.remove("rotated");
      }, 800);
    });
  });
});

const resumeBtn = document.querySelectorAll(".resume-button");
resumeBtn.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetail = document.querySelectorAll(".resume-detail");
    resumeBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    resumeDetail.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetail[idx].classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);
let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;
  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  if (index < 4) {
    index++;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 5;
    arrowRight.classList.add("disabled");
  }
  activePortfolio();
});

arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }
  activePortfolio();
});

document.addEventListener("DOMContentLoaded", () => {
  const nightMode = localStorage.getItem("nightMode");
  if (nightMode === "enabled") {
    document.body.classList.add("dark-mode");
    icons.forEach((icon) => {
      icon.classList.toggle("bx-sun");
      icon.style.color = "yellow";
    });
    body.style.backgroundColor = backgroundColor;
    header.style.backgroundColor = secondColor;
    homeContent.style.color = "white";
    footer.style.backgroundColor = secondColor;
    footer.style.color = "white";
    sectionH2.forEach((xsectionH2) => {
      xsectionH2.style.color = "white";
    });
    articles.forEach((article) => {
      article.style.color = "white";
    });
    liveGithub.forEach((live) => {
      live.style.color = "white";
    });
    resumeList.forEach((list) => {
      list.style.color = "white";
    });
  }
});
