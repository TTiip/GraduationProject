export default defineComponent({
  name: 'index',
  setup () {
    const num = ref<number>(0)
    function addNum () {
      num.value += 1
    }
    return () => (
      <div>
        <h1 onClick={ addNum }>
          Index - { num.value }
        </h1>
      </div>
    )
  }
})
