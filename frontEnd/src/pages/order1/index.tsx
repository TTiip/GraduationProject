import { ElButton, ElCard, ElIcon } from 'element-plus'
import Form from '~/components/from'
import Table from '~/components/table'
import { columnList, data } from '~/pages/order1/data'
import { type typeFormItem } from '~/types/form'

export default defineComponent({
  name: 'good1',
  setup () {
    const model = reactive({
      goodsName: '',
      goodsCode: '',
      goodsType: '',
      goodsBrand: '',
      goodsStatus: '',
      goodsStatus1: ''
    })

    const rules = {}

    const fromItemConfig: typeFormItem<keyof typeof model>[] = [
      {
        label: '订单编号',
        key: 'goodsName',
        type: 'Input',
        attrs: {
          placeholder: '请输入订单编号'
        }
      },
      {
        label: '收货人',
        key: 'goodsCode',
        type: 'Input',
        attrs: {
          placeholder: '请输入收货人'
        }
      },
      {
        label: '提交时间',
        key: 'goodsType',
        type: 'DatePicker',
        attrs: {
          placeholder: '请选择提交时间'
        }
      },
      {
        label: '订单状态',
        key: 'goodsBrand',
        type: 'Select',
        attrs: {
          placeholder: '请选择订单状态'
        }
      },
      {
        label: '订单分类',
        key: 'goodsStatus',
        type: 'Select',
        attrs: {
          placeholder: '请选择订单分类'
        }
      },
      {
        label: '订单来源',
        key: 'goodsStatus1',
        type: 'Select',
        attrs: {
          placeholder: '请选择订单来源'
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
