const output = document.querySelector(".output");
const btn = document.querySelector(".btn");
const urls = ["text.txt", "text1.txt", "text2.txt", "text3.txt"];
const headretOne = document.querySelector("h1");
const sel = document.createElement("select");
output.append(sel);

urls.forEach((el) => {
  const opt = document.createElement("option");
  sel.append(opt);
  opt.value = el;
  opt.textContent = el;
});

btn.addEventListener("click", (e) => {
  getFile(sel.value);
});

function getFile(url) {
  fetch(url)
    .then((rep) => rep.text())
    .then((data) => {
      output.textContent = data;
    });
}
