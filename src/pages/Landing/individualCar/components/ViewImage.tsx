import { X } from "lucide-react";
import { useState, useEffect } from "react"

interface ImagePros{
    urls_img: string[];
    open: boolean;
    index: number;
    onClose: () => void;
}

export default function ViewImage(props: ImagePros){
    const [index, setIndex] = useState(props.index);
    
    const handleClick = (index:number) => {
        setIndex(index);
    }

    useEffect(()=>{
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") props.onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
         return () => document.removeEventListener("keydown", handleKeyDown);
    },[])
    
    if (!props.open) return null;

    return(
        <>
        <dialog className={`fixed top-0 z-110 flex flex-col gap-1 justify-center items-center w-full h-full bg-black/70 backdrop-blur-2xl`}>
            
            <button
                className="absolute left-10 top-5 bg-[var(--yellow-secondary)] p-1 rounded-sm cursor-pointer"
                onClick={props.onClose}
            >
                <X/>
            </button>
            
            <div className="flex items-center justify-center w-full h-90 md:h-120 px-4">
                <img 
                    src={props.urls_img[index]}
                    className=" w-full h-80 md:w-[70%] md:h-100 lg:w-[60%] lg:h-110 rounded-lg" 
                />
            </div>
            
            <div className="flex flex-wrap gap-3 w-full justify-center items-center">
                {props.urls_img.map((data, i) =>(
                    <img
                        key={i} 
                        src={data}
                        className={`w-30 h-20 rounded-lg cursor-pointer bg-[var(--green-primary)] ${index == i ? "opacity-20": "opacity-100"}`}
                        onClick={()=> handleClick(i)}
                    />
                ))}
            </div>

        </dialog>
        </>
    )
}