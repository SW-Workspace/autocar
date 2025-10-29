import type { AppDispatch, RootState } from "@/config/store/store";
import { fetchCars } from "@/config/store/slices/car/thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cars() {
  const cars = useSelector((state: RootState) => state.car);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
    <div>
      <div className="grid grid-cols-3 gap-4">
        {
          cars.cars.map((data, index) =>(
            <Link to={`/dashboard/auto/${data.id}`}
              key={index}
              className="bg-white flex rounded-lg cursor-pointer"
            >
              
              <div className="flex-1 flex flex-col px-2">
                <span className="text-lg font-semibold">{data.group}</span>
                <span>{data.id}</span>
                <span>{data.created_at?.split('T')[0]}</span>
                <div className={`flex gap-2 items-center border ${data.available? "border-[var(--green-primary)]": "border-[var(--red-quartenary)]"} rounded-md px-2 w-35 mt-4`}>
                    <div className={`${data.available? "bg-[var(--green-primary)]": "bg-[var(--red-quartenary)]"} p-1.5 h-1 w-1 rounded-full`}></div>
                    <span className="text-sm">{data.available? 'Disponible': 'No disponible'}</span>
                </div>
              </div>
              
              <div className="h-30 w-30">
                <img 
                  src={data.urls_img[0]}
                  className="w-full h-full rounded-r-lg object-cover"
                />
              </div>
            </Link>
          ))
        }
      </div>
    </div>
    </>
  );
}
