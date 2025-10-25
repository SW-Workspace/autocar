import { supabase } from "@/config/supabase/supabase";
import type SB_RentalsModel from "@/shared/models/rentals/rentals.model";


export async function supabaseCreateRentals(rentalData: Partial<SB_RentalsModel>) {
    const {data, error} = await supabase
        .from('rentals')
        .insert(rentalData)
        .select('*')
        .single();
   
    if (error) throw new Error(error.message);
    return data;
}


export async function supabaseGetAllRentals() {
    const {data:rentalsData, error:rentalsError} = await supabase
        .from('rentals')
        .select('*');
    
    if (rentalsError) throw new Error(rentalsError.message);
    return rentalsData || [];
}


export async function supabaseGetRentalsById(rentalId: number) {
    const {data, error} = await supabase
        .from('rentals')
        .select('*')
        .eq('id', rentalId)
        .single();
    
    if (error) throw new Error(error.message);
    return data;  
}


export async function supabaseGetRentalsByRenterId(renterId: number) {
    const {data, error} = await supabase
        .from('rentals')
        .select('*')
        .eq('renter_id', renterId)
        .single();
    
    if (error) throw new Error(error.message);
    return data;  
}


export async function supabaseGetRentalsByOwnerId(ownerId: number) {
    const {data, error} = await supabase
        .from('rentals')
        .select('*')
        .eq('owner_id', ownerId)
        .single();
    
    if (error) throw new Error(error.message);
    return data;  
}


export async function supabaseGetRentalsByStatus(status: 'pendiente' | 'en curso' | 'finalizado' | 'cancelado') {
    const {data, error} = await supabase
        .from('rentals')
        .select('*')
        .eq('status', status)
        .single();
    
    if (error) throw new Error(error.message);
    return data;  
}


export async function supabaseGetRentalsByStartDate(date: string) {
    const {data, error} = await supabase
        .from('rentals')
        .select('*')
        .gte('start_date', `${date}T00:00:00`)
        .lte('start_date', `${date}T23:59:59`)
        .single();
    
    if (error) throw new Error(error.message);
    return data;  
}


export async function supabaseUpdateRentalById(rentalId: number, updates: Partial<SB_RentalsModel>) {
    const { data, error } = await supabase
        .from('rentals')
        .update(updates)
        .eq('id', rentalId)
        .select('*')
        .single();

    if (error) throw new Error(error.message);
    return data;
};


export async function supabaseDeleteRentalsById(rentalId: number) {
    const {error} = await supabase
        .from('rentals')
        .delete()
        .eq('id', rentalId);
    
    if (error) throw new Error(error.message);
}