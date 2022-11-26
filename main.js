const firstBlock = document.querySelector(".firstBlock");
const secondBlock = document.querySelector(".secondBlock");
const ruBtn = document.querySelector(".ru");
const enBtn = document.querySelector(".en");

const localizationData = {
  ru: {
    firstBlock: "Привет",
    secondBlock: "Русский текст",
  },
  en: {
    firstBlock: "Hello",
    secondBlock: "English text",
  },
};

const localization = () => {
  const lang = localStorage["lang"] || "ru";
  firstBlock.textContent = localizationData[lang].firstBlock;
  secondBlock.textContent = localizationData[lang].secondBlock;
};

localization();

ruBtn.addEventListener("click", () => {
  localStorage["lang"] = "ru";
  localization();
});

enBtn.addEventListener("click", () => {
  localStorage["lang"] = "en";
  localization();
});
