import { conversionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function filtrarVideos(evento) {
  evento.preventDefault();

  const datos = document.querySelector("[data-busqueda]").value;
  const busqueda = await conversionAPI.buscarVideos(datos);

  const lista = document.querySelector("[data-lista]");

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  busqueda.forEach((video) => {
    lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagem));
  });

  if (busqueda.length == 0) {
    lista.innerHTML = `<h2 class="mensaje__titulo">No se ha encontrado ningún video, mostro.<h2>`;
  }
}

const boton = document.querySelector("[data-boton-busqueda");

boton.addEventListener("click", (evento) => filtrarVideos(evento));
