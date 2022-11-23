import { App } from "./App.js";

let d = document;
App();
// window.addEventListener("load", (e) => {
//  App();
// });
addEventListener("hashchange", (e) => {
 if (!location.hash) {
  d.querySelector(".form-container").style.setProperty("display", "none");
 } else if (location.hash === "#contact") {
  d.querySelector(".form-container").style.setProperty("display", "block");
 }
});
