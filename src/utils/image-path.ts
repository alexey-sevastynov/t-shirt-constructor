import { productCategories, ProductCategory } from "@/react-konva/constants/model-paths";

export const getImagePath = (filename: string, folder: ProductCategory = productCategories.tShirt) =>
    `/images/${folder}/${filename}`;
