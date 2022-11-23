import { contactFormHash } from "../helpers/contactFormHash.js";

export function article1() {
 //ANCHOR - Article 1
 let d = document;
 let $article1 = d.querySelector("#article1");
 $article1.classList.add(
  "p-8",
  "pt-20",
  "md:p-32",
  "flex",
  "flex-col",
  "lg:flex-row",
  "flex-wrap",
  "justify-around",
  "md:gap-3",
  "gap-6"
 );
 $article1
  .querySelector("div")
  .classList.add("lg:[width:40%]", "flex", "gap-10", "flex-col", "items-start");

 $article1.querySelector("figure").classList.add("md:[width:55%]");
 $article1
  .querySelector("figure img")
  .classList.add("w-full", "max-h-[421px]", "md:max-h-full", "shadow-md");
 $article1
  .querySelector("button")
  .classList.add(
   "shadow-md",
   "hover:shadow-none",
   "transition",
   "duration-300"
  );
 $article1.querySelector("button").addEventListener("click", (e) => {
  contactFormHash();
 });
}
