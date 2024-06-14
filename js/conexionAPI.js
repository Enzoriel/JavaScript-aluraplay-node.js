async function listarVideos() {
  const conexion = await fetch("http://localhost:3001/videos");
  const conversion = conexion.json();

  return conversion;

  //   console.log(conversion);
}

export const conversionAPI = {
  listarVideos,
};

// listarVideos();
