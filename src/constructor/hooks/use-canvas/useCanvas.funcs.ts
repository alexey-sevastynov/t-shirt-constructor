import { Canvas, FabricImage, Triangle } from "fabric";
import { canvasElementId, errorMessage, fabricImageObject, triangleObjectCanvas } from "./canvas-constants";

export const initializeCanvas = (canvasRef: HTMLDivElement | null, width: number, height: number) => {
    if (!canvasRef) return null;

    const canvasElement = document.createElement(canvasElementId);
    canvasElement.width = width;
    canvasElement.height = height;

    canvasRef.innerHTML = "";
    canvasRef.appendChild(canvasElement);

    return new Canvas(canvasElement);
};

export const addImageToCanvas = (canvas: Canvas | null, imageSrc: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (!canvas) {
            reject(errorMessage.canvasIsNotAvailable);
            return;
        }

        const img = new Image();

        img.onload = () => {
            const fabricImage = new FabricImage(img, fabricImageObject);

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

export const addTriangleToCanvas = (canvas: Canvas | null) => {
    if (!canvas) return;

    const triangle = new Triangle(triangleObjectCanvas);

    canvas.add(triangle);
    canvas.renderAll();
};
