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

  if (!conexion.ok) {
    throw new Error("Ha ocurrido un error al intentar enviar el video");
  }

  return conversion;
}

async function buscarVideos(palabraClave) {
  const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
  const conversion = await conexion.json();

  return conversion;
}

export const conversionAPI = {
  listarVideos,
  enviarVideos,
  buscarVideos,
};
