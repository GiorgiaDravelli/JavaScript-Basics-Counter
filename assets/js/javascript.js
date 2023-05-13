const container = document.querySelector(".container");
const counterValueContainer = document.querySelector(".counter-value-container");
const buttonContainer = document.querySelector(".button-container");
const resetButtonContainer = document.querySelector(".reset-button-container");

// funzione per creare button e testo
function create(tag, style, content) {
  button = document.createElement(tag);
  button.className = style;
  button.innerHTML = content;
  return button;
}

const counterValue = create("h1", "counter-value", "0");
const buttonMinus = create("button", "btn", "-");
const buttonPlus = create("button", "btn", "+");
const resetButton = create("button", "reset-btn", "Reset");

counterValueContainer.appendChild(counterValue)
buttonContainer.append(buttonMinus, buttonPlus)
resetButtonContainer.appendChild(resetButton)

// funzione di calcolo con event delegation sul div container 
let counter = 0
container.addEventListener("click", (e) => {
  if(e.target === buttonPlus){
    counter++;
  } else if (e.target === buttonMinus && counter !== 0 ){
    counter--;
  } else if (e.target === resetButton){
    counter = 0;
  }
  counterValue.innerHTML = counter;
})




