import { useState, useCallback, useRef } from "react";
import html2canvas from "html2canvas";
import { errorMessage } from "@/react-konva/hooks/use-screenshot/constants/error-message";

export const useScreenshot = () => {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const ref = useRef<HTMLDivElement | null>(null);

    const takeScreenshot = useCallback(async () => {
        if (!ref.current) return;

        setLoading(true);

        try {
            const canvas = await html2canvas(ref.current, { useCORS: true });
            const dataUrl = canvas.toDataURL("image/png");

            setScreenshot(dataUrl);
        } catch (error) {
            console.error(errorMessage.failedToCreateScreenshot, error);
        } finally {
            setLoading(false);
        }
    }, []);

    const downloadScreenshot = useCallback(() => {
        if (!screenshot) return;

        const link = document.createElement("a");
        link.href = screenshot;
        link.download = "screenshot.png";
        link.click();
    }, [screenshot]);

    const clearScreenshot = useCallback(() => {
        setScreenshot(null);
    }, []);

    return { screenshot, loading, takeScreenshot, downloadScreenshot, clearScreenshot, ref };
};
