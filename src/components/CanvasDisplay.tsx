import React from "react";
import NextImage from "next/image";

interface CanvasDisplayProps {
    canvasContainerRef: React.RefObject<HTMLDivElement | null>;
}

export function CanvasDisplay({ canvasContainerRef }: CanvasDisplayProps) {
    return (
        <div className="relative h-full w-full">
            <NextImage
                src="https://mms-images.out.customink.com/mms/images/catalog/colors/176101/views/front.jpg"
                alt="t-shirt"
                fill
                className="object-cover"
            />
            <div
                ref={canvasContainerRef}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform border"
            />
        </div>
    );
}
