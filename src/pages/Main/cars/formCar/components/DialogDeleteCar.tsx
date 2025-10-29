import { supabaseDeleteCarForRentById } from "@/shared/services/carForRent/carForRent.service"
import { Link } from "react-router-dom";

interface DialogDeleteCar{
    id: number;
    open: boolean;
    onClose: () => void;
}

export default function DialogDeleteCar(props: DialogDeleteCar){
    const handleClick = async() => {
        await supabaseDeleteCarForRentById(props.id)
    }

    if (!props.open) return null;

    return(
        <>
        <div className="absolute top-0 flex items-center justify-centerh-full w-full z-100 bg-black/70 backdrop-blur-2xl">
            <div className="flex flex-col bg-white rounded-lg">
                <span>Esta seguro de eliminar este auto ?</span>
                <div>
                    <button
                        onClick={props.onClose}
                    >
                        Cancelar
                    </button>
                    <button // to={"/dashboard/autos"}
                        onClick={() => {
                            handleClick; 
                            props.onClose;
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            </div>    
        </div>
        </>
    )
}