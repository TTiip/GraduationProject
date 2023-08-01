import { ElButton, ElForm, ElFormItem, ElInput, ElOption, ElSelect } from 'element-plus'
import { ItemTypeEnum, type typeFormItem } from '~/types/form'

export default defineComponent({
  name: 'from',
  props: {
    model: {
      type: Object,
      required: true
    },
    fromItemConfig: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const {
      model,
      fromItemConfig
    } = props
    const onSubmit = () => {
      console.log('submit!')
    }
    const renderElFormItem = (item: typeFormItem<keyof typeof model>) => {
		  switch (item.type) {
		    case ItemTypeEnum.Input:
		      return (
            <ElInput v-model={model[item.key]} {...item.attrs} />
          )
        case ItemTypeEnum.Select:
          return (
            <ElSelect
              v-model={model[item.key]}
              {...item.attrs}
            >
              {
                item.options && item.options.map(it => (
                  <ElOption
                    key={it.value}
                    label={it[item?.mapKey?.label]}
                    value={it[item?.mapKey?.value]}
                  />
                ))
              }
            </ElSelect>
          )
		    default:
		      return '默认位置'
		  }
    }
    return () => (
		  <div>
		    <ElForm inline={true} model={model} scroll-into-view-options={true}>
		      {
		        fromItemConfig.map((item: typeFormItem<keyof typeof model>) => (
		          <ElFormItem label={item.label} key={item.key}>
		            {
		              renderElFormItem(item)
		            }
		          </ElFormItem>
		        ))
		      }
          <ElFormItem>
            <ElButton onClick={ () => onSubmit() }>重置</ElButton>
            <ElButton type="primary" onClick={ () => onSubmit() }>查询</ElButton>
          </ElFormItem>
		    </ElForm>
		  </div>
    )
  }
})
