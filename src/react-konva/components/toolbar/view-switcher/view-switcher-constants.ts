import { tShirtModelPaths } from "@/react-konva/constants/model-paths";
import { getImagePath } from "@/utils/image-path";

export const orientations = {
    front: 0,
    back: 1,
    left: 2,
    right: 3,
};

export const tShirtViews: TShirtView[] = [
    {
        id: orientations.front,
        src: getImagePath(tShirtModelPaths.front),
        alt: "Front view",
    },
    {
        id: orientations.back,
        src: getImagePath(tShirtModelPaths.back),
        alt: "Back view",
    },
    {
        id: orientations.left,
        src: getImagePath(tShirtModelPaths.left),
        alt: "Left view",
    },
    {
        id: orientations.right,
        src: getImagePath(tShirtModelPaths.right),
        alt: "Right view",
    },
];

export type Orientation = (typeof orientations)[keyof typeof orientations];

interface TShirtView {
    id: Orientation;
    src: string;
    alt: string;
}
