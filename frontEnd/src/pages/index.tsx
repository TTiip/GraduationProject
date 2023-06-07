export default defineComponent({
  name: 'index',
  setup () {
    return (
      <route lang="yaml">
        redirect: /
        component: ~/layouts
        meta:
          title: 首页
          showId: true
      </route>
    )
  }
})
