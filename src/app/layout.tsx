import type { Metadata } from 'next';
import { Oxygen } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Oxygen({ 
    subsets: ['latin'],
    weight: ['300', '400', '700'] }
);

export const metadata: Metadata = {
    title: 'To Do',
    description: 'The simplest and most powerful way to manage your tasks and projects',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={
                `${inter.className}
                h-screen w-screen overflow-x-hidden
                flex flex-col
            `}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}

function NavBar() {

    return (
        <nav className='
            w-screen h-[64px] 
            absolute bottom-0
            flex flex-row justify-around items-center
        '>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/tasks'}>
                TASKS
            </Link>
            <Link href={'/calendar'}>
                CALENDAR
            </Link>
            <Link href={'/add-task'}>
                ADD TASK
            </Link>
        </nav>
    )
}