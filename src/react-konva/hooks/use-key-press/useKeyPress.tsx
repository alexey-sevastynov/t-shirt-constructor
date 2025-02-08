import { useEffect } from "react";
import { keyNames } from "@/react-konva/hooks/use-key-press/key-press-constants";

export interface ModifierKeys {
    ctrl?: boolean;
    shift?: boolean;
    alt?: boolean;
    meta?: boolean;
}

export function useKeyPress<T>(
    key: string,
    callback: (event: KeyboardEvent) => void,
    modifiers: ModifierKeys = {},
    deps: T[] = [],
) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const isMac = navigator.platform.includes("Mac");
            const ctrlOrCmd = modifiers.ctrl ? (isMac ? event.metaKey : event.ctrlKey) : true;
            const shift = modifiers.shift !== undefined ? event.shiftKey === modifiers.shift : true;
            const alt = modifiers.alt !== undefined ? event.altKey === modifiers.alt : true;
            const meta = modifiers.meta !== undefined ? event.metaKey === modifiers.meta : true;

            const isDeleteKey =
                event.key === "Delete" || (isMac && event.key === "Backspace" && event.metaKey);

            if (
                (event.key.toLowerCase() === key.toLowerCase() || isDeleteKey) &&
                ctrlOrCmd &&
                shift &&
                alt &&
                meta
            ) {
                event.preventDefault();
                event.stopPropagation();
                callback(event);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
        // eslint-disable-next-line
    }, [key, callback, JSON.stringify(modifiers), ...deps]);
}
