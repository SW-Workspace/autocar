import App from "./App";
import Us from "./pages/Landing/us/Us";
import Contact from "./pages/Landing/contacts/Contact";
import Offers from "./pages/Landing/offers/Offers";

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
    ],
  },
];
