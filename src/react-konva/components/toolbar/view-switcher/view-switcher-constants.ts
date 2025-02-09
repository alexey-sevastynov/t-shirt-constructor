import { getImageTShirtPath } from "@/utils/image-path";
import { getObjectKeys } from "@/utils/object-keys";
import { Color } from "@/react-konva/components/toolbar/color-switcher/color-switcher-constants";

export const orientations = {
    front: 0,
    back: 1,
    left: 2,
    right: 3,
};

export const orientationsKeys = getObjectKeys(orientations);

export function getTShirtViews(colorType: Color): TShirtView[] {
    return [
        {
            id: orientations.front,
            src: getImageTShirtPath(colorType, orientations.front),
            alt: "Front view",
            name: "front",
        },
        {
            id: orientations.back,
            src: getImageTShirtPath(colorType, orientations.back),
            alt: "Back view",
            name: "back",
        },
        {
            id: orientations.left,
            src: getImageTShirtPath(colorType, orientations.left),
            alt: "Left view",
            name: "left",
        },
        {
            id: orientations.right,
            src: getImageTShirtPath(colorType, orientations.right),
            alt: "Right view",
            name: "right",
        },
    ];
}

export type Orientation = (typeof orientations)[keyof typeof orientations];

interface TShirtView {
    id: Orientation;
    src: string;
    alt: string;
    name: string;
}
