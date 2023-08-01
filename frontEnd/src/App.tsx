import { ElConfigProvider } from 'element-plus'

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
      }
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
