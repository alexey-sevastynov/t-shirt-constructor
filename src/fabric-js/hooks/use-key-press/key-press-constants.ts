export const keyNames = {
    delete: "Delete",
} as const;

export type KeyName = (typeof keyNames)[keyof typeof keyNames];
