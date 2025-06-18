import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
    base: './',
    plugins: [viteSingleFile()],
    build: {
        outDir: 'dev_build',
        assetsInlineLimit: Infinity, // Inlines assets like images into JS
        cssCodeSplit: false,
        inlineDynamicImports: true,
        rollupOptions: {
            input: 'index.html',
        },
    }
})