import React from "react";

interface ImageUploaderProps {
    onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ImageUploader({ onFileChange }: ImageUploaderProps) {
    return (
        <label className="cursor-pointer rounded border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
            Upload Image
            <input type="file" accept="image/*" onChange={onFileChange} className="hidden" />
        </label>
    );
}
