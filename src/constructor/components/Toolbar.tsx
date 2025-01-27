import React from "react";

interface ToolbarProps {
    onAddTriangle: () => void;
    onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Toolbar({ onAddTriangle, onFileChange }: ToolbarProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 bg-gray-200 p-4">
            <p className="text-xl font-semibold text-black">Toolbar</p>
            <button
                onClick={onAddTriangle}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                Add triangle
            </button>
            <input type="file" accept="image/*" onChange={onFileChange} className="mt-4" />
        </div>
    );
}
