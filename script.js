document.addEventListener("keyup", (e) => {
  //colocamos el escucha a todo el documento, del evento "keyup" - evento de seleccion de alguna tecla
  console.log(e.target.value);
  //almacena en el target del evento, la tecla que presionamos

  if (e.target.matches("#buscador")) {
    //si hay algo en el input, entra

    if (e.key === "Escape") e.target.value = "";
    //limpia el input cuando presionan escape

    document.querySelectorAll(".articulo").forEach((fruta) => {
      fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? fruta.classList.remove("desaparece")
        : fruta.classList.add("desaparece");
    });
  }
});
