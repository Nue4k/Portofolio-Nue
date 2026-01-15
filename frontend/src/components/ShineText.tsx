import { ReactNode } from 'react';

interface ShineTextProps {
    children: ReactNode;
    className?: string;
}

export default function ShineText({ children, className = '' }: ShineTextProps) {
    return (
        <span className={`shine-text font-semibold ${className}`}>
            {children}
        </span>
    );
}
