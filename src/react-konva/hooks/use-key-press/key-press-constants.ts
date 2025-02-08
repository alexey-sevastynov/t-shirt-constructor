export const keyNames = {
    delete: "Delete",
    backspace: "Backspace",
    z: "z",
} as const;

export type KeyName = (typeof keyNames)[keyof typeof keyNames];
