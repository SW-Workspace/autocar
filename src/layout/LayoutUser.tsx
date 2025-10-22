import { Outlet } from "react-router-dom";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";

export default function LayoutUser(){
    return(
        <>
        <div>
            <Header/>
            <div className="h-full">
                <Outlet/>
            </div>
            <Footer/>
        </div>
        </>
    )
}