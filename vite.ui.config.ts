import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { terser } from 'rollup-plugin-terser'
import { join, resolve } from 'path'

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production'

    return {
        build: {
            assetsInlineLimit: 100000000,
            cssCodeSplit: false,
            emptyOutDir: false,
            sourcemap: false,
            rollupOptions: {
                input: {
                    ui: resolve(__dirname, 'ui.html')
                },
                output: {
                    entryFileNames: '[name].js'
                },
                plugins: [
                    terser({
                        compress: {
                            drop_console: isProduction
                        }
                    })
                ]
            }
        },
        plugins: [
            vue({ reactivityTransform: true }),
            vueJsx(),
            viteSingleFile()
        ],
        resolve: {
            alias: {
                '@': join(__dirname, 'src')
            }
        }
    }
})
