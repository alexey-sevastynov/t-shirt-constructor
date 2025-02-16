import { ReactNode } from "react";

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
}

export function Button({ onClick, children, className = "", disabled }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`rounded px-4 py-2 text-white transition-colors ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
