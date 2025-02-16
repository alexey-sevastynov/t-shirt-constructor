import { Button } from "@/ui/button/Button";

interface UndoRedoButtonsProps {
    onUndo: () => void;
    onRedo: () => void;
    canUndo: boolean;
    canRedo: boolean;
}

export function UndoRedoButtons({ onUndo, onRedo, canUndo, canRedo }: UndoRedoButtonsProps) {
    return (
        <div className="flex gap-2">
            <Button
                onClick={onUndo}
                disabled={!canUndo}
                className={`bg-blue-500 ${canUndo ? "hover:bg-blue-600" : "cursor-not-allowed opacity-50"}`}
            >
                Undo
            </Button>
            <Button
                onClick={onRedo}
                disabled={!canRedo}
                className={`bg-blue-500 ${canRedo ? "hover:bg-blue-600" : "cursor-not-allowed opacity-50"}`}
            >
                Redo
            </Button>
        </div>
    );
}
