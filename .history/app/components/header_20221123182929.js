import { contactFormHash } from "../helpers/contactFormHash.js";
import { menuAccess } from "../helpers/menuAccess.js";

export function header() {
 //ANCHOR - Header
 let d = document;
 let $header = d.querySelector("header");
 $header.classList.add(
  "bg-[url('https://images.unsplash.com/photo-1576014131795-d440191a8e8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')]",
  "min-h-[max(100vh,20rem)]",
  "bg-no-repeat",
  "bg-cover",
  "bg-center",
  "bg-fixed",
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "text-white",
  "bg-origin-border"
 );
 let $bar = $header.querySelector("#nav-bar");
 $bar.classList.add(
  "h-[4rem]",
  "bg-[#ffffffe9]",
  "w-full",
  "fixed",
  "top-0",
  "shadow-md",
  "z-50",
  "flex",
  "justify-between",
  "p-2",
  "items-center",
  "px-4"
 );

 $header
  .querySelector("h1")
  .classList.add(
   "absolute",
   "top-[8rem]",
   "md:top-[8rem]",
   "md:left-[5rem]",
   "font-['Source_Serif_Pro',serif]"
  );
 $header
  .querySelector("p")
  .classList.add("md:w-[40rem]", "relative", "translate-y-16", "p-2");
 $header
  .querySelector("button")
  .classList.add("relative", "translate-y-24", "bg-amber-700/75");

 let $fragment = d.createDocumentFragment();
 let $menu = d.createElement("span");
 $menu.textContent = "menu";
 $menu.classList.add(
  "menu-symbol",
  "material-symbols-sharp",
  "text-black",
  "!text-4xl",
  "cursor-pointer"
 );

 let $brand = d.createElement("a");
 $brand.setAttribute("href", "#");
 $brand.classList.add(
  "text-black",
  "font-['Source_Serif_Pro',serif]",
  "text-2xl"
 );
 $brand.textContent = "Behavior";
 let $mail = d.createElement("span");
 $mail.textContent = "mail";
 $mail.classList.add(
  "material-symbols-sharp",
  "text-black",
  "cursor-pointer",
  "!text-3xl"
 );
 $mail.addEventListener("click", (e) => {
  contactFormHash();
 });

 $fragment.appendChild($mail);
 $fragment.appendChild($brand);
 $fragment.appendChild($menu);
 $bar.appendChild($fragment);

 let $menuContent = d.createElement("div");
 $menuContent.classList.add(
  "menuContent",
  // "w-[15rem]",
  "bg-[#ffffffe9]",
  "fixed",
  "top-16",
  "right-0",
  "z-40",
  "text-black",
  "font-['Source_Serif_Pro',serif]",
  "transition",
  "duration-500",
  "translate-x-full"
 );
 $menuContent.innerHTML = `<p class="accessMain">Main Page</p><p class="access1">How we deal with children</p><p class="access2">Our Experts</p><p class="access3">Our Main Practices</p><p class="access4">Our Services</p><p class="access5">Feedback from Clients</p><p class="accessFooter">Contact Us</p>`;
 $menuContent
  .querySelectorAll("p")
  .forEach((value) =>
   value.classList.add(
    "shadow-sm",
    "hover:shadow-md",
    "py-4",
    "px-2",
    "text-xl",
    "cursor-pointer",
    "transition",
    "duration-300"
   )
  );

 $header.appendChild($menuContent);
 //Click access from menu
 menuAccess();
}
