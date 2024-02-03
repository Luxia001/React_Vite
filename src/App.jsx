import "./App.css";
import Item from "./components/Item";
import logo from "./assets/logo.png";
import content from "./data/content.js";

function App() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h2>Tools develop web React + Vite</h2>
      {content.map((data) => {
        return <Item key={data.id} {...data}></Item>;
      })}
    </div>
  );
}

export default App;
