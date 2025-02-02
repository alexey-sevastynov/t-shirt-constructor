import { useState, useEffect, useRef, RefObject } from "react";

export const useImageDimensions = (imageRef: RefObject<HTMLImageElement | null>) => {
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const observerRef = useRef<ResizeObserver | null>(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (imageRef.current) {
                setImageDimensions({
                    width: imageRef.current.clientWidth,
                    height: imageRef.current.clientHeight,
                });
            }
        };

        if (!observerRef.current) {
            observerRef.current = new ResizeObserver(updateDimensions);
        }

        const currentRef = imageRef.current;

        if (currentRef) {
            observerRef.current.observe(currentRef);
            updateDimensions();
        }

        return () => {
            if (observerRef.current && currentRef) observerRef.current.unobserve(currentRef);
        };
    }, [imageRef]);

    return imageDimensions;
};
