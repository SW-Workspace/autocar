import { X, ArrowLeft ,ArrowRight, MapPin } from "lucide-react";
import { departmentsColombia } from "../data/data";
import { useState } from "react";

interface ModalLocationProps{
    open: boolean;
    onClose: () => void;
    location: string;
}

export default function ModalLocation(props:ModalLocationProps){
    const [steps, setSteps] = useState(0);

    return( 
        <>
        <dialog className="fixed top-0 left-0 flex items-center justify-center w-full h-full z-100 bg-black/70 backdrop-blur-2xl">
            <button 
                className="absolute top-5 left-5 bg-[var(--yellow-secondary)] rounded-lg p-1 cursor-pointer"
                onClick={props.onClose}
            >
                <X/>
            </button>
            <div className="bg-white w-[50%] h-120 rounded-lg overflow-y-auto p-4 flex flex-col gap-2">
                <span className="text-xl font-bold">Ubicaciones disponibles</span>
                {steps == 0 && departmentsColombia.map((data) =>(
                        <div 
                            className={`w-full flex justify-between items-center px-2 py-4 rounded-lg cursor-pointer 
                                ${props.location == data.capital || props.location == data.name? "text-white bg-[var(--blue-tertiary)]": "text-gray-600 bg-gray-200 border pointer-events-none"}`
                            }
                            onClick={() => setSteps(1)}
                            >
                            <div className="flex gap-2 items-center">
                                <MapPin/>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-lg">{data.name}</span>
                                </div>
                            </div>
                        <ArrowRight/>
                    </div>
                ))}
                {steps == 1 &&
                    <div className="flex flex-col h-full">
                        <ArrowLeft onClick={() => setSteps(0)}/>
                        <div className="flex justify-center items-center w-full h-full">
                            <span>{props.location}</span>
                        </div>
                    </div>
                }
            </div>
        </dialog>
        </>
    )
}