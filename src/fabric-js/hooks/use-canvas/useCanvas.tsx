import { useRef, useEffect, useState, useCallback } from "react";
import { Canvas } from "fabric";
import {
    addImageToCanvas,
    addTriangleToCanvas,
    initializeCanvas,
    removeObjectFromCanvas,
} from "./useCanvas.funcs";
import { heightContainerCanvas, widthContainerCanvas } from "./canvas-constants";
import { useKeyPress } from "@/fabric-js/hooks/use-key-press/useKeyPress";
import { keyNames } from "@/fabric-js/hooks/use-key-press/key-press-constants";

interface UseCanvasProps {
    width?: number;
    height?: number;
}

export const useCanvas = ({
    width = widthContainerCanvas,
    height = heightContainerCanvas,
}: UseCanvasProps = {}) => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const [canvas, setCanvas] = useState<Canvas | null>(null);

    const removeObject = useCallback(() => {
        removeObjectFromCanvas(canvas);
    }, [canvas]);

    useEffect(() => {
        const fabricCanvas = initializeCanvas(canvasRef.current, width, height);
        setCanvas(fabricCanvas);

        return () => {
            if (fabricCanvas) fabricCanvas.dispose();
        };
    }, [width, height]);

    useKeyPress(
        keyNames.delete,
        () => {
            if (canvasRef.current) removeObject();
        },
        [canvas],
    );

    const addImage = (imageSrc: string) => {
        return addImageToCanvas(canvas, imageSrc);
    };

    const addTriangle = () => {
        addTriangleToCanvas(canvas);
    };

    return {
        canvasRef,
        canvas,
        addImage,
        addTriangle,
        removeObject,
    };
};
