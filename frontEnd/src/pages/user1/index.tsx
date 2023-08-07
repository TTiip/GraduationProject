import { ElButton, ElCard, ElDialog, ElForm, ElFormItem, ElIcon, ElInput, ElSwitch } from 'element-plus'
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

    const dialogFormVisible = ref(false)
    const form: any = ref({})
    const handleEdit = (row: any) => {
      dialogFormVisible.value = true
      form.value = row
      console.log(form.value, 'form.value')
    }

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
          total={10}
          onEdit={(row: any) => handleEdit(row)}
        />
        <ElDialog width={700} v-model={dialogFormVisible.value} title="角色编辑/新增">
          <ElForm model={form.value} label-width={80}>
            <ElFormItem label="帐号">
              <ElInput v-model={form.value.username} autocomplete="off" />
            </ElFormItem>
            <ElFormItem label="姓名">
              <ElInput v-model={form.value.nickName} autocomplete="off" />
            </ElFormItem>
            <ElFormItem label="邮箱">
              <ElInput v-model={form.value.email} autocomplete="off" />
            </ElFormItem>
            <ElFormItem label="密码">
              <ElInput type="password" v-model={form.value.password} autocomplete="off" />
            </ElFormItem>
            <ElFormItem label="备注">
              <ElInput v-model={form.value.note} autocomplete="off" />
            </ElFormItem>
            <ElFormItem label="是否启用">
              <ElSwitch v-model={form.value.status}></ElSwitch>
            </ElFormItem>
            <ElFormItem>
              <ElButton type="primary" onClick={() => dialogFormVisible.value = false}>确定</ElButton>
            </ElFormItem>
          </ElForm>
          {{
            footer: () => (
              <div>
                <span class="dialog-footer">
                  <ElButton onClick={() => dialogFormVisible.value = false}>取消</ElButton>
                  <ElButton type="primary" onClick={() => dialogFormVisible.value = false}>确定</ElButton>
                </span>
              </div>
            )
          }}
        </ElDialog>
      </div>
    )
  }
})
