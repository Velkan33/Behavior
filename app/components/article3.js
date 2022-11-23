export function article3() {
 //ANCHOR - Article 3
 let d = document;
 let $article3 = d.querySelector("#article3");
 $article3.classList.add("py-8", "md:py-28");
 $article3
  .querySelector(".card-container")
  .classList.add(
   "grid",
   "[grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]",
   "place-content-center",
   "justify-items-center",
   "pt-16",
   "max-w-5xl",
   "m-auto"
  );
 $article3
  .querySelectorAll(".card")
  .forEach((value) => value.classList.add("p-6", "max-w-xs", "shadow-lg"));
 $article3
  .querySelectorAll(".card p")
  .forEach((value) => value.classList.add("text-sm", "p-8"));
 $article3.querySelector(".card1").classList.add("bg-amber-500/25");
 $article3.querySelector(".card2").classList.add("bg-amber-500/50");
 $article3.querySelector(".card3").classList.add("bg-amber-600/50");
 $article3.querySelector("h2").classList.add("md:p-auto", "p-12");
 $article3
  .querySelectorAll("h4")
  .forEach((value) =>
   value.classList.add("text-xl", "font-['Source_Serif_Pro',serif]", "p-6")
  );
}
