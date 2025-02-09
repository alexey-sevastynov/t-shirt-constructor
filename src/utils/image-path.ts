import { Color, colorsKeys } from "@/react-konva/components/toolbar/color-switcher/color-switcher-constants";
import {
    Orientation,
    orientationsKeys,
} from "@/react-konva/components/toolbar/view-switcher/view-switcher-constants";
import { productCategories, ProductCategory } from "@/react-konva/constants/model-paths";
import { removePluralSuffix } from "@/utils/remove-plural-suffix";

const imagesFolderName = "images";
const imageFormats = {
    png: ".png",
    jpg: ".jpg",
    jpeg: ".jpeg",
    webp: ".webp",
    svg: ".svg",
} as const;

export function getImageTShirtPath(
    colorType: Color,
    orientationType: Orientation,
    category: ProductCategory = productCategories.tShirt,
) {
    const color = colorsKeys[colorType];
    const orientation = orientationsKeys[orientationType];
    const categoryName = removePluralSuffix(category);

    return generatePath(imagesFolderName, category, `${categoryName}-${color}-${orientation}`);
}

function generatePath(
    folderName: string,
    categoryName: string,
    fileName: string,
    extension: string = imageFormats.png,
) {
    return `/${folderName}/${categoryName}/${fileName}${extension}`;
}
