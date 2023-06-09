/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vueJsx(),
    Vue({
      reactivityTransform: true
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      // 识别文件后缀
      extensions: ['vue', 'js', 'jsx', 'ts', 'tsx'],
      pagesDir: [
        {
          dir: 'src/pages',
          baseRoute: ''
        }
        // // src/test 文件夹下会生成 /test/filename 这样的路由
        // {
        //   dir: 'src/test',
        //   baseRoute: 'test'
        // },
        // // 会识别fruits下多个分类下pages的文件
        // {
        //   dir: 'src/fruits/**/pages',
        //   baseRoute: 'fruits'
        // }
      ],
      // 当识别到的文件路径包含以下字段时，会自动剔除，比如我们的一些特定的小组件
      exclude: ['**/components/*'], // 这里的作用是将src目录下，不将含有component字段的组件生成为页面
      // 引入模式
      importMode: 'async',
      // 只要包含fruits的路由，使用异步懒加载方式,
      // 解除注释即可在页面中看到使用不同的layout即已生效
      // importMode(path) {
      //   return path.includes('fruits') ? 'async' : 'sync'
      // },
      // 将'[]'替换为'_',未测试成功
      // replaceSquareBrackets: true,
      // 遍历路由信息，给默认路由加一个redirect
      extendRoute (route) {
        // 如果是默认路由，加一个 redirect 重定向到首页
        // 这里建议 console.log(route) 查看路由信息 在做调试
        // 如果这里配置 需要在页面文件夹 新建 [...all].tsx 文件才能匹配到
        if (route.path === '/:all(.*)*') {
          return {
            ...route
            // 重定向
            // redirect: '/'
          }
        }
      },
      // 单独判断每一个路由，返回一个新的路由or原路由
      // extendRoute(route) {
      //   // console.log(route.path)
      //   // 这里为了测试这个方法的效果，就是判断一下路由中包含了fruit字符串的，更换layout
      //   if (route.path.includes('fruit')) {
      //     return {
      //       ...route,
      //       meta: { layout: 'home' },
      //     }
      //   }
      //   return route
      // },
      // 整体处理整个routes的信息，然后进行相应的处理
      // onRoutesGenerated (routes) {
      //   console.log(routes, 'routes')
      //   const temp_routes = JSON.parse(JSON.stringify(routes))
      //   temp_routes.forEach((item: any) => {
      //     // 这里依然是判断一下路由中包含了fruit字符串的，更换layout
      //     if (item.path.includes('fruit')) {
      //       item.meta = {
      //         layout: 'home'
      //       }
      //     }
      //   })
      //   return temp_routes
      // },
      // 这里涉及到更改客户端代码
      // onClientGenerated(clientCode) {
      //   // 能够完整获取到我们实际生成的路由的完整代码，string格式的，
      //   // 感觉可以通过正则对这个方法进行替换，或者各种字符串骚操作进行替换
      //   return clientCode
      // },
      // 配置SFC文件中，route块的默认语言
      routeBlockLang: 'json5'
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
        // 自定义使用带结果提示的 axios
        {
          '~/axios': [
            // default imports
            ['default', 'axios'] // import { default as axios } from '~/axios',
          ]
        }
      ],
      dts: true,
      dirs: [
        './src/composables',
        './src/stores'
      ],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()]
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      // 这里不建议加上 ts 和 tsx 自动引入的ts和tsx文件，类型是any，组件上没有类型报错
      // 具体的原因不知道，不知道是不是设计就是如此
      // 所以 建议手动引入ts、tsx后缀结尾的文件。
      extensions: ['vue', 'js', 'jsx'],
      directoryAsNamespace: true,
      dts: true,
      // 这里配置需要自动引入的文件路径
      // 文件改动和编译的时候会自动更新 .d.ts
      // 自动引入的组件在 tsx 文件中不能使用还是会提示找不到
      // ts 文件没有测试过，tsx 文件中还是需要手动引入组件。
      dirs: [],
      resolvers: [ElementPlusResolver()]
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss()
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom'
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
