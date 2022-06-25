const url = "followers.json";
const btns = document.querySelectorAll(".btn");
const h1 = document.querySelector("h1");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const mainSection = document.querySelector(".main-section");
let currentPage = 0;

prev.addEventListener("click", () => {
  btns.forEach((item) => {
    item.style.background = "#8BCBF8";
    item.style.color = "black";
  });
  if (currentPage > 0) btns[currentPage - 1].click();
  btns[currentPage].style.background = "#063251";
  btns[currentPage].style.color = "white";
});

next.addEventListener("click", () => {
  btns.forEach((item) => {
    item.style.background = "#8BCBF8";
    item.style.color = "black";
  });
  if (currentPage < 10) btns[currentPage + 1].click();
  btns[currentPage].style.background = "#063251";
  btns[currentPage].style.color = "white";
});

function get(a) {
  axios.get(url).then((res) => {
    for (let i = a * 10; i < 10 * (a + 1); i++) {
      renderUsers(res.data[i]);
    }
  });
}

btns.forEach((item, idx) => {
  item.addEventListener("click", () => {
    h1.innerHTML = "Loading";
    mainSection.innerHTML = "";
    setTimeout(() => {
      get(idx);
      currentPage = idx;
      h1.innerHTML = "Pagination";
    }, 300);
  });
});

function renderUsers(obj) {
  let user = document.createElement("div");
  user.classList.add("user");

  let img = document.createElement("img");
  img.src = obj.avatar_url;

  let p = document.createElement("p");
  p.innerHTML = obj.login;
  let gitHubLinks = document.createElement("a");

  gitHubLinks.classList.add("gitHubLinks");
  gitHubLinks.innerHTML = "VIEW PROFILE";
  gitHubLinks.href = obj.html_url;

  user.append(img, p, gitHubLinks);
  mainSection.appendChild(user);
}
