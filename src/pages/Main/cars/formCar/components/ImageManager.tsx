import { X, Plus } from "lucide-react";

interface Props {
  urls: string[];
  onDelete: (index: number) => void;
  onAdd: () => void;
}

export default function ImageManager({ urls, onDelete, onAdd }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {urls.map((url, i) => (
        <div key={i} className="group relative w-full h-60 rounded-lg">
          <button
            type="button"
            className="absolute top-5 right-5 opacity-0 p-2 bg-red-500 rounded-lg text-white group-hover:opacity-100 transition-all"
            onClick={() => onDelete(i)}
          >
            <X />
          </button>
          <img src={url} className="w-full h-full object-cover rounded-lg" />
        </div>
      ))}

      {urls.length < 4 && (
        <div
          onClick={onAdd}
          className="flex flex-col items-center justify-center w-full h-60 border-2 border-dashed rounded-lg cursor-pointer text-gray-500"
        >
          <Plus size={50} />
          <span className="text-lg font-semibold">Agregar imagen</span>
        </div>
      )}
    </div>
  );
}
