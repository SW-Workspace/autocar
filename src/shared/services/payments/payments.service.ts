import { supabase } from "@/config/supabase/supabase";
import type SB_PaymentsModel from "@/shared/models/payments/payments.model";


export async function supabaseCreatePayments(paymentData: Partial<SB_PaymentsModel>) {
    const {data, error} = await supabase
        .from('payment')
        .insert(paymentData)
        .select('*')
        .single();
   
    if (error) throw new Error(error.message);
    return data;
}


export async function supabaseGetAllPayments(){
    const {data:paymentData, error:paymentError} = await supabase
        .from('payments')
        .select('*');
    
    if (paymentError) throw new Error(paymentError.message);
    return paymentData || [];
}


export async function supabaseGetPaymentById(paymentId: number) {
    const {data, error} = await supabase
        .from('payments')
        .select('*')
        .eq('id', paymentId)
        .single();
    
    if (error) throw new Error(error.message);
    return data;  
}


export async function supabaseGetPaymentByRentalId(rentalId: number) {
    const {data, error} = await supabase
        .from('payments')
        .select('*')
        .eq('rental_id', rentalId)
        .single();
    
    if (error) throw new Error(error.message);
    return data;  
}


export async function supabaseGetPaymentByMethod(method: 'tarjeta' | 'transferencia') {
    const {data, error} = await supabase
        .from('payments')
        .select('*')
        .eq('method', method)
        .single();
    
    if (error) throw new Error(error.message);
    return data;  
}


export async function supabaseGetPaymentByStatus(status: 'pendiente' | 'pagado' | 'fallido') {
    const {data, error} = await supabase
        .from('payments')
        .select('*')
        .eq('status', status)
        .single();
    
    if (error) throw new Error(error.message);
    return data;  
}


export async function supabaseGetRentalsByPaidAt(date: string) {
    const {data, error} = await supabase
        .from('payments')
        .select('*')
        .gte('paid_at', `${date}T00:00:00`)
        .lte('paid_at', `${date}T23:59:59`)
        .single();
    
    if (error) throw new Error(error.message);
    return data;  
}


export async function supabaseUpdatePaymentById(paymentId: number, updates: Partial<SB_PaymentsModel>) {
    const { data, error } = await supabase
        .from('payments')
        .update(updates)
        .eq('id', paymentId)
        .select('*')
        .single();

    if (error) throw new Error(error.message);
    return data;
};


export async function supabaseDeleteRentalsById(paymentId: number) {
    const {error} = await supabase
        .from('payments')
        .delete()
        .eq('id', paymentId);
    
    if (error) throw new Error(error.message);
}