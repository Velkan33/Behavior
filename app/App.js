import { article1 } from "./components/article1.js";
import { article2 } from "./components/article2.js";
import { article3 } from "./components/article3.js";
import { article4 } from "./components/article4.js";
import { article5 } from "./components/article5.js";
import { footer } from "./components/footer.js";
import { header } from "./components/header.js";
import { style } from "./Style.js";
export function App() {
 let d = document;
 style();
 header();
 article1();
 article2();
 article3();
 article4();
 article5();
 footer();

 d.querySelector("header button").addEventListener("click", (e) => {
  d.querySelector("#article1").scrollIntoView({ behavior: "smooth" });
 });
}
