const sapn1_icon1 = document.querySelector(".sapn1_icon1");
const sapn1_icon2 = document.querySelector(".sapn1_icon2");

const sapn2_icon1 = document.querySelector(".sapn2_icon1");
const sapn2_icon2 = document.querySelector(".sapn2_icon2");

const sapn3_icon1 = document.querySelector(".sapn3_icon1");
const sapn3_icon2 = document.querySelector(".sapn3_icon2");

const sapn4_icon1 = document.querySelector(".sapn4_icon1");
const sapn4_icon2 = document.querySelector(".sapn4_icon2");

const sapn5_icon1 = document.querySelector(".sapn5_icon1");
const sapn5_icon2 = document.querySelector(".sapn5_icon2");

const span1_p = document.querySelector(".span1_p");
const span2_p = document.querySelector(".span2_p");
const span3_p = document.querySelector(".span3_p");
const span4_p = document.querySelector(".span4_p");
const span5_p = document.querySelector(".span5_p");

sapn1_icon1.addEventListener("click", () => {
  iconsPlue(sapn1_icon1, sapn1_icon2, span1_p);
});
sapn1_icon2.addEventListener("click", () => {
  iconsMinus(sapn1_icon1, sapn1_icon2, span1_p);
});

sapn2_icon1.addEventListener("click", () => {
  iconsPlue(sapn2_icon1, sapn2_icon2, span2_p);
});
sapn2_icon2.addEventListener("click", () => {
  iconsMinus(sapn2_icon1, sapn2_icon2, span2_p);
});

sapn3_icon1.addEventListener("click", () => {
  iconsPlue(sapn3_icon1, sapn3_icon2, span3_p);
});
sapn3_icon2.addEventListener("click", () => {
  iconsMinus(sapn3_icon1, sapn3_icon2, span3_p);
});

sapn4_icon1.addEventListener("click", () => {
  iconsPlue(sapn4_icon1, sapn4_icon2, span4_p);
});
sapn4_icon2.addEventListener("click", () => {
  iconsMinus(sapn4_icon1, sapn4_icon2, span4_p);
});

sapn5_icon1.addEventListener("click", () => {
  iconsPlue(sapn5_icon1, sapn5_icon2, span5_p);
});
sapn5_icon2.addEventListener("click", () => {
  iconsMinus(sapn5_icon1, sapn5_icon2, span5_p);
});

function iconsPlue(icon1, icon2, p) {
  icon1.style.display = "none";
  icon2.style.display = "flex";
  p.style.display = "block";
}
function iconsMinus(icon1, icon2, p) {
  icon1.style.display = "flex";
  icon2.style.display = "none";
  p.style.display = "none";
}
