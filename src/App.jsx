import "./App.css";

import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <CustomNavbar title="Epic Restaurant" />
      <Home />
    </div>
  );
};

export default App;
