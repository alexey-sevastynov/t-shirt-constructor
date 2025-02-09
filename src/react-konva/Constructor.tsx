"use client";
import { ChangeEvent, useCallback, useState } from "react";
import { Toolbar } from "@/react-konva/components/toolbar/Toolbar";
import { CanvasDisplay } from "@/react-konva/components/canvas-display/CanvasDisplay";
import { useUndoRedo } from "@/react-konva/hooks/useUndoRedo";
import { ImageState } from "@/react-konva/interfaces/image-state";
import { useImageState } from "@/react-konva/hooks/useImageState";
import { useTransformation } from "@/react-konva/hooks/useTransformation";
import { initialImageState } from "@/react-konva/constants/initial-image-state";
import {
    Orientation,
    orientations,
} from "@/react-konva/components/toolbar/view-switcher/view-switcher-constants";

export function Constructor() {
    const [orientation, setOrientation] = useState(orientations.front);

    const {
        state: present,
        updateState,
        undo,
        redo,
        canUndo,
        canRedo,
    } = useUndoRedo<ImageState>(initialImageState);

    const { handleImageUpload, handleRemoveImage } = useImageState({
        updateState,
        currentState: present,
    });

    const { handlePositionChange, handleTransformChange } = useTransformation({
        updateState,
        currentState: present,
    });

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) handleImageUpload(file);
    };

    const onOrientationChange = useCallback((orientation: Orientation) => {
        setOrientation(orientation);
    }, []);

    return (
        <div className="flex min-h-screen w-screen flex-col lg:h-screen lg:flex-row">
            <div className="flex h-auto flex-col items-center justify-center gap-4 bg-gray-200 p-4 lg:h-full lg:w-1/2">
                <Toolbar
                    onFileChange={handleFileChange}
                    removeObject={handleRemoveImage}
                    onUndo={undo}
                    onRedo={redo}
                    canUndo={canUndo}
                    canRedo={canRedo}
                    orientation={orientation}
                    onOrientationChange={onOrientationChange}
                />
            </div>
            <div className="flex h-auto items-center justify-center bg-white lg:h-full lg:w-1/2">
                <CanvasDisplay
                    imageState={present}
                    onPositionChange={handlePositionChange}
                    onTransformChange={handleTransformChange}
                    orientation={orientation}
                />
            </div>
        </div>
    );
}
