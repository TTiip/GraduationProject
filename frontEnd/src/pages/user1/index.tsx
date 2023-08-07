import { ElButton, ElCard, ElIcon } from 'element-plus'
import Form from '~/components/from'
import Table from '~/components/table'
import { columnList, data } from '~/pages/user1/data'
import { type typeFormItem } from '~/types/form'

export default defineComponent({
  name: 'good1',
  setup () {
    const model = reactive({
      goodsName: ''
    })

    const rules = {}
    const fromItemConfig: typeFormItem<keyof typeof model>[] = [
      {
        label: '账号/姓名',
        key: 'goodsName',
        type: 'Input',
        attrs: {
          placeholder: '请输入账号/姓名'
        }
      }
    ]
    return () => (
      <div class="p-16px">
        <Form
          model={model}
          rules={rules}
          fromItemConfig={fromItemConfig}
        />
        <ElCard>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <ElIcon style="font-size: 24px">
                <i class="i-iconoir-task-list"></i>
              </ElIcon>
              <span class="ml-4px">数据列表</span>
            </div>
            <div>
              <ElButton type="primary">添加</ElButton>
            </div>
          </div>
        </ElCard>
        <Table
          data={data}
          columnList={columnList}
        />
      </div>
    )
  }
})
