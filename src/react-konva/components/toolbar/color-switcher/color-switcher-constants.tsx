import { getObjectKeys } from "@/utils/object-keys";

export const colors = {
    white: 0,
    black: 1,
};

export const colorsKeys = getObjectKeys(colors);

export const tShirtColors: TShirtColors[] = [
    { name: "black", colorType: colors.black, hex: "#000000" },
    { name: "white", colorType: colors.white, hex: "#ffffff" },
];

export type Color = (typeof colors)[keyof typeof colors];

interface TShirtColors {
    name: string;
    colorType: Color;
    hex: string;
}
