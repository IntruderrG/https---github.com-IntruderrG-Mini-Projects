console.log("Hello I am the internal script of the code");
const getpara = document.getElementsByClassName("para");
console.log(getpara[1].innerText);
function increment() {
  getpara[0].innerText = Number(getpara[0].innerText) + 1;
}
function decrement() {
  getpara[0].innerText = Number(getpara[0].innerText) - 1;
}
function setZero() {
  getpara[0].innerText = 0;
}
