import { useCallback } from "react";
import { ImageState } from "@/react-konva/interfaces/image-state";

interface UseTransformationProps {
    updateState: (newState: ImageState) => void;
    currentState: ImageState;
}

export function useTransformation({ updateState, currentState }: UseTransformationProps) {
    const handlePositionChange = useCallback(
        (x: number, y: number) => {
            updateState({
                ...currentState,
                x,
                y,
            });
        },
        [updateState, currentState],
    );

    const handleTransformChange = useCallback(
        (x: number, y: number, scaleX: number, scaleY: number, rotation: number) => {
            updateState({
                ...currentState,
                x,
                y,
                scaleX,
                scaleY,
                rotation,
            });
        },
        [updateState, currentState],
    );

    return {
        handlePositionChange,
        handleTransformChange,
    };
}
