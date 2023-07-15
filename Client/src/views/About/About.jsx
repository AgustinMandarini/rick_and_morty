import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Rick and Morty App</h1>
        <h2>by Agustin Mandarini</h2>
        <br />
        <h2>Sobre la app:</h2>
        <p>
          Si queres recorrer todos los universos paralelos de la serie, con sus
          personajes y planetas, o simplemente sos otro fan mas de Rick and
          Morty, por eso creamos esta app que permite agregar tarjetas de
          personajes a nuestro menu buscandolos por su ID correspondiente. Para
          esto, nuestra app consume la{" "}
          <a href="https://rickandmortyapi.com/about">"Rick and morty API"</a>{" "}
          que nos da una base de datos de 826 personajes!
        </p>
        <h2>Sobre el creador: </h2>
        <p>
          Mi nombre es Agustin Mandarini, soy estudiante de Desarrollo Web Full
          Stack del bootcam Soy Henry, y este es nuestro primer proyecto de
          desarrollo como estudiantes, que lo disfrutes!
        </p>
      </div>
    </div>
  );
};

export default About;
