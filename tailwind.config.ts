import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				marquee: "marquee 40s linear infinite",
				marqueeReverse: "marqueeReverse 40s linear infinite",
				'loop-scroll': 'loop-scroll 40s linear infinite'
			},
			keyframes: {
				marqueeReverse: {
					from: { transform: 'translateX(-50%)' },
					to: { transform: 'translateX(0%)' },
				},

				marquee: {
					from: { transform: 'translateX(0%)' },
					to: { transform: 'translateX(-50%)' },
				},
				'loop-scroll': {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(-100%)'
					}
				}
			},
			borderRadius: {
				sm: '6px',    // Small buttons or inputs
				md: '10px',   // Default for cards and controls (iOS uses ~10)
				lg: '12px',   // Used for modals, sheets, etc.
				full: '9999px' // For pills or circular avatars
			},

			fontSize: {
				xs: ['12px', { lineHeight: '16px', fontWeight: '400' }],
				sm: ['14px', { lineHeight: '20px', fontWeight: '400' }],
				base: ['16px', { lineHeight: '24px', fontWeight: '400' }],
				lg: ['18px', { lineHeight: '28px', fontWeight: '500' }],
				xl: ['20px', { lineHeight: '28px', fontWeight: '600' }],
				'2xl': ['24px', { lineHeight: '32px', fontWeight: '600' }],
				'3xl': ['30px', { lineHeight: '36px', fontWeight: '700' }],
				'4xl': ['36px', { lineHeight: '40px', fontWeight: '700' }],
				'5xl': ['48px', { lineHeight: '52px', fontWeight: '800' }]
			},

			spacing: {
				px: '1px',
				0: '0px',
				1: '4px',   // iOS: small spacing
				2: '8px',
				3: '12px',
				4: '16px',  // default content spacing
				5: '20px',
				6: '24px',  // iOS edge-to-edge margin
				8: '32px',
				10: '40px',
				12: '48px'
			},

			backdropBlur: {
				xs: '2px',
				sm: '4px',
				md: '8px', // added for iOS style frosted glass
				lg: '12px'
			},

			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}

		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
