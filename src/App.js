import "./App.css";
import video from "./videos/Vídeo.mp4";
import videoContacto from "./videos/VideoContacto.mp4";
import videoEventos from "./videos/VideoEventos.mp4";
import VideoReuniones from "./videos/VideoReuniones.mp4";
import videoFormulario from "./videos/VideoFormulario.mp4";
import videoListado from "./videos/VideoListado.mp4";
import videoPerfil from "./videos/VídeoPerfil.mp4";
import videoMultimedia from "./videos/VideoMultimedia.mp4";
function App() {
  const videos = [
    {
      descripcion: "Apartado de ",
      titulo: "Landing Page",
      video: video,
    },
    {
      descripcion: "Apartado de Perfil ",
      titulo: "Landing Page",
      video: videoPerfil,
    },
    {
      descripcion: "Apartado de Contacto ",
      titulo: "Apartado Contacto",
      video: videoContacto,
    },
    {
      descripcion: "Apartado de Multimedia ",
      titulo: "Apartado Multimedia",
      video: videoMultimedia,
    },
    {
      descripcion: "Apartado de Eventos ",
      titulo: "Apartado Eventos",
      video: videoEventos,
    },
    {
      descripcion: "Apartado de Reuniones ",
      titulo: "Apartado Reuniones",
      video: VideoReuniones,
    },
    {
      descripcion: "Apartado de Formulario ",
      titulo: "Apartado Formulario",
      video: videoFormulario,
    },
    {
      descripcion: "Apartado de Listado ",
      titulo: "Apartado Listado",
      video: videoListado,
    },
  ];

  return (
    <div className="App">
      <div className="App-header">
        <h1>Mi Aplicacion Web</h1>
        <h3>
          Esta app es usada actualmente para una empresa que necesita mantener
          una organizacion de su personal, elementos, eventos y demas, de manera
          simple, sencilla y de facil interaccion.
        </h3>
        <h4>
          Puedes ir bajando para explorar las distintas partes que la componen
        </h4>
        <p>
          Su exploracion consiste en una serie de videos por cada parte de la
          pagina, podras comprender que, por motivos de privacidad, cualquier
          nombre y/o palabra relacionada a la empresa o a mi persona que
          aparezca en el video, tendra que ser censurado.
        </p>
        <div className="arrow"></div>
      </div>

      {videos.map((video) => {
        return (
          <div key={video.descripcion} className="App-header">
            <h1>{video.titulo}</h1>
            <p>{video.descripcion}</p>
            <video src={video.video} width="800" height="500" controls />
          </div>
        );
      })}
    </div>
  );
}

export default App;
