import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(), 
    styleImport(
      {
        libs: [
          {
            libraryName: 'zarm',
            esModule: true,
            resolveStyle: (name) => {
              return `zarm/es/${name}/style/css`
            }
          }
        ]
      }
    ),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
})
