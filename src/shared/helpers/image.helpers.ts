import { supabase } from "@/config/supabase/supabase";

export default async function uploadImagesToStorage(images: File[], userId: string | number): Promise<string[]> {
    const uploadedUrls: string[] = [];
    
    const userFolder = `users/${userId}`;
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

    return uploadedUrls;
}
