import { ElSwitch } from 'element-plus'
import type { typeColumnList } from '~/types/table'

const data = [
  {
    id: 1,
    name: '商品管理员',
    description: '只能查看及操作商品',
    adminCount: 0,
    createTime: '2020-02-03 08:50:37',
    status: true,
    sort: 0
  },
  {
    id: 2,
    name: '订单管理员',
    description: '只能查看及操作订单',
    adminCount: 0,
    createTime: '2018-09-30 07:53:45',
    status: true,
    sort: 0
  },
  {
    id: 5,
    name: '超级管理员',
    description: '拥有所有查看和操作功能',
    adminCount: 0,
    createTime: '2020-02-02 07:11:05',
    status: true,
    sort: 0
  }
]

const columnList: typeColumnList[] = [
  {
    label: '编号',
    value: 'id',
    attr: {
      width: 100,
      align: 'center'
    }
  },
  {
    label: '角色名称',
    value: 'name',
    attr: {
      align: 'center'
    }
  },
  {
    label: '描述',
    value: 'description',
    attr: {
      align: 'center'
    }
  },
  {
    label: '用户数',
    value: 'adminCount',
    attr: {
      width: 140,
      align: 'center'
    }
  },
  {
    label: '添加时间',
    value: 'createTime',
    attr: {
      align: 'center'
    },
    renderFn: (row: any) => {
      return (
        <div>
          <div>{row.createTime ? row.createTime : 'N/A'}</div>
        </div>
      )
    }
  },
  {
    label: '是否启用',
    value: 'status',
    attr: {
      width: 140,
      align: 'center'
    },
    renderFn: (row: any) => {
      return (
        <div>
          <ElSwitch v-model={row.status} />
        </div>
      )
    }
  }
]

export {
  data,
  columnList
}
