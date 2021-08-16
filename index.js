const inputTextArea = document.querySelector("#input-text-area");
const outputDiv = document.querySelector("#output-div");
const translateButton = document.querySelector("#translate-btn");
const ferbApi = "https://api.funtranslations.com/translate/ferb-latin.json";

const translateQuery = (text) => {
  return ferbApi + "?text=" + text;
};

const errorHandler = (err) => {
  console.log(err);
  alert("Something went wrong, Please try again later!");
};

const translateText = () => {
  const textToTranslate = inputTextArea.value;
  fetch(translateQuery(textToTranslate))
    .then((res) => res.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
};

translateButton.addEventListener("click", translateText);
