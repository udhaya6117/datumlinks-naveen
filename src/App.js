import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Routingdata } from "./components/Routingdata";
import Landingpage from "./components/Landingpage";
import Homepage from "./components/navigations/Homepage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={Routingdata.LANDINGPAGE} element={<Landingpage />}>
            <Route path={Routingdata.LANDINGPAGEHOME} element={<Homepage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
