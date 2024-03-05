import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Routingdata } from "./components/Routingdata";
import Landingpage from "./components/Landingpage";
import Homepage from "./components/navigations/Homepage";
import Aboutuspage from "./components/navigations/Aboutuspage";
import Servicespage from "./components/navigations/Servicespage";
import Workpage from "./components/navigations/Workpage";
import Resourcespage from "./components/navigations/Resourcespage"
import WorkDetails from "./components/navigations/WorkDetails";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={Routingdata.LANDINGPAGE} element={<Landingpage />}>
            <Route path={Routingdata.LANDINGPAGEHOME} element={<Homepage />} />
            <Route path={Routingdata.ABOUTUSPAGE} element={<Aboutuspage/>} />
            <Route path={Routingdata.SERVICESPAGE} element={<Servicespage/>} />
            <Route path={Routingdata.WORKPAGE} element={<Workpage/>} />
            <Route path={Routingdata.RESOURCES} element={<Resourcespage/>} />
            <Route path={Routingdata.WORKDETAILSPAGE} element={<WorkDetails/>} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
