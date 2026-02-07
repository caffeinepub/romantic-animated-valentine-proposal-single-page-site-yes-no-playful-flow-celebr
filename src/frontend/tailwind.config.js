import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                },
                romantic: {
                    light: 'oklch(var(--romantic-light))',
                    medium: 'oklch(var(--romantic-medium))',
                    deep: 'oklch(var(--romantic-deep))',
                    primary: 'oklch(var(--romantic-primary))',
                    'primary-hover': 'oklch(var(--romantic-primary-hover))',
                    secondary: 'oklch(var(--romantic-secondary))',
                    text: 'oklch(var(--romantic-text))',
                    'text-soft': 'oklch(var(--romantic-text-soft))',
                    'text-muted': 'oklch(var(--romantic-text-muted))',
                    border: 'oklch(var(--romantic-border))',
                    'glow-1': 'oklch(var(--romantic-glow-1))',
                    'glow-2': 'oklch(var(--romantic-glow-2))',
                    'glow-3': 'oklch(var(--romantic-glow-3))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)'
            },
            fontFamily: {
                cursive: ['Dancing Script', 'Brush Script MT', 'cursive'],
                body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'float-gentle': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'pulse-glow': {
                    '0%, 100%': {
                        boxShadow: '0 0 20px oklch(var(--romantic-glow-1) / 0.5), 0 0 40px oklch(var(--romantic-glow-2) / 0.3)'
                    },
                    '50%': {
                        boxShadow: '0 0 40px oklch(var(--romantic-glow-1) / 0.8), 0 0 80px oklch(var(--romantic-glow-2) / 0.5)'
                    }
                },
                'pulse-glow-slow': {
                    '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
                    '50%': { opacity: '0.9', transform: 'scale(1.05)' }
                },
                'zoom-breathe': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' }
                },
                'fade-in-delayed': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'bounce-in': {
                    '0%': { transform: 'scale(0) translateX(-50%)', opacity: '0' },
                    '50%': { transform: 'scale(1.1) translateX(-50%)' },
                    '100%': { transform: 'scale(1) translateX(-50%)', opacity: '1' }
                },
                'float-up': {
                    '0%': { transform: 'translateY(0) translateX(0)', opacity: '1' },
                    '100%': { transform: 'translateY(-100vh) translateX(20px)', opacity: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float-gentle': 'float-gentle 3s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'pulse-glow-slow': 'pulse-glow-slow 4s ease-in-out infinite',
                'zoom-breathe': 'zoom-breathe 3s ease-in-out infinite',
                'fade-in-delayed': 'fade-in-delayed 1s ease-out 0.5s both',
                'bounce-in': 'bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) both',
                'float-up': 'float-up linear forwards'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
