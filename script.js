new Typed(".multiple-text", {
  strings: ["Fronted Developer", "Youtuber", "Content Editor"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

const container = document.querySelector(".container");
const home = document.querySelector(".home");
const services = document.querySelector(".services");
const resume = document.querySelector(".resume");
const portfolio = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");
const siteheader = document.querySelector(".site-header");

const cloneContainer = container.cloneNode(true);
cloneContainer.id = "dark-container";
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove("active");

// const cloneHome = home.cloneNode(true);
// cloneHome.id = "dark-home";
// document.body.appendChild(cloneHome);
// cloneHome.classList.remove("active");

// const cloneServices = services.cloneNode(true);
// cloneServices.id = "dark-services";
// document.body.appendChild(cloneServices);
// cloneServices.classList.remove("active");

// const cloneResume = resume.cloneNode(true);
// cloneResume.id = "dark-resume";
// document.body.appendChild(cloneResume);
// cloneResume.classList.remove("active");

// const clonePortfolio = portfolio.cloneNode(true);
// clonePortfolio.id = "dark-portfolio";
// document.body.appendChild(clonePortfolio);
// clonePortfolio.classList.remove("active");

// const cloneContact = contact.cloneNode(true);
// cloneContact.id = "dark-contact";
// document.body.appendChild(cloneContact);
// cloneContact.classList.remove("active");

// const cloneSiteheader = siteheader.cloneNode(true);
// cloneSiteheader.id = "dark-siteheader";
// document.body.appendChild(cloneSiteheader);
// cloneSiteheader.classList.remove("active");

const toggleIcons = document.querySelectorAll(".toggle-icon");
const icons = document.querySelectorAll(".toggle-icon i");
const darkContainer = document.querySelector("#dark-container");
const darkHome = document.querySelector("#dark-home");
const darkServices = document.querySelector("#dark-services");
const darkResume = document.querySelector("#dark-resume");
const darkPortfolio = document.querySelector("#dark-portfolio");
const darkContact = document.querySelector("#dark-contact");
const darkSiteheader = document.querySelector("#dark-siteheader");

const darkContainerImg = document.querySelector(
  "#dark-container .home-img img"
);
darkContainerImg.src = "./assets/feature1.jpg";

const darkHomeImg = document.querySelector("#dark-home .home-img img");
darkContainerImg.src = "./assets/feature1.jpg";

new Typed("#dark-container .multiple-text", {
  strings: ["Frontend Developer", "Youtuber", "Content Editor"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");


menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x')  
  navbar.classList.toggle('active');
} );

const activePage = () => {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  sections.forEach((section) => {
    section.classList.remove("active");
  });
  menuIcon.classList.remove('bx-x')  
  navbar.classList.remove('active');
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

// function checkActiveStates() {
//   // icons.forEach((icon) => {
//   //     if (icon.classList.contains("bx-sun")) {
//   //       const xhome = document.querySelector("#dark-home");
//   // const xservices = document.querySelector("#dark-services");
//   // const xresume = document.querySelector("#dark-resume");
//   // const xportfolio = document.querySelector("#dark-portfolio");
//   // const xcontact = document.querySelector("#dark-contact");
//   // const xsiteheader = document.querySelector("#dark-siteheader");
//   //     } else {
//         const xhome = document.querySelector("#home");
//   const xservices = document.querySelector("#services");
//   const xresume = document.querySelector("#resume");
//   const xportfolio = document.querySelector("#portfolio");
//   const xcontact = document.querySelector("#contact");
//   const xsiteheader = document.querySelector("#siteheader");
//     //   }
//     // });

// const elements = [
//     { name: "Home", element: xhome },
//     { name: "Services", element: xservices },
//     { name: "Resume", element: xresume },
//     { name: "Portfolio", element: xportfolio },
//     { name: "Contact", element: xcontact },
//     { name: "Siteheader", element: xsiteheader },
//   ];

//   // Filter and return only active elements as an array of CSS selectors
//   return elements
//     .filter(({ element }) => element.classList.contains("active"))
//     .map(({ element }) => `#${element.id}`) // assuming each element has a unique id
//     .join(", "); // Join into a single selector string
// }

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
          icon.style.color = "yellow";
        } else {
          icon.style.color = "blue";
        }
        icon.classList.remove("rotated");
      }, 800);
    });

    // const activeElementsSelector = checkActiveStates();
    // console.log(activeElementsSelector);
    // const activeElements = document.querySelectorAll(activeElementsSelector);
    // console.log(activeElements);
    // activeElements.forEach(element => {
    //   if (element.classList.contains("home")) {
    //     home.classList.add("active");
    //     darkHome.classList.toggle("active");
    //   }
    // });
    // activeElements.forEach(element => {
    //   if (element.classList.contains("services")) {
    //     services.classList.toggle("active");
    //     darkServices.classList.toggle("active");
    //   }
    // });
    // activeElements.forEach(element => {
    //   if (element.classList.contains("resume")) {
    //     resume.classList.toggle("active");
    //     darkResume.classList.toggle("active");
    //   }
    // });
    // activeElements.forEach(element => {
    //   if (element.classList.contains("portfolio")) {
    //     portfolio.classList.toggle("active");
    //     darkPortfolio.classList.toggle("active");
    //   }
    // });
    // activeElements.forEach(element => {
    //   if (element.classList.contains("contact")) {
    //     contact.classList.toggle("active");
    //     darkContact.classList.toggle("active");
    //   }
    // });

    container.classList.toggle("active");
    darkContainer.classList.toggle("active");
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
