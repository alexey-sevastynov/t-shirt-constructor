import React, { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import { Layer, Stage, Image as KonvaImage, Transformer } from "react-konva";
import Konva from "konva";
import { CanvasDisplayProps } from "./canvas-display.interfaces";

export function CanvasDisplay({ imageState, onPositionChange, onTransformChange }: CanvasDisplayProps) {
    const imageRef = useRef<Konva.Image>(null);
    const transformerRef = useRef<Konva.Transformer>(null);
    const [selected, setSelected] = useState(false);

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
            <NextImage
                src="https://mms-images.out.customink.com/mms/images/catalog/colors/176101/views/front.jpg"
                alt="t-shirt"
                fill
                className="object-cover"
            />
            <Stage
                width={300}
                height={400}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border"
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
