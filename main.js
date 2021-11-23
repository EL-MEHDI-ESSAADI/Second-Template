// ############# Global variabls #############
//  landing slides variabls
let lanSlidesCon = document.querySelector(".landing .slides-container");
let lanSlides = document.querySelectorAll(".landing .slides-container .slide");
let landingNextBtn = document.querySelector(".landing .right");
let landingPrevBtn = document.querySelector(".landing .left");
let landingCounter = 1;
let landindQueue = [];
let lanIsFree = true;
//  testi slides variabls
let testiSlidesCon = document.querySelector(".our-skills .testi-slidesCon");
let testiSlides = document.querySelectorAll(".our-skills .testi-slidesCon .testiSlide");
let testiCounter = 1;
let testiQueue = [];
let testiIsFree = true;


let preloader = document.querySelector(".preloader");
let menuBtn = document.querySelector("header .menuBtn");
let menuList = document.querySelector("header ul");
let allServices = document.querySelectorAll(".services .serv");
let servicesHeaders = document.querySelectorAll(".specialHeaderCon");
let imgsContainer = document.querySelector(".imgs-container");
let portfLis = document.querySelectorAll(".portfolio .shuffle li");
let stats = document.querySelectorAll(".stats .box .number");
let aboutImg = document.querySelector(".about .container img");
let progreses = document.querySelector(".skills .progreses");
let quote = document.querySelector(".quote .container");
let shuflesContainer = document.querySelector(".portfolio .shuffleCon");
let plans = document.querySelectorAll(".pricing .plans .plan");
let contactForm = document.querySelector(".contact .content form");
let contactInfo = document.querySelector(".contact .content .info");
let boxes = [
  {
    img: "./images/shuffle-01.jpg",
    description: "Awesome Image",
    type: "photography",
    id: "photo",
  },
  {
    img: "./images/shuffle-02.jpg",
    description: "Awesome Image",
    type: "photography",
    id: "photo",
  },
  {
    img: "./images/shuffle-03.jpg",
    description: "Awesome App",
    type: "app",
    id: "app",
  },
  {
    img: "./images/shuffle-04.jpg",
    description: "Awesome Image",
    type: "photography",
    id: "photo",
  },
  {
    img: "./images/shuffle-05.jpg",
    description: "Web",
    type: "web",
    id: "web",
  },
  {
    img: "./images/shuffle-06.jpg",
    description: "Print",
    type: "print",
    id: "print",
  },
  {
    img: "./images/shuffle-07.jpg",
    description: "Web",
    type: "web",
    id: "web",
  },
];

// ############# Preloader control #############
// window.scrollTo(0,0);
window.onload = () => {
  preloader.style.backgroundColor = "transparent";
  preloader.querySelector(".overlay").style.boxShadow = "none";
  preloader.querySelectorAll(".preloader .wheel").forEach((wheel) => {
    wheel.style.opacity = "0";
  });
  setTimeout((_) => {
    preloader.style.display = "none";
    document.querySelector(".slide:nth-child(2) .text").classList.add("show");
  }, 1500);
};

// ############# landing slides control #############
// reset slides
lanSlides.forEach((slide, index) => {
  slide.setAttribute("data-index",`${index}`)
  if (index === 0) {
    let clonedNode = slide.cloneNode(true);
    clonedNode.classList.add("firstClone");
    lanSlidesCon.append(clonedNode);
  }
  if (index === lanSlides.length - 1) {
    let clonedNode = slide.cloneNode(true);
    clonedNode.classList.add("lastClone");
    lanSlidesCon.prepend(clonedNode);
    lanSlides = document.querySelectorAll(".landing .slides-container .slide");
  }
});

// move to first slide
lanSlidesCon.style.transform = `translateX( ${-100 * landingCounter}%)`;
// add event listeners to buttons

landingNextBtn.addEventListener("click", (_) => {
  if(!lanIsFree) {
    landindQueue.push("next");
    return;
  }
  lanSlidesCon.style.transition = "transform .6s ease-out";
  landingCounter++;
  lanSlidesCon.style.transform = `translateX( ${-100 * landingCounter}%)`;
  lanIsFree = false;
});
landingPrevBtn.addEventListener("click", (_) => {
  if(!lanIsFree) {
    landindQueue.push("prev");
    return;
  }
  lanSlidesCon.style.transition = "transform .6s ease-out";
  landingCounter--;
  lanSlidesCon.style.transform = `translateX( ${-100 * landingCounter}%)`;
  lanIsFree = false;
});

