/** @format */

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
    src: [
        {
            path: "../fonts/Pretendard-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/Pretendard-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/Pretendard-SemiBold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../fonts/Pretendard-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
});

export const metadata: Metadata = {
    title: "test valley clone",
    description: "Hyper hire challenge",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={pretendard.className}>{children}</body>
        </html>
    );
}
