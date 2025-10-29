import BasicInformation from "./Components/BasicInformation";
import CarCapacity from "./Components/CarCapacity";
import TechnicalSpecifications from "./Components/TechnicalSpecifications";
import CarFeatures from "./Components/CarFeatures";
import IncomeInformation from "./Components/IncomeInformation";
import AdditionalInformation from "./Components/AdditionalInformation";
import CarImages from "./Components/CarImages";
import { carSchema, type CarFormData } from "./schemas/carSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { supabaseCreateCarForRent } from "@/shared/services/carForRent/carForRent.service";
import type { SB_CarForRentModel } from "@/shared/models/carForRent/carForRent.model";
import { useState } from "react";
import { supabase } from "@/config/supabase/supabase";
import { useAuth } from "@/shared/hooks/useAuth";

export default function AddCar() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null);
    const { user } = useAuth()

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

    const mapFormDataToSupabase = async (formData: CarFormData): Promise<Partial<SB_CarForRentModel>> => {
        const imageUrls = formData.urls_img && formData.urls_img.length > 0 
            ? await uploadImagesToStorage(formData.urls_img as File[])
            : [];

        return {
            group: formData.group || "",
            brand: formData.brand || "",
            year: formData.year,
            passenger_capacity: formData.passenger_capacity || 0,
            luggage_capacity: formData.luggage_capacity || 0,
            transmission: formData.transmission || "",
            travel_conditions: formData.travel_conditions,
            fuel_type: formData.fuel_type,
            pick_up_location: formData.pick_up_location || "",
            available: true,
            rent_per_day: formData.rent_per_day || 0,
            rental_duraction_days: formData.rental_duraction_days,
            details: formData.details,
            car_doors: formData.car_doors || 0,
            air_conditioning: formData.air_conditioning || false,
            power_steering: formData.power_steering || false,
            front_airbags: formData.front_airbags || false,
            radio: formData.radio || false,
            central_locking: formData.central_locking || false,
            abs: formData.abs || false,
            fuel_consumption: formData.fuel_consumption || "",
            engine: formData.engine || "",
            tank_capacity: formData.tank_capacity || 0,
            trunk_capacity: formData.trunk_capacity || 0,
            urls_img: imageUrls,
            renter_id: user?.id ? parseInt(user.id) : 0 
        }
    }

    async function uploadImagesToStorage(images: File[]): Promise<string[]> {
        const uploadedUrls: string[] = [];
        
        const userFolder = `users/${user?.id}`;
        const carFolder = `cars/temp-${Date.now()}`;
        const folderPath = `${userFolder}/${carFolder}`;


        for (const image of images) {
            try {
                if (!image.type.startsWith('image/')) {
                    console.warn('El archivo no es una imagen:', image.name);
                    continue;
                }

                const fileExtension = image.name.split('.').pop();
                const fileName = `${folderPath}/image-${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExtension}`;
                
                console.log('Subiendo imagen:', fileName);
                
                const { error } = await supabase.storage
                    .from('images_rent_car')
                    .upload(fileName, image, {
                        cacheControl: '3600',
                        upsert: false
                    });
                
                if (error) {
                    console.error('Error subiendo imagen:', error);
                    throw new Error(`Error al subir ${image.name}: ${error.message}`);
                }

                const { data: publicUrlData } = supabase.storage
                    .from('images_rent_car')
                    .getPublicUrl(fileName);
                
                console.log('URL pública generada:', publicUrlData.publicUrl);
                
                if (publicUrlData.publicUrl) {
                    uploadedUrls.push(publicUrlData.publicUrl);
                } else {
                    console.warn('No se pudo obtener URL pública para:', fileName);
                }
                
            } catch (error) {
                console.error('Error en uploadImagesToStorage:', error);
                throw error;
            }
        }
        
        console.log('URLs subidas:', uploadedUrls);
        return uploadedUrls;
    }

    const onSubmit = async  (data: CarFormData) => {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            console.log('Formulario válido:', data);

            const carData = await mapFormDataToSupabase(data)
            console.log('Datos para Supabase:', carData);
            
            const result = await supabaseCreateCarForRent(carData);
            console.log('Auto creado exitosamente:', result);

            navigate("/catalog");
        } catch (error) {
            console.error('Error al crear el auto:', error);
            setSubmitError(error instanceof Error ? error.message : 'Error desconocido al crear el auto');
        } finally {
            setIsSubmitting(false);
        }
    };

    const updateFormData = (field: keyof CarFormData, value: any) => {
        setValue(field, value);
    };

    const handleCancel = () => {
        navigate("/catalog");
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
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-8">
                        <h1 className="text-3xl font-bold text-white text-center">
                        Publicar Auto para Renta
                        </h1>
                        <p className="text-blue-100 text-center mt-2">
                        Completa la información de tu vehículo para comenzar a rentarlo
                        </p>
                    </div>

                    {submitError && (
                        <div className="mx-6 mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-700 text-sm">{submitError}</p>
                        </div>
                    )}

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
                                onClick={handleCancel}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                            >
                                Cancelar
                            </button>
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-colors font-medium shadow-lg"
                                >
                                {isSubmitting ? 'Publicando...' : 'Publicar Auto'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    }