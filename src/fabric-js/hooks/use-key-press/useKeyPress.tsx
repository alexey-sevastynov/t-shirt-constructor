import { useEffect } from "react";
import { KeyName } from "./key-press-constants";

export function useKeyPress<T>(key: KeyName, callback: () => void, deps: T[] = []) {
    return useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === key) {
                callback();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
        // eslint-disable-next-line
    }, [key, callback, ...deps]);
}
