export default defineComponent({
  name: 'global-code',
  setup () {
    const num = ref(0)
    function addNum () {
      num.value += 1
    }
    return () => (
      <div>
        <h1 onClick={ addNum }>
          GlobalCode: { num.value }
        </h1>
      </div>
    )
  }
})
