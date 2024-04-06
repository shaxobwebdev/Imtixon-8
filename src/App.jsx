import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout/layout";
import Transfers from "./pages/Transfers";
import JobOpen from "./pages/JobOpen";
import Tender from "./pages/Tender";
import Contact from "./components/Contact";
import Catalog from "./pages/Catalogs";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPasword";
import Signup from "./pages/Signup";
import Shop from "./components/Shop";
import Home from "./pages/Home";
import Contacts from "./components/Contacts";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="signup" element={<Signup />} />
        <Route path="forgotpasword" element={<ForgotPasword />} /> */}
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/shopp" element={<Shop />} />
        <Route path="/profile" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vacancies" element={<JobOpen />} />
        <Route path="/tender" element={<Tender />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
