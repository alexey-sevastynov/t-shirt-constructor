import { Color, tShirtColors } from "./color-switcher-constants";

interface ColorSwitcherProps {
    color: Color;
    onColorChange: (color: Color) => void;
}

export function ColorSwitcher({ color, onColorChange }: ColorSwitcherProps) {
    return (
        <div className="flex flex-col items-center gap-4 rounded-lg bg-gray-200 p-4">
            <p className="text-xl font-semibold text-black">Color Switcher</p>
            <div className="flex gap-4">
                {tShirtColors.map(({ colorType, name, hex }) => (
                    <button
                        key={hex}
                        className={`h-12 w-12 rounded-full border-2 transition ${
                            colorType === color ? "border-blue-500" : "border-gray-300"
                        }`}
                        style={{ backgroundColor: hex }}
                        onClick={() => onColorChange(colorType)}
                        title={name}
                    />
                ))}
            </div>
        </div>
    );
}
