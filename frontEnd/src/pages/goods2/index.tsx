import Form from '~/components/from'
import { type typeFormItem } from '~/types/form'
import Steps from '~/components/steps'

export default defineComponent({
  name: 'good2',
  setup () {
    const model = reactive({
      goodstype: '',
      goodsName: '',
      goodsName2: '',
      goodsBrand: '',
      goodsDesc: '',
      goodsCode: '',
      goodsPrice: '',
      marketPrice: '',
      goodsNum: '',
      goodsWeight: '',
      goodsOrder: ''
    })

    const rules = {
      goodstype: [
        { required: true, message: '请输入商品名称', trigger: ['blur', 'change'] }
      ],
      goodsName: [
        { required: true, message: '请输入商品货号', trigger: ['blur', 'change'] }
      ],
      goodsName2: [
        { required: true, message: '请选择商品分类', trigger: ['blur', 'change'] }
      ],
      goodsBrand: [
        { required: true, message: '请选择商品品牌', trigger: ['blur', 'change'] }
      ]
    }
    const fromItemConfig: typeFormItem<keyof typeof model>[] = [
      {
        label: '商品分类',
        key: 'goodsName',
        type: 'Select',
        attrs: {
          placeholder: '请选择商品分类'
        }
      },
      {
        label: '商品名称',
        key: 'goodsName',
        type: 'Input',
        attrs: {
          placeholder: '请输入商品名称'
        }
      },
      {
        label: '副标题',
        key: 'goodsName2',
        type: 'Input',
        attrs: {
          placeholder: '请填写副标题'
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
        label: '商品介绍',
        key: 'goodsDesc',
        type: 'Select',
        attrs: {
          placeholder: '请填写商品介绍'
        }
      },
      {
        label: '商品货号',
        key: 'goodsCode',
        type: 'Select',
        attrs: {
          placeholder: '请填写商品货号'
        }
      },
      {
        label: '商品售价',
        key: 'goodsPrice',
        type: 'Input',
        attrs: {
          placeholder: '请输入商品售价'
        }
      },
      {
        label: '市场价',
        key: 'marketPrice',
        type: 'Input',
        attrs: {
          placeholder: '请输入市场价'
        }
      },
      {
        label: '商品库存',
        key: 'goodsNum',
        type: 'Input',
        attrs: {
          placeholder: '请填写商品库存'
        }
      },
      {
        label: '商品重量',
        key: 'goodsWeight',
        type: 'Input',
        attrs: {
          placeholder: '请填写商品重量'
        }
      },
      {
        label: '排序',
        key: 'goodsOrder',
        type: 'Input',
        attrs: {
          placeholder: '请填写排序'
        }
      }
    ]
    return () => (
      <div class="p-16px">
        <Steps></Steps>
        <div class="w-70% mt-30px my-0 mx-auto">
          <Form
            model={model}
            rules={rules}
            inline={false}
            fromItemConfig={fromItemConfig}
            optionText="下一步，填写促销信息"
          />
        </div>
      </div>
    )
  }
})
