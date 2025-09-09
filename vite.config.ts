import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
	root: 'demo',
	plugins: [react()],
	base: '/react-component-npm-package/',
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	server: {
		port: 5173,
		open: true
	},
	build: {
		outDir: 'dist',
		sourcemap: true
	}
})
