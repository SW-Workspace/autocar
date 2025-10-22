import App from "./App"
import LayoutUser from "./layout/LayoutUser"

export const routes = [
    {
        path: "/",
        element: <LayoutUser/>,
        children: [
            {
                path: "",
                element: <App/>
            }

        ]
    }
]

