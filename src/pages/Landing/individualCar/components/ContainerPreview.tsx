import { User, Luggage, Gauge } from "lucide-react"

export default function ContainerPreview(){
    return(
        <>
        <div className="relative flex flex-col gap-5 flex-1 bg-linear-to-br from-[#0056A4] to-[#004079] px-6">
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#1a67ad90_2px,transparent_0.2px)] [background-size:36px_36px]" />
            <div className="z-90 flex flex-col gap-4">
                <img 
                src="https://v0-car-rental-page-seven.vercel.app/sedan-car-red-modern.jpg"
                className="w-full h-[60%] rounded-lg object-cover"
            />
            <div className="flex gap-2 justify-around w-full">
                <div className="flex gap-1 items-center bg-white p-1 rounded-lg">
                    <User/>
                    <span>5 Pasajeros</span>
                </div>
                <div className="flex gap-1 items-center bg-white p-1 rounded-lg">
                    <Luggage/>
                    <span>3 Maletas</span>
                </div>
                <div className="flex gap-1 items-center bg-white p-1 rounded-lg">
                    <Gauge/>
                    <span>Manual</span>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}