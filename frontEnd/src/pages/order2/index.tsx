import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'

export default defineComponent({
  name: 'order2',
  setup () {
    const form = reactive({
      day1: '',
      day2: ''
    })
    return () => (
      <div class="p-16px">
        <ElForm model={form} label-width="120px">
          <ElFormItem label="订单完成超过：">
            <ElInput class="w-300px!" v-model={form.day1}>
              {{
                append: () => '天'
              }}
            </ElInput>
            <span class="ml-12px">自动结束交易，不能申请售后</span>
          </ElFormItem>
          <ElFormItem label="订单完成超过：">
            <ElInput class="w-300px!" v-model={form.day2}>
              {{
                append: () => '天'
              }}
            </ElInput>
            <span class="ml-12px">自动五星好评</span>
          </ElFormItem>
          <ElFormItem>
            <ElButton type="primary">提交</ElButton>
          </ElFormItem>
        </ElForm>
      </div>
    )
  }
})