// add event listeners to slides Containers
lanSlidesCon.addEventListener("transitionend", (_) => {
  if (lanSlides[landingCounter].classList.contains("lastClone")) {
    lanSlidesCon.style.transition = "none";
    landingCounter = lanSlides.length - 2;
    lanSlidesCon.style.transform = `translateX( ${-100 * landingCounter}%)`;
  }
  if (lanSlides[landingCounter].classList.contains("firstClone")) {
    lanSlidesCon.style.transition = "none";
    landingCounter = 1;
    lanSlidesCon.style.transform = `translateX( ${-100 * landingCounter}%)`;
  }
  setTimeout(_ => {
    if(landindQueue.length) {
        lanSlidesCon.style.transition = "transform .6s ease-out";
      if (landindQueue[0] == "next") {
        landingCounter++
      } else {
        landingCounter--
      }
      lanSlidesCon.style.transform = `translateX( ${-100 * landingCounter}%)`;
      landindQueue.shift();
    }else {
      lanIsFree = true
    }
  },0)
});

document
  .querySelector(".landing .bullets")
  .addEventListener("click", bulletsFun);

// ############# testi slides control #############

// reset slides
testiSlides.forEach((slide, index) => {
  if (index === 0) {
    let clonedNode = slide.cloneNode(true);
    clonedNode.classList.add("firstClone");
    testiSlidesCon.append(clonedNode);
  }
  if (index === testiSlides.length - 1) {
    let clonedNode = slide.cloneNode(true);
    clonedNode.classList.add("lastClone");
    testiSlidesCon.prepend(clonedNode);
    testiSlides = document.querySelectorAll(".our-skills .testi-slidesCon .testiSlide");
  }
});

// move to first slide
testiSlidesCon.style.transform = `translateX( ${-100 * testiCounter}%)`;

// add event listeners to slides Containers
testiSlidesCon.addEventListener("transitionend", (_) => {
  if (testiSlides[testiCounter].classList.contains("lastClone")) {
    testiSlidesCon.style.transition = "none";
    testiCounter = testiSlides.length - 2;
    testiSlidesCon.style.transform = `translateX( ${-100 * testiCounter}%)`;
  }
  if (testiSlides[testiCounter].classList.contains("firstClone")) {
    testiSlidesCon.style.transition = "none";
    testiCounter = 1;
    testiSlidesCon.style.transform = `translateX( ${-100 * testiCounter}%)`;
  }
  setTimeout(_ => {
    if(testiQueue.length) {
        testiSlidesCon.style.transition = "transform .5s ease";
      if (testiQueue[0] == "next") {
        testiCounter++
      } else {
        testiCounter--
      }
      testiSlidesCon.style.transform = `translateX( ${-100 * testiCounter}%)`;
      testiQueue.shift();
    }else {
      testiIsFree = true
    }
  },0)
});

// add event listeners to bullets Containers
document
  .querySelector(".our-skills .bullets")
  .addEventListener("click", function (e) {
    let target = e.target;
    let activeEl = document.querySelector(".our-skills .bullets li.active");
    if (target.nodeName === "LI") {
      let activeINdex = activeEl.dataset.index;
      let targetINdex = target.dataset.index;
      let Times = Math.abs(activeINdex - targetINdex);
      if (activeINdex > targetINdex) {
        for (let i = 0; i < Times; i++) {
          if(testiIsFree) {
            testiSlidesCon.style.transition = "transform .5s ease";
            testiCounter--;
            testiSlidesCon.style.transform = `translateX( ${-100 * testiCounter}%)`;
            testiIsFree = false;
            continue;
          }
          testiQueue.push("prev");
        }
        activeEl.classList.remove("active");
        target.classList.add("active");
      } else if (activeINdex < targetINdex) {
        for (let i = 0; i < Times; i++) {
          if(testiIsFree) {
            testiSlidesCon.style.transition = "transform .5s ease";
            testiCounter++;
            testiSlidesCon.style.transform = `translateX( ${-100 * testiCounter}%)`;
            testiIsFree = false;
            continue;
          }
          testiQueue.push("next");
        }
        activeEl.classList.remove("active");
        target.classList.add("active");
      }
    }
  });

// ############# Menu control #############

window.addEventListener("scroll", (_) => {
  if (window.scrollY > 0) {
    menuBtn.style.backgroundColor = "var(--transparent-color)";
  } else {
    menuBtn.style.backgroundColor = "";
  }
});
menuBtn.addEventListener("click", (_) => {
  menuList.classList.toggle("showUl");
});
menuList.onclick = (e) => {
  if (e.target.nodeName == "A") {
    menuList.classList.remove("showUl");
  }
};

// ############# specialsHeaders control #############

window.addEventListener("scroll", function () {
  servicesHeaders.forEach((header) => {
    scrollEfect(header);
  });
  if (servicesHeaders[servicesHeaders.length - 1].style.opacity == "1") {
    window.removeEventListener("scroll", arguments.callee);
  }
});

// ############# Services control #############

window.addEventListener("scroll", function () {
  allServices.forEach((serv) => {
    scrollEfect(serv);
  });
  if (allServices[allServices.length - 1].style.opacity == "1") {
    window.removeEventListener("scroll", arguments.callee);
  }
});

// ############# PORTFOLIO control #############

