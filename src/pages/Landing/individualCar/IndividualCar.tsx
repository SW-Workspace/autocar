import ContainerPreview from "./components/ContainerPreview"
import ContainerInfo from "./components/ContainerInfo"

export default function IndividualCar(){
    return(
        <>
        <div className="w-full flex items-center mt-15">
            <div className="flex gap-10">
                <ContainerPreview/>
                <ContainerInfo/>
            </div>
        </div>
        </>
    )
}