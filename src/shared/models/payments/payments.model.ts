export default interface SB_PaymentsModel{
    id: number;
    rental_id: number;
    amount:number;
    method: 'tarjeta' | 'transferencia';
    status: 'pendiente' | 'pagado' | 'fallido';
    transaction_reference: string;
    paid_at: string;
}