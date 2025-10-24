import App from "./App";
import Us from "./pages/Landing/us/Us";
import Contact from "./pages/Landing/contacts/Contact";
import Offers from "./pages/Landing/offers/Offers";
import Login from "./pages/Landing/auth/login/login";
import Register from "./pages/Landing/auth/register/register";
import IndividualCar from "./pages/Landing/individualCar/IndividualCar";

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
        path: "contact",
        element: <Contact />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "car-info",
        element: <IndividualCar/>
      }
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
    ]
  }
];
