import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#17212b', brand: '#3157d5', canvas: '#f5f7fb' }, boxShadow: { soft: '0 8px 30px rgba(23,33,43,.06)' } } }, plugins: [] };
export default config;
