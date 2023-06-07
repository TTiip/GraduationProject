export default defineComponent({
  name: 'index',
  setup () {
    return (
      <route lang="yaml">
        redirect: /system-setting
        component: ~/layouts
        meta:
          title: 系统管理
          showId: true
      </route>
    )
  }
})
