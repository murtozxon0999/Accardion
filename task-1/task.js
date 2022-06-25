const title = document.querySelector(".reverse");

let text = "A man, a plan, a canal:Panama".toLowerCase().split(" ");
let tempText = "";
let Str = "!@#$%^&*()-_+={}[]/?~`.,><;:";

for (let i = 0; i < text.length; i++) {
  if (!Str.includes(text[i])) {
    tempText += text[i];
  }
}

let reverse = tempText.split(" ").reverse().join("");

if (reverse == tempText) {
  title.innerText = "true";
  console.log(true);
} else {
  title.innerText = "false";
  console.log(false);
}
console.log(text);
console.log(tempText);
console.log(reverse);