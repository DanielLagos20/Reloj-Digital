const $clock = document.querySelector("#clock");

function relojDigital() {
  setInterval(() => {
    let hours = new Date().toLocaleTimeString();
    $clock.textContent = hours;
  }, 1000);
}
document.addEventListener("DOMContentLoaded", () => {
  relojDigital();
});
