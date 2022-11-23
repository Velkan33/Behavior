export function article2() {
 //ANCHOR - Article 2
 let d = document;
 let $article2 = d.querySelector("#article2");
 $article2.classList.add(
  "p-8",
  "pt-20",
  "md:p-32",
  "flex",
  "flex-wrap",
  "justify-around",
  "md:gap-3",
  "gap-6",

  "bg-white"
 );

 $article2
  .querySelector("div")
  .classList.add("md:[width:40%]", "flex", "gap-6", "flex-col", "items-start");
 $article2
  .querySelectorAll("ul")
  .forEach((value) =>
   value.classList.add("list-disc", "font-['Poppins',sans-serif]")
  );
 $article2.querySelector("figure").classList.add("md:[width:55%]");
 $article2.querySelector("figure img").classList.add("w-full", "shadow-md");
}
