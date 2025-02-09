import { Orientation } from "@/react-konva/components/toolbar/view-switcher/view-switcher-constants";
import { Color } from "@/react-konva/components/toolbar/color-switcher/color-switcher-constants";

export interface CanvasDisplayProps {
    imageState: {
        image: HTMLImageElement | null;
        x: number;
        y: number;
        width: number;
        height: number;
        scaleX: number;
        scaleY: number;
        rotation: number;
    };
    onPositionChange: (x: number, y: number) => void;
    onTransformChange: (x: number, y: number, scaleX: number, scaleY: number, rotation: number) => void;
    orientation: Orientation;
    color: Color;
}
