import React from "react";
import { ViewSwitcher } from "@/react-konva/components/toolbar/view-switcher/ViewSwitcher";
import { ColorSwitcher } from "@/react-konva/components/toolbar/color-switcher/ColorSwitcher";
import { ScreenshotButton } from "@/react-konva/components/toolbar/screenshot-button/ScreenshotButton";
import { UndoRedoButtons } from "@/react-konva/components/toolbar/undo-redo-buttons/UndoRedoButtons";
import { Button } from "@/ui/button/Button";
import { ImageUploader } from "@/react-konva/components/toolbar/image-uploader/ImageUploader";
import { ToolbarProps } from "@/react-konva/components/toolbar/toolbar.interfaces";

export function Toolbar({
    onFileChange,
    removeObject,
    onUndo,
    onRedo,
    canUndo,
    canRedo,
    orientation,
    onOrientationChange,
    color,
    onColorChange,
    captureScreenshot,
    downloadScreenshot,
    clearScreenshot,
    screenshot,
}: ToolbarProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 bg-gray-200 p-4">
            <p className="text-xl font-semibold text-black">Toolbar</p>
            <div className="flex flex-row gap-4">
                <ImageUploader onFileChange={onFileChange} />
                <Button onClick={removeObject} className="bg-red-500 hover:bg-red-600">
                    Remove image
                </Button>
                <UndoRedoButtons onUndo={onUndo} onRedo={onRedo} canUndo={canUndo} canRedo={canRedo} />
            </div>

            <ColorSwitcher color={color} onColorChange={onColorChange} />
            <ViewSwitcher orientation={orientation} onOrientationChange={onOrientationChange} color={color} />
            <ScreenshotButton
                captureScreenshot={captureScreenshot}
                downloadScreenshot={downloadScreenshot}
                clearScreenshot={clearScreenshot}
                screenshot={screenshot}
            />
        </div>
    );
}
