import { getObjectKeys } from "@/utils/object-keys";

export const productCategories = {
    tShirt: "t-shirts",
};

export const tShirtModelPaths = {
    front: "t-shirt-black-front.png",
    back: "t-shirt-black-back.png",
    left: "t-shirt-black-left.png",
    right: "t-shirt-black-right.png",
} as const;

export const tShirtModelKeys = getObjectKeys(tShirtModelPaths);

export type ProductCategory = (typeof productCategories)[keyof typeof productCategories];
export type TShirtModelPath = (typeof tShirtModelPaths)[keyof typeof tShirtModelPaths];
