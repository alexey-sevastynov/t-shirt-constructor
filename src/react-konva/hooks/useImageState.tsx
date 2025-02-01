import { useCallback } from "react";
import { ImageState } from "@/react-konva/interfaces/image-state";

interface UseImageStateProps {
    updateState: (newState: ImageState) => void;
    currentState: ImageState;
}

export function useImageState({ updateState, currentState }: UseImageStateProps) {
    const handleImageUpload = useCallback(
        (file: File) => {
            const reader = new FileReader();
            reader.onload = () => {
                const img = new window.Image();
                img.src = String(reader.result);
                img.onload = () => {
                    updateState({
                        ...currentState,
                        image: img,
                        width: img.width,
                        height: img.height,
                    });
                };
            };
            reader.readAsDataURL(file);
        },
        [updateState, currentState],
    );

    const handleRemoveImage = useCallback(() => {
        updateState({
            ...currentState,
            image: null,
            width: 0,
            height: 0,
        });
    }, [updateState, currentState]);

    return {
        handleImageUpload,
        handleRemoveImage,
    };
}
