export default defineComponent({
  name: 'code-group',
  setup () {
    return (
      <route lang="yaml">
        redirect: /code-group
        component: ~/layouts
        meta:
          title: 数据字典
          showId: true
      </route>
    )
  }
})
