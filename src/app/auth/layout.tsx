/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-screen overflow-hidden dark:bg-background dark:text-foreground">
            <div className="relative flex flex-1 items-center justify-center">
                {children}
            </div>
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <img
                    src="/imgs/login-bg.svg"
                    alt="Background"
                    className="absolute -right-0.5 top-0 h-full w-1/2 object-cover"
                />
                <img
                    src="/imgs/login-bg.svg"
                    alt="Background"
                    className="absolute -left-0.5 top-0 h-full w-1/2 rotate-180 object-cover"
                />
            </div>
        </div>
    );
}
