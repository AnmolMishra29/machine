import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDisplay from "./components/MainDisplay";
import HomePage from "./Dashboard/HomePage";
import DataAquisation from "./Dashboard/dataaquisation/DataAquisation";
import FactoryRegistration from "./registration/FactoryRegistration";
import FloorRegistration from "./registration/FloorRegistration";
import MachineRegistration from "./registration/MachineRegistration";
import OperatorRegistration from "./registration/OperatorRegistration";
import ProductRegistration from "./registration/ProductRegistration";
import ShiftRegistration from "./registration/ShiftRegistration";
import Extra from "./components/Extra";
import Database from "./Dashboard/dataaquisation/Database";
import Cron from "./Dashboard/dataaquisation/Cron";
import RabbitMQ from "./Dashboard/dataaquisation/RabbitMQ";
import Proficy from "./Dashboard/dataaquisation/Proficy";
import FileShare from "./Dashboard/dataaquisation/FileShare";
import Email from "./Dashboard/dataaquisation/Email";
import ProductionPage from "./components/production/ProductionPage";
import Charts from "./components/production/Charts";
import Char from "./components/production/Char";
function App() {
  return (
    <>
      <div className="App">
        <Char />
      </div>
      {/* <RabbitMQ /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/dataaquisation" element={<DataAquisation />} />
          <Route
            exact
            path="factoryregistration"
            element={<FactoryRegistration />}
          />
          <Route
            exact
            path="machineregistration"
            element={<MachineRegistration />}
          />
          <Route
            exact
            path="operatorregistration"
            element={<OperatorRegistration />}
          />
          <Route
            exact
            path="shiftregistration"
            element={<ShiftRegistration />}
          />
          <Route
            exact
            path="productregistration"
            element={<ProductRegistration />}
          />
          <Route exact path="database" element={<Database />} />
          <Route exact path="email" element={<Email />} />
          <Route exact path="proficy" element={<Proficy />} />
          <Route exact path="fileshare" element={<FileShare />} />
          <Route exact path="cron" element={<Cron />} />
          <Route exact path="rabbitmq" element={<RabbitMQ />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
