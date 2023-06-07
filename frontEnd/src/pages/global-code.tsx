export default defineComponent({
  name: 'global-code',
  setup () {
    return (
      <route lang="yaml">
        redirect: /global-code
        component: ~/layouts
        meta:
          title: 数据字典
        showId: true
      </route>
    )
  }
})
