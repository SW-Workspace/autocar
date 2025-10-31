import { useState } from "react";

interface DialogAddImageCarProps {
  open: boolean;
  onClose: () => void;
  onAddImage: (url: string) => void;
}

export default function DialogAddImageCar({ open, onClose, onAddImage }: DialogAddImageCarProps) {
  const [url, setUrl] = useState("");

  const handleClick = () => {
    if (!url.trim()) return;
    onAddImage(url.trim());
    setUrl(""); 
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full z-[100] bg-black/70 backdrop-blur-2xl">
      <div className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4 h-40">
        <span>Pega la URL de la imagen</span>
        <input
          type="text"
          placeholder="https://..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border rounded-lg px-2 py-1"
        />
        <div className="flex justify-around">
          <button
            onClick={onClose}
            className="border border-[var(--red-quartenary)] text-[var(--red-quartenary)] px-2 py-1 rounded-lg font-semibold cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={handleClick}
            className="bg-[var(--green-primary)] text-white px-2 py-1 rounded-lg font-semibold cursor-pointer"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
