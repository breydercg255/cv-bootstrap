switchEnglishBtn = document.getElementById("switch-english-btn");
switchSpanishBtn = document.getElementById("switch-spanish-btn");
englishElements = document.querySelectorAll(".english-element");
spanishElements = document.querySelectorAll(".spanish-element");
spanishInlineElements = document.querySelectorAll(".es-inline-element");
englishInlineElements = document.querySelectorAll(".en-inline-element");

function manageElements(elementsToHide, display) {
    for (const element of elementsToHide) {
        element.style.display = display;
    }
}

switchEnglishBtn.addEventListener("click", () => {
    manageElements(spanishElements, "none");
    manageElements(englishElements, "block");
    manageElements(englishInlineElements, "inline");
    switchEnglishBtn.style.display = "none";
    switchSpanishBtn.style.display = "initial";
});

switchSpanishBtn.addEventListener("click", () => {
    manageElements(englishElements, "none");
    manageElements(spanishElements, "block");    
    manageElements(spanishInlineElements, "inline");
    switchSpanishBtn.style.display = "none";
    switchEnglishBtn.style.display = "initial";
});

$(() => {
    $("[data-toggle='tooltip']").tooltip();
});