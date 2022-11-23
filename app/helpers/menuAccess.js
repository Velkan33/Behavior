export function menuAccess() {
 let d = document,
  $menuContent = d.querySelector(".menuContent"),
  $header = d.querySelector("header"),
  $article1 = d.querySelector("#article1"),
  $article2 = d.querySelector("#article2"),
  $article3 = d.querySelector("#article3"),
  $article4 = d.querySelector("#article4"),
  $article5 = d.querySelector("#article5"),
  $footer = d.querySelector("footer"),
  $menuSymbol = d.querySelector(".menu-symbol");
 d.addEventListener("click", (e) => {
  if (e.target.matches(".accessMain")) {
   $header.scrollIntoView({ behavior: "smooth" });
  } else if (e.target.matches(".access1")) {
   $article1.scrollIntoView({ behavior: "smooth" });
  } else if (e.target.matches(".access2")) {
   $article2.scrollIntoView({ behavior: "smooth" });
  } else if (e.target.matches(".access3")) {
   $article3.scrollIntoView({ behavior: "smooth" });
  } else if (e.target.matches(".access4")) {
   $article4.scrollIntoView({ behavior: "smooth" });
  } else if (e.target.matches(".access5")) {
   $article5.scrollIntoView({ behavior: "smooth" });
  } else if (e.target.matches(".accessFooter")) {
   $footer.scrollIntoView({ behavior: "smooth" });
  }
  $menuContent.classList.add("translate-x-full");
  $menuSymbol.textContent = "menu";
 });

 $menuSymbol.addEventListener("click", (e) => {
  e.stopPropagation();
  $menuContent.classList.toggle("translate-x-full");
  $menuSymbol.textContent === "menu"
   ? ($menuSymbol.textContent = "close")
   : ($menuSymbol.textContent = "menu");
 });
}
