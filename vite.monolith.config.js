import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    base: './',

    build: {
        outDir: 'dist-monolith',
        emptyOutDir: true,
        assetsInlineLimit: 0, // IMPORTANT: prevents MP4 + assets from being inlined poorly
    },

    plugins: [
        viteStaticCopy({
            targets: [
                { src: 'render.mp4', dest: '' },
                { src: 'fonts', dest: '' },
                { src: 'shadow_main.css', dest: '' },
                { src: 'dist', dest: '' },
                { src: 'reveal.js-plugins', dest: '' },

                // KEEP ONLY FILES YOU ACTUALLY NEED
                {
                    src: 'node_modules/chart.js/dist/chart.umd.js',
                    dest: 'node_modules/chart.js/dist'
                }
            ]
        })
    ]
});