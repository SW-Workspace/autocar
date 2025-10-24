import { supabase } from "@/config/supabase/supabase";
import type { SB_CarForRentModel } from "@/shared/models/carForRent/carForRent.model";

export async function supabaseCreateCarForRent(carData: Partial<SB_CarForRentModel>) {
    const { data, error } = await supabase
        .from('car_for_rent')
        .insert(carData)
        .select('*')
        .single();

    if (error) throw new Error(error.message);
    return data;
};

export async function supabaseGetAllCarsForRent() {
    const { data, error } = await supabase
        .from('car_for_rent')
        .select('*');
        
    if (error) throw new Error(error.message);
    return data || [];
};

export async function supabaseGetCarById(carId: number) {
    const { data, error } = await supabase
        .from('car_for_rent')
        .select('*')
        .eq('id', carId)
        .single();

    if (error) throw new Error(error.message);
    return data;
};

export async function supabaseGetCarByRender(userRenderId: number) {
    const { data, error } = await supabase
        .from('car_for_rent')
        .select('*')
        .eq('renter_id', userRenderId)
        .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);
    return data || [];
};

export async function supabaseGetCarByOwner(userOwnerId: number) {
    const { data, error } = await supabase
        .from('car_for_rent')
        .select('*')
        .eq('owner_id', userOwnerId)
        .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);
    return data || [];
};

export async function supabaseGetAllAvailableCars() {
    const { data, error } = await supabase
        .from('car_for_rent')
        .select('*')
        .eq('available', true)

    if (error) throw new Error(error.message);
    return data || [];
};

export async function supabaseUpdateCarForRentById(carId: number, updates: Partial<SB_CarForRentModel>) {
    const { data, error } = await supabase
        .from('car_for_rent')
        .update(updates)
        .eq('id', carId)
        .select('*')
        .single();

    if (error) throw new Error(error.message);
    return data;
};

export async function supabaseRentCar(carId: number, userId: number, rentalDays: number) {
    const { data, error } = await supabase
        .from('car_for_rent')
        .update({
            user_rented: userId,
            rental_duraction_days: rentalDays,
            available: false
        })
        .eq('id', carId)
        .eq('available', true)
        .select('*')
        .single();
    
    if (error) throw new Error(error.message);
    return data;
};

export async function supabaseReturnCarById(carId: number) {
    const { data, error } = await supabase
        .from('car_for_rent')
        .update({
            user_rented: null,
            rental_duraction_days: null,
            available: true
        })
        .eq('id', carId)
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
};

export async function supabaseDeleteCarForRentById(carId: number) {
    const { error } = await supabase
        .from('car_for_rent')
        .delete()
        .eq('id', carId)

    if (error) throw new Error(error.message);
};