const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const validaCampoA = document.getElementById("campo-a");
  let valid = true;

  if (!validaCampoA.value) {
    const numberError = document.getElementById("numberError");
    numberError.classList.add("visible");
    validaCampoA.classList.add("invalid");
    numberError.setAttribute("aria-hidden", false);
    numberError.setAttribute("aria-invalid", true);
  }
  return valid;
}
