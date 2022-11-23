import { ContactForm } from "../components/ContactForm.js";

export function contactFormHash() {
 let d = document;
 location.hash = "contact";
 if (!d.querySelector(".form-container")) {
  let $div = d.createElement("div");
  $div.classList.add("form-container");
  $div.appendChild(ContactForm());
  d.querySelector("body").appendChild($div);
 } else {
  d.querySelector(".form-container").style.setProperty("display", "block");
 }
}
