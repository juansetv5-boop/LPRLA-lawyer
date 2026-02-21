import React from 'react';
import Image from 'next/image';

export const LogoSeparator = () => {
    return (
        <div className="flex justify-center items-center py-12 w-full">
            <div className="relative w-32 h-32 md:w-48 md:h-48 opacity-60 hover:opacity-100 transition-opacity duration-700">
                <Image
                    src="/logo-divider.png"
                    alt="Separator Logo"
                    fill
                    className="object-contain filter grayscale brightness-200"
                    priority
                />
            </div>
        </div>
    );
};
