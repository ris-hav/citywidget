import React, { useState } from "react";
import "./App.css";
import Widget from "./components/Widget";
import mockData from "./mockData";
import MapComponent from "./components/MapComponent";
import Navbar from "./components/Navbar";
import DetailedInfoPage from "./components/DetailedInfoPage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function App() {
  const [alignment, setAlignment] = useState("top");
  const changeAlignment = (newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Router>
      <div className="app">
        <Navbar changeAlignment={changeAlignment} />
        <Routes>
          <Route
            exact
            path="/"
            element={<WidgetContainer alignment={alignment} />}
          />
          <Route
            path="/detail/:id"
            element={<DetailedInfoPage mockData={mockData} />}
          />
        </Routes>
        <ConditionalMap />
      </div>
    </Router>
  );
}

const WidgetContainer = ({ alignment }) => {
  return (
    <div className={`widget-container ${alignment}`}>
      {mockData.map((city) => (
        <Widget key={city.id} city={city} />
      ))}
    </div>
  );
};

const ConditionalMap = () => {
  const location = useLocation();
  if (location.pathname.includes("/detail")) {
    return null;
  }
  return <MapComponent />;
};

export default App;
