import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import EmpLoginPage from "./pages/emp-login/Emp-login.page";
import EservicesPage from "./pages/E-services-page/eservices.page";
import MainForm from "./components/main form/main-form.component";
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
import CSE_Dashboard from "./pages/CSE-Dashboard/CSE-Dashboard.page";
import Customer_Dashboard from "./pages/customer-Dashboard/customer-Dashboard.page";
import View_Subscription from "./components/Customer/view_subscription/view-subscription.component";
import View_Application from "./components/Customer/view-applications/view-application.component";
import Admin_Dashboard from "./pages/Admin-Dashboard/admin-Dashboard.paje";
import PRE_Dashboard from "./pages/PRE-Dashboard/PRE-Dashboard.page";
import SignUpPage from "./pages/signup/signup.page";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="eservices" element={<EservicesPage />} />
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="emp/login" element={<EmpLoginPage />} /> */}
          <Route path="/checkElectricityMeter" element={<CheckElecMeter />} />
          <Route path="/billToCard" element={<BillToCard />} />
          <Route path="/streetLighting" element={<StreetLighting />} />
          <Route path="/commercialToHome" element={<CommericalToHome />} />
          <Route path="/weakElecProblem" element={<WeakElecProblem />} />
          <Route path="/objection" element={<Objection />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/reduceInstallment" element={<ReduceInstallment />} />
          <Route
            path="/temporaryToPermanent"
            element={<TemporaryToPermanent />}
          />
          <Route path="/modifybeneficiarysdata" element={<ModifyData />} />
          <Route path="/transferpoles" element={<TransferPoles />} />
          <Route path="/CSE_Dashboard" element={<CSE_Dashboard />} />
          {/* <Route path="/customer_Dashboard" element={<Customer_Dashboard />} /> */}
          <Route path="/view-subscription" element={<View_Subscription />} />
          <Route path="/view-application" element={<View_Application />} />
          <Route path="Admin_Dashboard" element={<Admin_Dashboard />} />
          <Route path="PRE_Dashboard" element={<PRE_Dashboard />} />
          <Route path="/signup" element={<SignUpPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
