import { useRef, useEffect, useState } from "react";
import { Canvas as FabricCanvas, Triangle, FabricImage } from "fabric";

interface UseCanvasProps {
    width?: number;
    height?: number;
}

interface UseCanvasReturn {
    canvasRef: React.RefObject<HTMLDivElement | null>;
    canvas: FabricCanvas | null;
    addImage: (imageSrc: string) => Promise<void>;
    addTriangle: () => void;
}

export const useCanvas = ({ width = 300, height = 300 }: UseCanvasProps = {}): UseCanvasReturn => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const [canvas, setCanvas] = useState<FabricCanvas | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvasElement = document.createElement("canvas");
        canvasElement.width = width;
        canvasElement.height = height;

        canvasRef.current.innerHTML = "";
        canvasRef.current.appendChild(canvasElement);

        const fabricCanvas = new FabricCanvas(canvasElement);
        setCanvas(fabricCanvas);

        return () => {
            fabricCanvas.dispose();
        };
    }, [width, height]);

    const addImage = async (imageSrc: string): Promise<void> => {
        if (!canvas) return;

        return new Promise((resolve, reject) => {
            const img = new Image();

            img.onload = () => {
                const fabricImage = new FabricImage(img, {
                    scaleX: 0.5,
                    scaleY: 0.5,
                    left: 50,
                    top: 50,
                });

                canvas.clear();
                canvas.add(fabricImage);
                canvas.renderAll();
                resolve();
            };

            img.onerror = (err) => {
                reject(err);
            };

            img.src = imageSrc;
        });
    };

    const addTriangle = () => {
        if (!canvas) return;

        const triangle = new Triangle({
            width: 100,
            height: 100,
            fill: "red",
            left: 100,
            top: 100,
        });

        canvas.add(triangle);
        canvas.renderAll();
    };

    return {
        canvasRef,
        canvas,
        addImage,
        addTriangle,
    };
};
