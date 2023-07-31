export default defineComponent({
  name: 'index',
  setup () {
    return (
      <route lang="yaml">
        redirect: /
        component: ~/layouts
        meta:
          title: 商品分类
          showId: true
      </route>
    )
  }
})
