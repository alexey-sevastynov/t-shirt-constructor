// Toolbar.tsx
import React from "react";

interface ToolbarProps {
    onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    removeObject: () => void;
    onUndo: () => void;
    onRedo: () => void;
    canUndo: boolean;
    canRedo: boolean;
}

export function Toolbar({ onFileChange, removeObject, onUndo, onRedo, canUndo, canRedo }: ToolbarProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 bg-gray-200 p-4">
            <p className="text-xl font-semibold text-black">Toolbar</p>
            <div className="flex gap-2">
                <button
                    onClick={onUndo}
                    disabled={!canUndo}
                    className={`rounded bg-blue-500 px-4 py-2 text-white ${
                        canUndo ? "hover:bg-blue-600" : "cursor-not-allowed opacity-50"
                    }`}
                >
                    Undo
                </button>
                <button
                    onClick={onRedo}
                    disabled={!canRedo}
                    className={`rounded bg-blue-500 px-4 py-2 text-white ${
                        canRedo ? "hover:bg-blue-600" : "cursor-not-allowed opacity-50"
                    }`}
                >
                    Redo
                </button>
            </div>
            <button
                onClick={removeObject}
                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
                Remove image
            </button>
            <input type="file" accept="image/*" onChange={onFileChange} className="mb-2" />
        </div>
    );
}
