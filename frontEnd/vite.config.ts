
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import {
  presetAttributify,
  presetUno,
} from 'unocss'

const _resolve = (dir: string) => {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      mode: 'vue-scoped',
      // 自定义类名
      rules: [
        ['bg-box', { background: '#ff6700' }],
        // 此处报错 d / 4 不用理会
        [/^s-(\d+)$/, ([, d]) => ({ margin: `${d as any / 4}rem` })],
        [/^p-(\d+)$/, match => ({ padding: `${match[1] as any / 4}rem` })]
      ],
      shortcuts: [
        ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600']
      ],
      presets: [
        presetUno(),
        presetAttributify()
      ]
    }),
  ],
  // 配置项目别名
  resolve: {
    alias: {
      '~': _resolve('src'),
    },
  },
})
