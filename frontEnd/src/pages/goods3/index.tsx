import { ElButton, ElCard, ElIcon } from 'element-plus'
import Table from '~/components/table'
import { columnList, data } from '~/pages/goods3/data'

export default defineComponent({
  name: 'good3',
  setup () {
    return () => (
      <div class="p-16px">
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
          total={5}
        />
      </div>
    )
  }
})
