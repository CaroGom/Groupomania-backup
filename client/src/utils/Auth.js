import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Accueil from "../components/Accueil";
const Auth = () => {
  let token = localStorage.getItem('token');
  return token === null ? <Accueil /> : <Outlet />;
};

export default Auth;