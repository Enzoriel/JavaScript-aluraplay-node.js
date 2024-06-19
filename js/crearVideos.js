import { conversionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

console.log("Estoy aca 1");

async function crearVideos(evento) {
  evento.preventDefault();

  const titulo = document.querySelector("[data-titulo]").value;
  const url = document.querySelector("[data-url]").value;
  const imagem = document.querySelector("[data-imagen]").value;

  const descripcion = Math.floor(Math.random * 10).toString();

  await conversionAPI.enviarVideos(titulo, descripcion, url, imagem);

  window.location.href = "../pages/envio-concluido.html";

  console.log("Estoy aca 2");
}

formulario.addEventListener("submit", (evento) => {
  crearVideos(evento);
  console.log("Estoy aca 3");
});
