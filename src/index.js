function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "I never saw a wild thing",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  poemElement.innerHTML = "Quelque chose";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
