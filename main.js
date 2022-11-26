const p = document.querySelector("p");
const ruBtn = document.querySelector(".ru");
const enBtn = document.querySelector(".en");

const localization = () => {
  let content = "";
  const lang = localStorage["lang"] || "ru";
  switch (lang) {
    case "ru":
      content = "Привет";
      break;
    case "en":
      content = "Hello";
      break;
  }
  p.textContent = content;
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
