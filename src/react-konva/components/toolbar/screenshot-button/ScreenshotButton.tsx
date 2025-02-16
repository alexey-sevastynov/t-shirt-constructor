import { Button } from "@/ui/button/Button";
import Image from "next/image";

interface ScreenshotButtonProps {
    captureScreenshot: () => void;
    downloadScreenshot: () => void;
    clearScreenshot: () => void;
    screenshot: string | null;
}

export function ScreenshotButton({
    captureScreenshot,
    downloadScreenshot,
    clearScreenshot,
    screenshot,
}: ScreenshotButtonProps) {
    return (
        <div className="flex flex-col items-center gap-4">
            <Button onClick={captureScreenshot} className="bg-blue-500">
                Make screenshot
            </Button>
            {screenshot && (
                <>
                    <Image
                        src={screenshot}
                        alt="Screenshot"
                        className="border"
                        width={300}
                        height={400}
                        style={{ objectFit: "contain" }}
                        priority
                    />
                    <div className="flex gap-4">
                        <Button onClick={downloadScreenshot} className="bg-green-500">
                            Download
                        </Button>
                        <Button onClick={clearScreenshot} className="bg-red-500">
                            Clear
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}
