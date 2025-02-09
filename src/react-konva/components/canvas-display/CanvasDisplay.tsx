import React, { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import { Layer, Stage, Image as KonvaImage, Transformer } from "react-konva";
import Konva from "konva";
import { CanvasDisplayProps } from "@/react-konva/components/canvas-display/canvas-display.interfaces";
import { useImageDimensions } from "@/react-konva/hooks/useImageDimensions";
import { getImageTShirtPath } from "@/utils/image-path";

export function CanvasDisplay({
    imageState,
    onPositionChange,
    onTransformChange,
    orientation,
    color,
}: CanvasDisplayProps) {
    const imageRef = useRef<Konva.Image>(null);
    const [selected, setSelected] = useState(false);

    const transformerRef = useRef<Konva.Transformer>(null);
    const nextImageRef = useRef<HTMLImageElement | null>(null);

    const imageDimensions = useImageDimensions(nextImageRef);

    useEffect(() => {
        if (imageRef.current && transformerRef.current) {
            if (selected) {
                transformerRef.current.nodes([imageRef.current]);
                transformerRef.current.getLayer()?.batchDraw();
            } else {
                transformerRef.current.nodes([]);
                transformerRef.current.getLayer()?.batchDraw();
            }
        }
    }, [selected]);

    return (
        <div className="relative h-full w-full">
            <div className="flex h-full items-center justify-center p-10">
                <NextImage
                    src={getImageTShirtPath(color, orientation)}
                    alt="t-shirt"
                    width={400}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                    priority
                    ref={nextImageRef}
                />
            </div>

            <Stage
                width={imageDimensions.width / 1.8}
                height={imageDimensions.height / 1.15}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] border"
                onClick={() => setSelected(false)}
            >
                <Layer>
                    {imageState.image && (
                        <>
                            <KonvaImage
                                image={imageState.image}
                                draggable
                                ref={imageRef}
                                x={imageState.x}
                                y={imageState.y}
                                width={imageState.width}
                                height={imageState.height}
                                scaleX={imageState.scaleX}
                                scaleY={imageState.scaleY}
                                rotation={imageState.rotation}
                                onClick={(e) => {
                                    e.cancelBubble = true;
                                    setSelected(true);
                                }}
                                onDragEnd={(e) => {
                                    onPositionChange(e.target.x(), e.target.y());
                                }}
                                onTransformEnd={() => {
                                    const node = imageRef.current;
                                    if (node) {
                                        onTransformChange(
                                            node.x(),
                                            node.y(),
                                            node.scaleX(),
                                            node.scaleY(),
                                            node.rotation(),
                                        );
                                    }
                                }}
                            />
                            <Transformer
                                ref={transformerRef}
                                enabledAnchors={[
                                    "top-left",
                                    "top-right",
                                    "bottom-left",
                                    "bottom-right",
                                    "middle-left",
                                    "middle-right",
                                    "top-center",
                                    "bottom-center",
                                ]}
                                boundBoxFunc={(oldBox, newBox) => {
                                    if (newBox.width < 20 || newBox.height < 20) {
                                        return oldBox;
                                    }
                                    return newBox;
                                }}
                            />
                        </>
                    )}
                </Layer>
            </Stage>
        </div>
    );
}
