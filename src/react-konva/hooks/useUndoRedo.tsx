import { useState, useCallback } from "react";

export function useUndoRedo<T>(initialState: T) {
    const [past, setPast] = useState<T[]>([]);
    const [present, setPresent] = useState<T>(initialState);
    const [future, setFuture] = useState<T[]>([]);

    const canUndo = past.length > 0;
    const canRedo = future.length > 0;

    const updateState = useCallback(
        (newState: T) => {
            setPast((p) => [...p, present]);
            setPresent(newState);
            setFuture([]);
        },

        [present],
    );

    const undo = useCallback(() => {
        if (!canUndo) return;

        const newPresent = past[past.length - 1];

        setPast((p) => p.slice(0, -1));
        setFuture((f) => [present, ...f]);
        setPresent(newPresent);
    }, [past, present, canUndo]);

    const redo = useCallback(() => {
        if (!canRedo) return;

        const [newPresent, ...newFuture] = future;

        setPast((p) => [...p, present]);
        setFuture(newFuture);
        setPresent(newPresent);
    }, [future, present, canRedo]);

    return {
        state: present,
        updateState,
        undo,
        redo,
        canUndo,
        canRedo,
    };
}
