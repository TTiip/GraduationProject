export default defineComponent({
  name: 'article-manage',
  setup () {
    return (
      <route lang="yaml">
        redirect: /article-manage
        component: ~/layouts
        meta:
          title: 文章管理
          showId: true
      </route>
    )
  }
})
