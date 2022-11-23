export function article5() {
 //ANCHOR - Article 5
 let d = document;
 let $article5 = d.querySelector("#article5");
 $article5.classList.add("py-8", "md:py-28");
 $article5
  .querySelector(".card-container")
  .classList.add(
   "flex",
   "flex-wrap",
   "place-content-center",
   "justify-around",
   "gap-3",
   "pt-16",
   "max-w-5xl",
   "m-auto"
  );
 $article5
  .querySelector("#article5-title p")
  .classList.add("text-center", "text-xl");
 $article5
  .querySelectorAll(".card")
  .forEach((value) =>
   value.classList.add("p-6", "max-w-xs", "border", "shadow-sm")
  );
 $article5
  .querySelectorAll(".card p")
  .forEach((value) => value.classList.add("text-sm", "p-8", "italic"));
 $article5
  .querySelectorAll("cite")
  .forEach((value) => value.classList.add("text-center"));
 $article5
  .querySelector("h2")
  .classList.add("md:p-auto", "p-12", "text-amber-900");
 $article5
  .querySelectorAll("h4")
  .forEach((value) =>
   value.classList.add("text-xl", "font-['Source_Serif_Pro',serif]", "p-6")
  );
}
