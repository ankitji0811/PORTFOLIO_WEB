import Currency from "../assets/converter.webp";
import Password from "../assets/password.png";
import Tictactoe from "../assets/tictactoe.png";
import Weather from "../assets/weather.jpg";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="flex flex-col items-center text-center mt-14 ">
      <h1 className="font-Rubik text-3xl text-gray-700 font-extrabold mb-14 xl:text-4xl">
        PROJECTS
      </h1>
      <div className="flex flex-col gap-14 items-center mb-10 xl:flex-row xl:items-center">
        <Project
          img={Currency}
          head="Converter"
          detail="Currency Converter"
          anchor="https://github.com/ankitji0811/Currency_Tracker_App"
        />
        <Project
          img={Password}
          head="Generator"
          detail="Password Generator"
          anchor="https://github.com/ankitji0811/PASSWORD_GENERATOR"
        />
        <Project
          img={Tictactoe}
          head="Game"
          detail="Tic Tac Toe"
          anchor="https://github.com/ankitji0811/TIC-TAC-TOE"
        />
        <Project
          img={Weather}
          head="Weather"
          detail="Live Weather"
          anchor="https://github.com/ankitji0811/JAVASCRIPT_PROJECT/tree/master/Weather%20API%20Website"
        />
      </div>
    </div>
  );
};

export default Projects;
