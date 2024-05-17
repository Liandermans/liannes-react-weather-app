import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather</h1>
        <Weather defaultCity="Berlin" />
        <footer>
          Open-source code on{" "}
          <a
            href="https://github.com/Liandermans/liannes-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          , hosted on{" "}
          <a
            href="https://liannes-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
