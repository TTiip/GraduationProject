export default defineComponent({
  name: 'department',
  setup () {
    return (
      <route lang="yaml">
        redirect: /department
        component: ~/layouts
        meta:
          title: 组织架构
          hidden: false
          permission: true
      </route>
    )
  }
})
