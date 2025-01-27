"use client";
import { useCallback, useEffect, useState } from "react";
import { useCanvas } from "./hooks/use-canvas/useCanvas";
import { Toolbar } from "@/constructor/components/Toolbar";
import { CanvasDisplay } from "@/constructor/components/CanvasDisplay";
import { handleFileChange } from "@/constructor/Constructor.funcs";

export function Constructor() {
    const { canvasRef, addImage, addTriangle, removeObject } = useCanvas();
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        if (imageSrc) {
            addImage(imageSrc).catch(console.error);
        }
    }, [imageSrc, addImage]);

    const handleFileChangeCallback = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        handleFileChange(event, setImageSrc);
    }, []);

    return (
        <div className="flex h-screen w-screen flex-col lg:flex-row">
            <div className="flex h-1/2 flex-col items-center justify-center gap-4 bg-gray-200 p-4 lg:h-full lg:w-1/2">
                <Toolbar
                    onAddTriangle={addTriangle}
                    onFileChange={handleFileChangeCallback}
                    removeObject={removeObject}
                />
            </div>
            <div className="flex h-1/2 items-center justify-center bg-gray-100 lg:h-full lg:w-1/2">
                <CanvasDisplay canvasContainerRef={canvasRef} />
            </div>
        </div>
    );
}
