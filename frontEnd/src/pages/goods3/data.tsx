import { ElSwitch } from 'element-plus'
import type { typeColumnList } from '~/types/table'

const data = [
  {
    id: 1,
    parentId: 0,
    name: '服装',
    level: 0,
    productCount: 100,
    productUnit: '件',
    navStatus: true,
    showStatus: true,
    sort: 1,
    icon: null,
    keywords: '服装',
    description: null
  },
  {
    id: 2,
    parentId: 0,
    name: '手机数码',
    level: 0,
    productCount: 100,
    productUnit: '件',
    navStatus: true,
    showStatus: true,
    sort: 1,
    icon: null,
    keywords: '手机数码',
    description: null
  },
  {
    id: 3,
    parentId: 0,
    name: '家用电器',
    level: 0,
    productCount: 100,
    productUnit: '件',
    navStatus: true,
    showStatus: true,
    sort: 1,
    icon: null,
    keywords: '家用电器',
    description: null
  },
  {
    id: 4,
    parentId: 0,
    name: '家具家装',
    level: 0,
    productCount: 100,
    productUnit: '件',
    navStatus: true,
    showStatus: true,
    sort: 1,
    icon: null,
    keywords: '家具家装',
    description: null
  },
  {
    id: 5,
    parentId: 0,
    name: '汽车用品',
    level: 0,
    productCount: 100,
    productUnit: '件',
    navStatus: true,
    showStatus: true,
    sort: 1,
    icon: null,
    keywords: '汽车用品',
    description: null
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
    label: '分类名称',
    value: 'name',
    attr: {
      align: 'center'
    }
  },
  {
    label: '级别',
    value: 'navStatus',
    attr: {
      align: 'center'
    },
    renderFn: (row: any) => {
      return (
        <div>
          <div>{['一级'][row.level]}</div>
        </div>
      )
    }
  },
  {
    label: '商品数量',
    value: 'productCount',
    attr: {
      align: 'center'
    }
  },
  {
    label: '数量单位',
    value: 'productUnit',
    attr: {
      align: 'center'
    }
  },
  {
    label: '导航栏',
    value: 'navStatus',
    attr: {
      width: 100,
      align: 'center'
    },
    renderFn: (row: any) => {
      return (
        <div><ElSwitch v-model={row.navStatus} /></div>
      )
    }
  },
  {
    label: '是否显示',
    value: 'showStatus',
    attr: {
      width: 100,
      align: 'center'
    },
    renderFn: (row: any) => {
      return (
        <div><ElSwitch v-model={row.showStatus} /></div>
      )
    }
  },
  {
    label: '排序',
    value: 'sort',
    attr: {
      width: 100,
      align: 'center'
    }
  }
]

export {
  data,
  columnList
}
