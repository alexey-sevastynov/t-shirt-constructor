export const productCategories = {
    tShirt: "t-shirts",
};

export type ProductCategory = (typeof productCategories)[keyof typeof productCategories];
