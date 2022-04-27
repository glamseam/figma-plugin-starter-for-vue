import { defineConfig } from 'vite'
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
                    code: resolve(__dirname, 'src/code.ts')
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
            viteSingleFile()
        ],
        resolve: {
            alias: {
                '@': join(__dirname, 'src')
            }
        }
    }
})
