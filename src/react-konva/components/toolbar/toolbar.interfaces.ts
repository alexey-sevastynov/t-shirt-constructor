import { Orientation } from "@/react-konva/components/toolbar/view-switcher/view-switcher-constants";
import { Color } from "@/react-konva/components/toolbar/color-switcher/color-switcher-constants";

export interface ToolbarProps {
    onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    removeObject: () => void;
    onUndo: () => void;
    onRedo: () => void;
    canUndo: boolean;
    canRedo: boolean;
    orientation: Orientation;
    onOrientationChange: (orientation: Orientation) => void;
    color: Color;
    onColorChange: (color: Color) => void;
    captureScreenshot: () => void;
    downloadScreenshot: () => void;
    clearScreenshot: () => void;
    screenshot: string | null;
}
