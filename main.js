import ceasar13 from "./Ceasar.js";

const messageField = document.querySelector("#message");
const result = document.querySelector(".result");

function displayResult(e) {
  if(e.target.value===""){
   result.textContent = ""
   return
  }
  result.textContent = ceasar13(e.target.value);
}

messageField.addEventListener("input", displayResult);
