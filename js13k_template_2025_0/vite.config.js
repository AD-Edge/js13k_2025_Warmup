export default {
    base: './',
    build: {
        outDir: 'dev_codebase_builds',
        assetsInlineLimit: Infinity, // Inlines assets like images into JS
        rollupOptions: {
            input: 'index.html',
            output: {
                manualChunks: () => null // Disable code splitting
            }
        }
    }
};