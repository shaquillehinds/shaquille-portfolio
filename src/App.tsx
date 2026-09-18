import "./assets/css/bootstrap.min.css";
import "./assets/css/lineawesome.min.css";
import "aos/dist/aos.css";
import "./css/App.scss";
import Global from "./components/Global";
import { useAOS } from "./hooks/useAOS";

function App() {
  useAOS();
  return <Global />;
}

export default App;
