import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
	base: '/react-component-npm-package/',
	plugins: [react()],
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
		outDir: 'demo/dist',
		sourcemap: true
	}
})
