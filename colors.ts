
const isLightTheme = true

export const tailwindColors = {
    primary: 'var(--colors-primary)',
    secondary: 'var(--colors-secondary)',
    tertiary: 'var(--colors-tertiary)',
    primaryContainer: isLightTheme ? 'var(--colors-primary-container-light)' : 'var(--colors-primary-container-dark)',
    background: isLightTheme ? 'var(--colors-background-light)' : 'var(--colors-background-dark)',
    foreground: isLightTheme ? 'var(--colors-foreground-light)' : 'var(--colors-foreground-dark)',
    unselected: isLightTheme ? 'var(--colors-unselected-light)' : 'var(--color-unselected-dark)',
};

export default tailwindColors;
