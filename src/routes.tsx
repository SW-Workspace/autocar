import App from "./App"
import LayoutUser from "./layout/LayoutUser"
import Us from "./pages/us/Us"
import Offers from "./pages/offers/Offers"

export const routes = [
    {
        path: "/",
        element: <LayoutUser/>,
        children: [
            {
                path: "",
                element: <App/>
            },
            {
                path: "about",
                element: <Us/> 
            },
            {
                path: "offers",
                element: <Offers/>
            }

        ]
    }
]

