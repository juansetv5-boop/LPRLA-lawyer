import React from 'react';
import Image from 'next/image';

interface LogoSeparatorProps {
    src?: string;
    width?: string;
    height?: string;
    mdWidth?: string;
    mdHeight?: string;
}

export const LogoSeparator = ({
    src = "/logo-divider-new.png",
    width = "w-64",
    height = "h-64",
    mdWidth = "md:w-96",
    mdHeight = "md:h-96"
}: LogoSeparatorProps) => {
    return (
        <div className="flex justify-center items-center py-12 w-full">
            <div className={`relative ${width} ${height} ${mdWidth} ${mdHeight} opacity-60 hover:opacity-100 transition-opacity duration-700`}>
                <Image
                    src={src}
                    alt="Separator Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
};
