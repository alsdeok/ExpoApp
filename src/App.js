import "./App.css";
import video from "./videos/Vídeo.mp4";
import videoContacto from "./videos/VideoContacto.mp4";
import videoEventos from "./videos/VideoEventos.mp4";
import VideoReuniones from "./videos/VideoReuniones.mp4";
import videoFormulario from "./videos/VideoFormulario.mp4";
import videoListado from "./videos/VideoListado.mp4";
import videoPerfil from "./videos/VídeoPerfil.mp4";
import videoMultimedia from "./videos/VideoMultimedia.mp4";
import { Carousel, Typography } from "@material-tailwind/react";
import { useState } from "react";

function App() {
  const [estadoDiv, setEstadoDiv] = useState(true);
  const videos = [
    {
      descripcion: [
        "Una primera vista sencilla, diseñada por la misma empresa.",
        "Tiene un background cambiante en base al display en uso.",
        "Cuenta con una navbar sencilla la cual permite el ingreso a la aplicacion y un footer con datos relevantes, ambos presentes en todo momento.",
      ],
      titulo: "Pagina de Inicio",
      video: video,
    },
    {
      descripcion: [
        "Muestra una carta simple con informacion personal y la opcion de",
        "solicitar solicitar nivel de acceso.",
        "Todo de manera responsive.",
      ],
      titulo: "Perfil Personal",
      video: videoPerfil,
    },
    {
      descripcion: [
        "Un formulario con acceso a travez del footer.",
        "Dentro de la app se visualiza un listado de los mensajes con su estado, y la posibilidad de eliminar, ampliar o responder.",
        "En caso de ser respondido, se envia un email con la respuesta.",
      ],
      titulo: "Apartado de Contacto",
      video: videoContacto,
    },
    {
      descripcion: [
        "Apartado destinado a cargar y descargar archivos en formatos para PDF, Video, Power Point, y otros necesarios.",
        "Al contar la empresa con dos sedes, necesariamente los archivos son discriminados por el lugar establecido.",
        "Todo su contenido es responsive.",
      ],
      titulo: "Sector de Multimedia",
      video: videoMultimedia,
    },
    {
      descripcion: [
        "Calendario con capacidad de visualizar,crear y editar eventos en base al nivel de acceso.",
        "Incluye la opcion de agregar un evento y que se repita todos los dias asignados del mes.",
        "Presenta tambien su modo responsive con un diseño intuitivo.",
      ],
      titulo: "Calendario",
      video: videoEventos,
    },
    {
      descripcion: [
        "Un apartado utilizado para crear la organizacion de las reuniones presenciales de la empresa.",
        "Con un componente capaz de arrastrar elementos ( para ordenar de manera necesaria ) y cambios en vivo reflejados en un resumen.",
        "Cuenta tambien con un historial de las reuniones previas y su modo responsive.",
      ],
      titulo: "Apartado Reuniones",
      video: VideoReuniones,
    },
    {
      descripcion: [
        "Componente mediante el cual se ingresan datos de los integrantes de la empresa.",
        "Los datos requeridos se amoldan a la necesidad de la misma.",
        "Tambien cuenta con su modo responsive.",
      ],
      titulo: "Formulario",
      video: videoFormulario,
    },
    {
      descripcion: [
        "Lista de todos los datos ingresados mediante el formulario.",
        "Cuenta con un paginado, posibilidad de busqueda y distintos filtros que la empresa necesita.",
      ],
      titulo: "Listado de integrantes",
      video: videoListado,
    },
  ];

  return (
    <div>
      <div className="text-center min-h-screen flex flex-col items-center justify-center text-white text-2xl p-5 border-b-2 border-dotted border-black bg-[#282c34]">
        <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Mi Aplicacion de Organizacion
        </h1>
        <h3 className="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          Esta app es usada actualmente para una empresa que necesita mantener
          una organizacion de su personal, elementos, eventos y demas, de manera
          simple, sencilla y de facil interaccion. Cuando gustes desliza para
          explorar las distintas partes que la componen.
        </h3>
        <p className="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          Su exploracion consiste en una serie de videos por cada parte de la
          pagina. Podras comprender que, por motivos de privacidad, cualquier
          nombre y/o palabra relacionada a la empresa o a mi persona que
          aparezca en el video, tendra que ser censurado.
        </p>

        <svg
          className="mt-10 w-20 h-20 text-white-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 8"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
          />
        </svg>
      </div>
      <div className="text-center min-h-screen flex flex-col items-center justify-center text-white text-2xl p-10 border-b-2 border-dotted border-black bg-[#282c34]">
        <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Caracteristicas Generales
        </h1>
        <div className="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          La aplicacion cuenta con una arquitectura que contiene:
          <ul>
            <li className="text-justify">
              <p className="text-decoration-line: underline inline">
                FrontEnd:
              </p>{" "}
              Una aplicacion construida con ReactJS, y con el uso de
              React-Router, Redux, Fetching de datos y tailwindcss.
            </li>
            <li className="text-justify">
              <p className="text-decoration-line: underline inline">BakcEnd:</p>{" "}
              Una aplicacion construida en un entorno de NodeJS, mediante el uso
              del framework Express, el cual define controladores y servicios
              que interactuan con una base de datos PostgresSQL mediante el ORM
              Sequelize. El servidor se encuentra alojado en distintas
              instancias en amazon medieante el servicio de EC2.
            </li>
          </ul>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="flex flex-col md:flex-row justify-around mt-4 border-r border-l border-white">
            <div className="md:w-2/4 md:border-r p-2 md:pr-10">
              <p className="text-decoration-line: underline inline">
                {" "}
                Otras tecnologias y frameworks utilizados:{" "}
              </p>
              <ul className="mt-2">
                <li>Express-session</li>
                <li>Jsonwebtoken</li>
                <li>Morgan</li>
                <li>Multer</li>
                <li>Nodemailer</li>
                <li>Passport</li>
                <li>Google-oauth2</li>
              </ul>
            </div>
            <hr className="md:hidden h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="md:w-2/4">
              <p className="text-decoration-line: underline inline">
                {" "}
                Principales utilidades:
              </p>
              <ul className="mt-2">
                <li>Organizacion</li>
                <li>Listados</li>
                <li>Calendario de eventos</li>
                <li>Uso de sesiones</li>
                <li>Administracion de permisos</li>
                <li>Roles/Niveles de accesos</li>
                <li>Autorizacion mediante Google</li>
              </ul>
            </div>
          </div>
        </div>
        <svg
          className="mt-10 w-20 h-20 text-white-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 8"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
          />
        </svg>
      </div>
      <Carousel className="bg-[#282c34]">
        {videos.map((video, index) => {
          return (
            <div key={index}>
              <div className="relative h-screen w-full flex items-center place-content-center">
                <div className="flex justify-center w-full">
                  <video
                    src={video.video}
                    className="rounded-xl"
                    width="800"
                    height="500"
                    controls
                  />
                </div>
                {estadoDiv ? null : (
                  <button
                    className="absolute text-lg font-semibold top-20  md:right-10 md:top-10 bg-white/30 hover:bg-white rounded-lg px-2 py-1"
                    onClick={() => setEstadoDiv(true)}
                  >
                    Detalle
                  </button>
                )}
                {estadoDiv ? (
                  <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/90">
                    <button
                      className="absolute text-lg font-semibold top-20 md:right-10 md:top-10 bg-white/50 hover:bg-white rounded-lg px-3 py-1"
                      onClick={() => setEstadoDiv(false)}
                    >
                      Cerrar
                    </button>

                    <div className="w-3/4 text-center md:w-2/4">
                      <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                      >
                        {video.titulo}
                      </Typography>
                      <Typography
                        variant="lead"
                        color="white"
                        className="mb-12 opacity-80"
                      >
                        {video.descripcion.map((parrafo, index) => (
                          <p key={index}>{parrafo}</p>
                        ))}
                      </Typography>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default App;
