import App from "./App"
import LayoutUser from "./layout/LayoutUser"
import Us from "./pages/us/Us"
import Contact from "./pages/contacts/Contract"

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
            path: "contact",
            element: <Contact />
            }
        ]
    }
]
