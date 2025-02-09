import React from "react";
import { ViewSwitcher } from "@/react-konva/components/toolbar/view-switcher/ViewSwitcher";
import { Orientation } from "@/react-konva/components/toolbar/view-switcher/view-switcher-constants";
import { ColorSwitcher } from "@/react-konva/components/toolbar/color-switcher/ColorSwitcher";
import { Color } from "@/react-konva/components/toolbar/color-switcher/color-switcher-constants";

interface ToolbarProps {
    onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    removeObject: () => void;
    onUndo: () => void;
    onRedo: () => void;
    canUndo: boolean;
    canRedo: boolean;
    orientation: Orientation;
    onOrientationChange: (orientation: Orientation) => void;
    color: Color;
    onColorChange: (color: Color) => void;
}

export function Toolbar({
    onFileChange,
    removeObject,
    onUndo,
    onRedo,
    canUndo,
    canRedo,
    orientation,
    onOrientationChange,
    color,
    onColorChange,
}: ToolbarProps) {
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

            <ColorSwitcher color={color} onColorChange={onColorChange} />
            <ViewSwitcher orientation={orientation} onOrientationChange={onOrientationChange} color={color} />
        </div>
    );
}
