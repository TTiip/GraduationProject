import { ElCard, ElIcon } from 'element-plus'
import Form from '~/components/from'
import Table from '~/components/table'
import { columnList, data } from '~/pages/goods1/data'
import { type typeFormItem } from '~/types/form'

export default defineComponent({
  name: 'good1',
  setup () {
    const model = reactive({
      goodsName: '',
      goodsCode: '',
      goodsType: '',
      goodsBrand: '',
      goodsStatus: ''
    })

    const fromItemConfig: typeFormItem<keyof typeof model>[] = [
      {
        label: '商品名称',
        key: 'goodsName',
        type: 'Input',
        attrs: {
          placeholder: '请输入商品名称'
        }
      },
      {
        label: '商品货号',
        key: 'goodsCode',
        type: 'Input',
        attrs: {
          placeholder: '请输入商品货号'
        }
      },
      {
        label: '商品分类',
        key: 'goodsType',
        type: 'Select',
        mapKey: {
          value: 'value1',
          label: 'label1'
        },
        options: [
          {
            value1: 'good1',
            label1: '商品1'
          }
        ],
        attrs: {
          placeholder: '请选择商品分类'
        }
      },
      {
        label: '商品品牌',
        key: 'goodsBrand',
        type: 'Select',
        attrs: {
          placeholder: '请选择商品品牌'
        }
      },
      {
        label: '上架状态',
        key: 'goodsStatus',
        type: 'Select',
        attrs: {
          placeholder: '请选择上架状态'
        }
      }
    ]
    return () => (
      <div class="p-16px">
        <Form
          model={model}
          fromItemConfig={fromItemConfig}
        />
        <ElCard>
          <div class="flex items-center">
            <ElIcon style="font-size: 24px">
              <i class="i-iconoir-task-list"></i>
            </ElIcon>
            <span class="ml-4px">数据列表</span>
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
