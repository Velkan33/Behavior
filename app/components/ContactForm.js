/**============================================
 **               Lesson 157
 *=============================================**/
/**==============================================
 * *                   INFO
 *   *En esta clase vamos a ver como se escribe codigo
 *   CSS desde el javascript mediante el inner HTML
 *   en la etiqueta STYLE del index.html, tambien el
 *   *Usar el setTime out para esperar la carga de elementos
 *   en el DOM.
 *   *El uso de la conrabarra \ en template strings
 *   para indicar que es una contrabarra textual
 *=============================================**/
export function ContactForm() {
 const d = document,
  $form = d.createElement("form");

 location.hash = "contact";
 scrollTo({ top: 0 });
 $form.classList.add("contact-form");
 $form.innerHTML = `<legend>Send your Comments</legend>
          <input
            type="text"
            name="name"
            placeholder="Please tell us your name"
            pattern="^[a-zA-zÑñÁáÉéÍíÓóÚúÜü\\s]+$"
            title="Name only takes letters and white spaces."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Please give us your email"
            title="Please give us a valid email address to contact you."
            pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@([a-z0-9-]+)*(\\.[a-z]{2,15})$"
            required
          />
          <input
            type="text"
            placeholder="Main topic"
            title="Please write the main idea of your comment"
            name="subject"
            required
          />
          <textarea
            name="comments"
            cols="50"
            rows="5"
            placeholder="Write your comment"
            data-pattern="^.{1,255}$"
            title="Please write a valid comment (255 characters maximum)"
            required
          ></textarea>
          <input type="submit" value="Send" />
          <div class="contact-form-loader none">
            <img src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg" width="35rem" alt="Cargando" style="background-color:gray"/>
          </div>
          <div class="contact-form-response none">
            <p>Your comment has been sent correctly.</p>
          </div>`;

 function formValidation() {
  let $form = d.querySelector(".contact-form"),
   $inputs = d.querySelectorAll(".contact-form [required]");
  //Por cada input con el atributo [required]
  $inputs.forEach((input) => {
   let $span = d.createElement("span");
   $span.id = input.name;
   $span.textContent = input.title;
   $span.classList.add("contact-form-error", "none");
   input.insertAdjacentElement("afterEnd", $span);
  });
  //Cada vez que se pulse una tecla
  d.addEventListener("keyup", (e) => {
   let $input = e.target,
    //el pattern es igual al pattern o al valor de dataset pattern
    pattern = $input.pattern || $input.dataset.pattern;
   if (e.target.matches(".contact-form [required]")) {
    //si tiene pattern
    if (pattern && $input.value.length !== 0) {
     let regex = new RegExp(pattern);
     return !regex.exec($input.value)
      ? d.getElementById($input.name).classList.add("is-active")
      : d.getElementById($input.name).classList.remove("is-active");
    }
    //Si no tienen pattern
    if (!pattern) {
     return !$input.value
      ? d.getElementById($input.name).classList.add("is-active")
      : d.getElementById($input.name).classList.remove("is-active");
    }
   }
  });
  d.addEventListener("submit", (e) => {
   e.preventDefault();
   const $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");
   $loader.classList.remove("none");

   $form.querySelector('[type="submit"]').classList.add("none");
   fetch("https://formsubmit.co/ajax/", {
    method: "POST",
    body: new FormData(e.target),
   })
    .then((res) => (res.ok ? res.json : Promise.reject("Ocurrio un error")))
    .then((json) => {
     $loader.classList.add("none");
     $response.classList.remove("none");
     $form.reset();
     setTimeout((e) => {
      $response.classList.add("none");
      $form.querySelector('[type="submit"]').classList.remove("none");
     }, 2000);
    });
  });
 }
 setTimeout(() => {
  formValidation();
 }, 100);

 return $form;
}
