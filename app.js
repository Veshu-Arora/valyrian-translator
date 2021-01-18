var inputTextArea = document.querySelector(".input-text-area");
var outputDiv = document.querySelector(".output-div");
var translateButton = document.querySelector(".translate-btn");

var serverURL = "https://api.funtranslations.com/translate/valyrian.json";

translateButton.addEventListener('click', clickEventHandler);

function getTranslationUrl(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log(error);
    alert("Something went wrong, Please try again later!")
}

function clickEventHandler() {
    var inputText = inputTextArea.value;
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var tranlatedText = json.contents.translated;
        outputDiv.innerText = tranlatedText;
    }).catch(errorHandler)
}



