import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'heading': ['Russo One', 'Titillium Web', 'sans-serif'],
				'body': ['Montserrat', 'sans-serif'],
				'f1': ['Titillium Web', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'lights-on': {
					'0%': { backgroundColor: 'hsl(220 13% 18%)', boxShadow: 'none' },
					'100%': { backgroundColor: 'hsl(0 100% 50%)', boxShadow: '0 0 30px hsl(0 100% 50%)' }
				},
				'lights-off': {
					'0%': { backgroundColor: 'hsl(0 100% 50%)', boxShadow: '0 0 30px hsl(0 100% 50%)' },
					'100%': { backgroundColor: 'hsl(220 13% 18%)', boxShadow: 'none' }
				},
				'ferrari-slide': {
					'0%': { transform: 'translateX(-100%) scale(0.8)', opacity: '0' },
					'100%': { transform: 'translateX(0) scale(1)', opacity: '1' }
				},
				'speed-blur': {
					'0%': { filter: 'blur(0px)' },
					'50%': { filter: 'blur(2px)' },
					'100%': { filter: 'blur(0px)' }
				},
				'engine-rev': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'lights-on': 'lights-on 0.2s ease-out forwards',
				'lights-off': 'lights-off 0.3s ease-out forwards',
				'ferrari-slide': 'ferrari-slide 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'speed-blur': 'speed-blur 2s ease-in-out infinite',
				'engine-rev': 'engine-rev 0.3s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
