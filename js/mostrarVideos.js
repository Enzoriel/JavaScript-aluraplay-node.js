import { conversionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(titulo, descripcion, url, imagem) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `<iframe
          width="100%"
          height="72%"
          src="${url}"
          title="${titulo}"></iframe>
        <div class="descripcion-video">
          <img src="${imagem}"/>
          <h3>${titulo}</h3>
          <p>${descripcion}</p>
        </div>`;

  return video;
}

async function listarVideos() {
  const listaAPI = await conversionAPI.listarVideos();

  listaAPI.forEach((video) => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagem)));
}

listarVideos();