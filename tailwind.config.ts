import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2b5c80',
                secondary: '#2b5c80',
                tritary: '#95c1e3',
                primary_container: {
                    light: '#F1F3F7',
                    dark: '#2B2B2B',
                },
                background: {
                    light: '#FFFFFF',
                    dark: '#131212',
                },
                foreground: {
                    light: '#000000',
                    dark: '#FFFFFF',
                },
                unselected: {
                    light: '#C6C6C6',
                    dark: '#303030',
                },
            },
        },
    },
    plugins: [],
};
export default config;
