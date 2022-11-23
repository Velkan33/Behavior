export function style() {
 let d = document;
 // let $html = d.querySelector("html");
 // $html.classList.add("dark");
 d.querySelector("body").classList.add(
  "max-w-screen-2xl",
  "m-auto",
  "shadow-lg",
  "bg-white",
  "dark:bg-slate-800",
  "text-black",
  "dark:text-white",
  "relative"
 );
 d.querySelector("header").classList.add("min-h-screen");

 d.querySelectorAll("article:nth-child(odd)").forEach((value) =>
  value.classList.add("bg-amber-50", "dark:bg-amber-900/25")
 );

 d.querySelectorAll("h1").forEach((value) => value.classList.add("text-5xl"));
 d.querySelectorAll("h2").forEach((value) =>
  value.classList.add(
   "text-3xl",
   "md:text-4xl",
   "font-['Source_Serif_Pro',serif]",
   "text-center",
   "dark:text-white"
  )
 );
 d.querySelectorAll("p").forEach((value) => {
  value.classList.add("font-['Poppins',sans-serif]");
 });
 d.querySelectorAll("li").forEach((value) => {
  value.classList.add("font-['Poppins',sans-serif]");
 });
 d.querySelectorAll("h3").forEach((value) => value.classList.add("text-2xl"));
 //ANCHOR - Buttons
 d.querySelectorAll("button").forEach((value) =>
  value.classList.add(
   "bg-amber-500/50",
   "py-2",
   "px-4",
   "font-bold",
   "text-md",
   "h-12",
   "w-auto"
  )
 );
}
