import { ElSwitch } from 'element-plus'
import type { typeColumnList } from '~/types/table'

const data = [
  {
    id: 1,
    name: '服装-T恤',
    attributeCount: 2,
    paramCount: 5
  },
  {
    id: 2,
    name: '服装-裤装',
    attributeCount: 2,
    paramCount: 4
  },
  {
    id: 3,
    name: '手机数码-手机通讯',
    attributeCount: 2,
    paramCount: 4
  },
  {
    id: 4,
    name: '配件',
    attributeCount: 0,
    paramCount: 0
  },
  {
    id: 5,
    name: '居家',
    attributeCount: 0,
    paramCount: 0
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
    label: '类型名称',
    value: 'name',
    attr: {
      align: 'center'
    }
  },
  {
    label: '属性数量',
    value: 'attributeCount',
    attr: {
      align: 'center'
    }
  },
  {
    label: '参数数量',
    value: 'paramCount',
    attr: {
      align: 'center'
    }
  }
]

export {
  data,
  columnList
}
