export default defineComponent({
  name: 'index',
  setup () {
    return (
      <route lang="yaml">
        redirect: /role-permission
        component: ~/layouts
        meta:
          title: 系统管理
          showId: true
      </route>
    )
  }
})
