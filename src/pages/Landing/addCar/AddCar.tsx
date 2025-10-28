import Title from "./components/Title";
import BasicInformation from "./components/BasicInformation";
import CarCapacity from "./components/CarCapacity";
import TechnicalSpecifications from "./components/TechnicalSpecifications";
import CarFeatures from "./components/CarFeatures";
import IncomeInformation from "./components/IncomeInformation";
import AdditionalInformation from "./components/AdditionalInformation";
import CarImages from "./components/CarImages";
import { carSchema, type CarFormData } from "./schemas/carSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AddCar() {
    const {
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<CarFormData>({
        resolver: zodResolver(carSchema),
        defaultValues: {}
    });

    const formData = watch();

    const onSubmit = (data: Partial<CarFormData>) => {
        console.log('Formulario válido:', data);
    };

    const updateFormData = (field: keyof CarFormData, value: any) => {
        setValue(field, value);
    };

    return (
        <div className="flex w-full bg-gray-50 bg-gradient-to-br from-[var(--blue-tertiary)] to-[var(--green-primary)]">
            <Link 
                to="/catalog"
                className="hidden lg:flex absolute top-10 left-30 items-center text-white text-sm"
                >
                <ArrowLeft size={18}/>
                Regresar
            </Link>
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                <Title />

                    <form className="p-6 space-y-2" onSubmit={handleSubmit(onSubmit)}>
                        <BasicInformation
                            formData={formData}
                            setFormData={updateFormData}
                            errors={errors}
                         />
                        <CarCapacity 
                            formData={formData}
                            setFormData={updateFormData}
                            errors={errors}
                        />
                        <TechnicalSpecifications 
                            formData={formData}
                            setFormData={updateFormData}
                            errors={errors}
                        />
                        <CarFeatures 
                            formData={formData}
                            setFormData={updateFormData}
                            errors={errors}
                        />
                        <IncomeInformation 
                            formData={formData}
                            setFormData={updateFormData}
                            errors={errors}
                        />
                        <AdditionalInformation 
                            formData={formData}
                            setFormData={updateFormData}
                            errors={errors}
                        />
                        <CarImages 
                            formData={formData}
                            setFormData={updateFormData}
                            errors={errors}
                        />
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t">
                            <button 
                                type="button"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                            >
                                Cancelar
                            </button>
                            <button 
                                type="submit"
                                className="px-6 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-colors font-medium shadow-lg"
                            >
                                Publicar Auto
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    }