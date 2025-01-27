import { useRef, useEffect, useState } from "react";
import { Canvas } from "fabric";
import { addImageToCanvas, addTriangleToCanvas, initializeCanvas } from "./useCanvas.funcs";
import { heightContainerCanvas, widthContainerCanvas } from "./canvas-constants";

interface UseCanvasProps {
    width?: number;
    height?: number;
}

interface UseCanvasReturn {
    canvasRef: React.RefObject<HTMLDivElement | null>;
    canvas: Canvas | null;
    addImage: (imageSrc: string) => Promise<void>;
    addTriangle: () => void;
}

export const useCanvas = ({
    width = widthContainerCanvas,
    height = heightContainerCanvas,
}: UseCanvasProps = {}): UseCanvasReturn => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const [canvas, setCanvas] = useState<Canvas | null>(null);

    useEffect(() => {
        const fabricCanvas = initializeCanvas(canvasRef.current, width, height);
        setCanvas(fabricCanvas);

        return () => {
            if (fabricCanvas) fabricCanvas.dispose();
        };
    }, [width, height]);

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
    };
};