// set all boxes
boxes.forEach((boxContent) => {
  addToImgs(boxContent, true);
});
{
  let imgBoxes = document.querySelectorAll(".portfolio .imgs-container .box");
  window.addEventListener("scroll", function () {
    imgBoxes.forEach((el) => {
      scrollEfect(el);
    });
    if (imgBoxes[imgBoxes.length - 1].style.opacity == "1") {
      window.removeEventListener("scroll", arguments.callee);
    }
  });
}
// set event listner of shufles
window.addEventListener("scroll", function () {
  if (scrollEfect(shuflesContainer)) {
    window.removeEventListener("scroll", arguments.callee);
  }
});
// filter
shuflesContainer.onclick = (e) => {
  let target = e.target;
  if (target.nodeName == "LI" && !target.classList.contains("active")) {
    let targetId = target.textContent;
    imgsContainer.innerHTML = "";
    portfLis.forEach((li) => li.classList.remove("active"));
    target.classList.add("active");
    if (targetId == "all") {
      boxes.forEach((boxContent) => {
        addToImgs(boxContent);
      });
    } else {
      boxes.forEach((boxContent) => {
        if (boxContent.id == targetId) {
          addToImgs(boxContent);
        }
      });
    }
  }
};

// ############# about control #############
window.addEventListener("scroll", function () {
  if (
    aboutImg.offsetTop + aboutImg.clientHeight / 2 <
    window.scrollY + window.innerHeight
  ) {
    aboutImg.classList.add("show");
    window.removeEventListener("scroll", arguments.callee);
  }
});

// ############# stats control #############

stats.forEach((state) => {
  window.addEventListener("scroll", setEventList(state));
});

window.addEventListener("scroll", function () {
  if (
    progreses.offsetTop + progreses.clientHeight / 2 <
    window.innerHeight + window.scrollY
  ) {
    let spansProg = progreses.querySelectorAll(".prog-holder .prog span");
    spansProg.forEach((targetSpan) => {
      let width = targetSpan.dataset.progress;
      targetSpan.style.width = width;
      targetSpan.parentElement.previousElementSibling.lastElementChild.textContent =
        width;
    });
    window.removeEventListener("scroll", arguments.callee);
  }
});

// ############# Quote controle #############
window.addEventListener("scroll", function () {
  if (scrollEfect(quote)) {
    window.removeEventListener("scroll", arguments.callee);
  }
});
// ############# Pricing controle #############

window.addEventListener("scroll", function () {
  plans.forEach((plan) => {
    if (plan.offsetTop + 150 < window.innerHeight + window.scrollY) {
      plan.style.opacity = "1";
      plan.style.top = "0";
    }
  });
  if (plans[plans.length - 1].style.opacity == "1") {
    window.removeEventListener("scroll", arguments.callee);
  }
});

// ############# Contact controle #############

window.addEventListener("scroll", function () {
  scrollEfect(contactForm);
  if (scrollEfect(contactInfo))
    window.removeEventListener("scroll", arguments.callee);
});

// ############# Functions #############
function setEventList(state) {
  return function () {
    if (state.offsetTop + 100 < window.scrollY + window.innerHeight) {
      let target = state.dataset.num;
      let increase = Math.ceil(target / 250);
      let timer = setInterval(() => {
        let currentTxt = +state.textContent;
        if (currentTxt < target) {
          state.textContent = currentTxt + increase;
        } else {
          state.textContent = target;
          clearInterval(timer);
        }
      }, 1);
      window.removeEventListener("scroll", arguments.callee);
    }
  };
}
function scrollEfect(element) {
  if (element.offsetTop + 150 < window.innerHeight + window.scrollY) {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
    return true;
  }
}

function bulletsFun(e) {
  let target = e.target;
  let activeEl = document.querySelector(".landing .bullets li.active");
  if (target.nodeName === "LI") {
    let activeINdex = activeEl.dataset.index;
    let targetINdex = target.dataset.index;
    let Times = Math.abs(activeINdex - targetINdex);
    if (activeINdex > targetINdex) {
      for (let i = 0; i < Times; i++) {
        landingPrevBtn.click();
      }
      activeEl.classList.remove("active");
      target.classList.add("active");
    } else if (activeINdex < targetINdex) {
      for (let i = 0; i < Times; i++) {
        landingNextBtn.click();
      }
      activeEl.classList.remove("active");
      target.classList.add("active");
    }
  }
}
function addToImgs(boxContent, isFirst = false) {
  let box = document.createElement("div");
  box.className = "box";
  if (isFirst) {
    box.classList.add("hideBox");
  }
  box.innerHTML = `<div class="boxCon"> <img
  src="${boxContent.img}"
  alt=""/>
  <div class="caption">
  <h4>${boxContent.description}</h4>
  <p>${boxContent.type}</p>
  </div>
  </div>`;
  imgsContainer.append(box);
}
