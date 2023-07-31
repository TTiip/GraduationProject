export default defineComponent({
  name: 'index',
  setup () {
    return (
      <route lang="yaml">
        redirect: /
        component: ~/layouts
        meta:
          title: 菜单列表
          showId: true
      </route>
    )
  }
})
