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
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full z-100 bg-black/70 backdrop-blur-2xl">
            <div className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4 h-40">
                <span>Esta seguro de eliminar este auto ?</span>
                <div className="flex justify-around">
                    <button
                        onClick={props.onClose}
                        className="border border-[var(--red-quartenary)] text-[var(--red-quartenary)] px-2 py-1 rounded-lg font-semibold cursor-pointer"
                    >
                        Cancelar
                    </button>
                    <Link to={"/dashboard/autos"}
                        onClick={() => {
                            handleClick; 
                            props.onClose;
                        }}
                        className="bg-[var(--red-quartenary)] text-white px-2 py-1 rounded-lg font-semibold"
                    >
                        Eliminar
                    </Link>
                </div>
            </div>    
        </div>
        </>
    )
}