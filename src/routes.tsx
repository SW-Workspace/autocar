import App from "./App";
import Us from "./pages/Landing/us/Us";
import Contact from "./pages/Landing/contacts/Contact";
import Offers from "./pages/Landing/offers/Offers";
import Login from "./pages/Auth/login/Login";
import Register from "./pages/Auth/register/Register";
import IndividualCar from "./pages/Landing/individualCar/IndividualCar";
import Business from "./pages/Landing/business/Business";
import ProtectedRoutes from "./pages/Auth/components/ProtectedRoutes";
import Overview from "./pages/Main/overview/Overview";
import Main from "./pages/Main/Main";
import Cars from "./pages/Main/cars/Cars";
import Settings from "./pages/Main/settings/Settings";
import Catalog from "./pages/Landing/catalog/Catalog";
import Recover from "./pages/Auth/Recover/Recover";
import Reset from "./pages/Auth/Reset/Reset";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <Us />,
      },
      {
        path: "business",
        element: <Business />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "vehicles/:id",
        element: <IndividualCar />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "recover",
        element: <Recover />,
      },
      {
        path: "reset",
        element: <Reset />,
      },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Main />,
        children: [
          {
            path: "inicio",
            element: <Overview />,
          },
          {
            path: "autos",
            element: <Cars />,
          },
          {
            path: "ajustes",
            element: <Settings />,
          },
        ],
      },
    ],
  },
];
