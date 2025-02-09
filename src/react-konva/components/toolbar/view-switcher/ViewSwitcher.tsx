import Image from "next/image";
import {
    getTShirtViews,
    Orientation,
} from "@/react-konva/components/toolbar/view-switcher/view-switcher-constants";
import { Color } from "@/react-konva/components/toolbar/color-switcher/color-switcher-constants";

interface ViewSwitcherProps {
    orientation: Orientation;
    onOrientationChange: (orientation: Orientation) => void;
    color: Color;
}

export function ViewSwitcher({ orientation, onOrientationChange, color }: ViewSwitcherProps) {
    return (
        <div className="flex flex-col items-center gap-4 bg-gray-200 p-4">
            <p className="text-xl font-semibold text-black">View Switcher</p>
            <div className="grid grid-cols-2 gap-4">
                {getTShirtViews(color).map((view) => (
                    <button
                        key={view.id}
                        title={view.alt}
                        className={`relative h-[100px] w-[100px] rounded-lg border-2 transition ${
                            orientation === view.id ? "border-blue-500" : "border-gray-300"
                        }`}
                        onClick={() => onOrientationChange(view.id)}
                    >
                        <Image
                            src={view.src}
                            alt={view.alt}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-lg p-2"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
