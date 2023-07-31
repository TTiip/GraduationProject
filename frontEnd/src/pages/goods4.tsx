export default defineComponent({
  name: 'index',
  setup () {
    return (
      <route lang="yaml">
        redirect: /
        component: ~/layouts
        meta:
          title: 商品类型
          showId: true
      </route>
    )
  }
})
