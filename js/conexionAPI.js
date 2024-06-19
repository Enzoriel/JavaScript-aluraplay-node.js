async function listarVideos() {
  const conexion = await fetch("http://localhost:3001/videos");
  const conversion = await conexion.json();

  return conversion;
}

async function enviarVideos(titulo, descripcion, url, imagem) {
  const conexion = await fetch("http://localhost:3001/videos", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      titulo: titulo,
      descripcion: `${descripcion} mil`,
      url: url,
      imagem: imagem,
    }),
  });

  const conversion = await conexion.json();

  return conversion;
}

export const conversionAPI = {
  listarVideos,
  enviarVideos,
};
