export function article4() {
 //ANCHOR - Article 4
 let d = document;
 let $article4 = d.querySelector("#article4");
 $article4.classList.add(
  "py-16",
  "px-4",
  "md:py-32",
  "md:px-0",
  "flex",
  "flex-wrap",
  "justify-around",
  "items-center",
  "md:gap-3",
  "gap-6"
 );

 $article4
  .querySelector("div")
  .classList.add("md:[width:40%]", "flex", "gap-6", "flex-col", "items-start");
 $article4
  .querySelectorAll("ul")
  .forEach((value) =>
   value.classList.add(
    "list-none",
    "font-['Poppins',sans-serif]",
    "list-inside"
   )
  );
 $article4
  .querySelectorAll("li")
  .forEach((value) => value.classList.add("py-2"));
 $article4
  .querySelectorAll("li")
  .forEach((value) =>
   value.insertAdjacentHTML(
    "afterbegin",
    "<span class='material-symbols-sharp px-2 translate-y-1'>school</span>"
   )
  );
 $article4.querySelector("figure").classList.add("md:[width:55%]");
 $article4.querySelector("figure img").classList.add("w-full", "shadow-md");
}
