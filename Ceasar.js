const alphabetArray = [..."abcdefghijklmnopqrstuvwxyz"];

function isLowerCase(letter) {
  return letter === letter.toLowerCase();
}

function encryptLetter(char, isLowerCase) {
  if (isLowerCase) {
    return alphabetArray[
      (alphabetArray.indexOf(char) + 13) % alphabetArray.length
    ];
  }
  return alphabetArray[
    (alphabetArray.indexOf(char.toLowerCase()) + 13) % alphabetArray.length
  ].toUpperCase();
}

function getShiftedLetter(char) {
  if (alphabetArray.includes(char.toLowerCase())) {
    return (char = isLowerCase(char)
      ? encryptLetter(char, true)
      : encryptLetter(char, false));
  }
  return char;
}

export default function ceasar13(input) {
  if (typeof input !== "string" || input.length === 0) {
    throw new Error("Invalid input!");
  }

  return [...input].map(getShiftedLetter).join("");
}
