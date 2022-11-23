import { contactFormHash } from "../helpers/contactFormHash.js";

export function footer() {
 //ANCHOR - Footer
 let d = document;
 let $footer = d.querySelector("footer");
 $footer.classList.add(`p-[4rem]`, "flex", "flex-col", "gap-10", "relative");

 $footer
  .querySelectorAll("h3")
  .forEach((value) =>
   value.classList.add("font-['Source_Serif_4',serif]", "py-5")
  );
 $footer
  .querySelectorAll(".time-card p:nth-child(even)")
  .forEach((value) => value.classList.add("text-amber-700/75"));
 $footer
  .querySelector("address")
  .insertAdjacentHTML(
   "afterbegin",
   "<span class='material-symbols-sharp text-amber-700/75 translate-y-1 px-1'>location_on</span>"
  );
 $footer
  .querySelector("address")
  .classList.add("underline", "underline-offset-1");
 $footer
  .querySelector("phone")
  .insertAdjacentHTML(
   "afterbegin",
   "<span class='material-symbols-sharp text-amber-700/75 translate-y-1 px-1'>call</span>"
  );
 $footer
  .querySelector("email")
  .classList.add("underline", "underline-offset-1", "cursor-pointer");
 $footer
  .querySelector("email")
  .insertAdjacentHTML(
   "afterbegin",
   "<span class='material-symbols-sharp text-amber-700/75 translate-y-1 px-1'>mail</span>"
  );
 $footer
  .querySelector("h4")
  .classList.add("text-2xl", "font-['Source-Serif_4',serif]", "inline", "pr-2");
 $footer.querySelector("#social-icons").classList.add("inline-block");
 $footer
  .querySelectorAll(".fa-brands")
  .forEach((value) =>
   value.classList.add("text-amber-700/75", "inline", "p-2")
  );
 $footer
  .querySelector("#footer-message")
  .classList.add("text-sm", "max-w-[30rem]", "pt-3");
 $footer
  .querySelector("#logo")
  .classList.add("md:absolute", "bottom-0", `right-[4rem]`, `bottom-[4rem]`);

 $footer.querySelector("email").addEventListener("click", (e) => {
  contactFormHash();
 });
}
