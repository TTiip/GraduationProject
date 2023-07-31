export default defineComponent({
  name: 'app-component',
  setup () {
    return () => (
      <main class="font-sans text-gray-700 dark:text-gray-200">
        <router-view />
      </main>
    )
  }
})
