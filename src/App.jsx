import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import EservicesPage from "./pages/E-services-page/eservices.page";
import MainForm from "./components/main form/main-form.component";
import MainApp from "./pages/mainapp/mainapp.page";
import SecApp from "./pages/secondaryapp/secondaryapp.page";
import CheckElecMeter from "./pages/application/check elec meter/check-elec-meter.page";
import BillToCard from "./pages/application/bill to card/bill-to-card.page";
import StreetLighting from "./pages/application/install street lighting/street-lighting.page";
import CommericalToHome from "./pages/application/commerical to home/commerical-to-home.page";
import WeakElecProblem from "./pages/application/weak elec problem/weak-elec-problem.page";
import Objection from "./pages/application/objection/objection.paje";
import Maintenance from "./pages/application/maintenance/maintenance.page";
import ReduceInstallment from "./pages/application/reduce installment/reduce-installment.page";
import TemporaryToPermanent from "./pages/application/temporary to permanent/temporary-to-permanent.page";
import ModifyData from "./pages/application/modify-beneficiarys-data/modify-data.page";
import TransferPoles from "./pages/application/transfer poles/transfer-poles.page";
import Footer from "./components/footer/footer.component";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="eservices" element={<EservicesPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/checkElectricityMeter" element={<CheckElecMeter />} />
          <Route path="/billToCard" element={<BillToCard />} />
          <Route path="/streetLighting" element={<StreetLighting />} />
          <Route path="/commercialToHome" element={<CommericalToHome />} />
          <Route path="/weakElecProblem" element={<WeakElecProblem />} />
          <Route path="/objection" element={<Objection />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/reduceInstallment" element={<ReduceInstallment />} />
          <Route path="/temporaryToPermanent" element={<TemporaryToPermanent />} />
          <Route path="/modifybeneficiarysdata" element={<ModifyData />} />
          <Route path="/transferpoles" element={<TransferPoles />} />

          {/* <Route path="mainApp" element={<MainApp />} />
          <Route path="secondaryApp" element={<SecApp />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
