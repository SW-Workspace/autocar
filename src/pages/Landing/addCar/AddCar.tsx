import Title from "./Components/title";
import BasicInformation from "./Components/BasicInformation";
import CarCapacity from "./Components/CarCapacity";
import TechnicalSpecifications from "./Components/TechnicalSpecifications";
import CarFeatures from "./Components/CarFeatures";
import IncomeInformation from "./Components/IncomeInformation";
import AdditionalInformation from "./Components/AdditionalInformation";
import CarImages from "./Components/CarImages";

export default function AddCar() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                <Title />

                    <form className="p-6 space-y-8">
                        <BasicInformation />
                        <CarCapacity />
                        <TechnicalSpecifications />
                        <CarFeatures />
                        <IncomeInformation />
                        <AdditionalInformation />
                        <CarImages />
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t">
                            <button 
                                type="button"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                            >
                                Cancelar
                            </button>
                            <button 
                                type="submit"
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-colors font-medium shadow-lg"
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