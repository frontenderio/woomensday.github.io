// Scrooll To Fortune

const fortune = document.getElementById("fortune");
const toFortuneBtn = document.querySelector(".hero__button");
const fortuneTitle = document.querySelector(".fortune__title");

const fortuneCircle = document.querySelector(".circle");
const rotateBtn = document.querySelector(".fortune__button");
const prize = document.getElementById("prize");
const prizeImage = document.querySelector(".prize__image");
const prizeTitle = document.querySelector(".prize__title");

const viewOthersBtn = document.querySelector(".prize__button");
const others = document.getElementById("others");
const othersTitle = document.querySelectorAll(".other-prizes__title");

function scrollToFortune() {
    fortune.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {
        fortuneTitle.classList.add("animate-scale-text");
    }, 200);
    setTimeout(() => {
        rotateBtn.classList.add("animate-scale");
    }, 1000);
}

toFortuneBtn.addEventListener("click", scrollToFortune);

// Fortune Circle

function getPrize() {
    fortuneCircle.classList.add("rotated");
    setTimeout(() => {
        prize.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 1000);
    setTimeout(() => {
        prizeTitle.classList.add("animate-scale-text");
    }, 1200);
    setTimeout(() => {
        prizeImage.style.transform = "translate(0, -50%)";
    }, 2000);
}

rotateBtn.addEventListener("click", getPrize);

// Others

function scrollToOthers() {
    others.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {
        othersTitle[0].classList.add("animate-scale-text");
    }, 200);
    setTimeout(() => {
        othersTitle[1].classList.add("animate-scale-text");
    }, 400);
}

viewOthersBtn.addEventListener("click", scrollToOthers);

// Navigation Buttons 

const toHero = document.getElementById("to-hero");
const toGifts = document.getElementById("to-gifts");
const contacts = document.getElementById("contacts");

toHero.addEventListener('click', () => {
    document.body.scrollIntoView({ block: "center", behavior: "smooth" });
});

toGifts.addEventListener('click', () => {
    others.scrollIntoView({ block: "center", behavior: "smooth" });
});