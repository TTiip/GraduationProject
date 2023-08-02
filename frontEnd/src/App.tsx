import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default defineComponent({
  name: 'app-component',
  setup () {
    const config = {
      size: 'default',
      message: {
        max: 3
      },
      button: {
        autoInsertSpace: true
      },
      locale: zhCn
    }

    return () => (
      <ElConfigProvider {...config}>
        <main class="font-sans text-gray-700 dark:text-gray-200">
          <router-view />
        </main>
      </ElConfigProvider>
    )
  }
})
