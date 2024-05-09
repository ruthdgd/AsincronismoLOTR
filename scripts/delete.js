// delete.js
import { crearCardDetalle, imprimirCard } from "./get.js";

document.addEventListener("DOMContentLoaded", () => { 
  document.body.addEventListener("click", function (event) {   
    if (
      event.target.classList.contains("boton-form") &&
      event.target.id === "borrado"
    ) {
      const idPersonaje = event.target.getAttribute("data-id")
      if (!idPersonaje) {
        console.error("No se proporcionó un ID de personaje.")
        return
      }

      fetch(
        `https://66230da83e17a3ac846e8339.mockapi.io/api/personaje/${idPersonaje}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Error en la respuesta del servidor: " + response.statusText
            )
          }
          return response.json() 
        })
        .then(() => {
          console.log("Personaje eliminado")
          event.target.closest(".card-l").remove()
        })
        .catch((error) => {
          console.error("Error al eliminar el personaje:", error)
        })
    }
  })
})