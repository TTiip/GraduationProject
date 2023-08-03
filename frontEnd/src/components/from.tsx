import { ElButton, ElForm, ElFormItem, ElInput, ElOption, ElSelect } from 'element-plus'
import type { FormInstance } from 'element-plus'
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
    },
    inline: {
      type: Boolean,
      default: true
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const {
      model,
      fromItemConfig,
      inline,
      rules
    } = props

    const ruleFormRef = ref<FormInstance>()

    const onSubmit = async (formEl: FormInstance | undefined) => {
      if (!formEl) { return }
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!', fields)
        }
      })
    }

    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) { return }
      formEl.resetFields()
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
        <ElForm ref={ruleFormRef} rules={rules} inline={inline} model={model} scroll-into-view-options={true}>
          {
            fromItemConfig.map((item: typeFormItem<keyof typeof model>) => (
              <ElFormItem label={item.label} key={item.key} prop={item.key}>
                {
                  renderElFormItem(item)
                }
              </ElFormItem>
            ))
          }
          <ElFormItem>
            <ElButton onClick={ () => resetForm(ruleFormRef.value) }>重置</ElButton>
            <ElButton type="primary" onClick={ () => onSubmit(ruleFormRef.value) }>查询</ElButton>
          </ElFormItem>
        </ElForm>
      </div>
    )
  }
})
