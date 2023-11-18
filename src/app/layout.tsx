import type { Metadata } from 'next';
import { Oxygen } from 'next/font/google';
import './globals.css';
import NavBar from './Navigation/NavBar';
import { useEffect } from 'react';

const inter = Oxygen({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
    title: 'To Do',
    description:
        'The simplest and most powerful way to manage your tasks and projects',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={`${inter.className}
                h-screen w-screen overflow-x-hidden
                flex flex-col md:flex-row
            `}
            >
                <NavBar />
                {children}
            </body>
        </html>
    );
}
