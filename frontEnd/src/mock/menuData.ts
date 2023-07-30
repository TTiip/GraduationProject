import type { MenuItemType } from '~/types'

const data: MenuItemType[] = [
  {
    path: '/',
    name: '首页',
    icon: 'i-iconoir:home',
    children: []
  },
  {
    path: '/article-manage',
    name: '商品',
    icon: 'i-iconoir:google-docs',
    children: [
      {
        path: '/department',
        name: '商品列表',
        icon: '',
        children: []
      },
      {
        path: '/department',
        name: '添加商品',
        icon: '',
        children: []
      },
      {
        path: '/department',
        name: '商品分类',
        icon: '',
        children: []
      },
      {
        path: '/department',
        name: '商品类型',
        icon: '',
        children: []
      }
    ]
  },
  {
    path: '/3',
    name: '订单',
    icon: 'i-iconoir:network-right',
    children: [
      {
        path: '/department',
        name: '部门管理',
        icon: '',
        children: []
      }
    ]
  },
  {
    path: '/4',
    name: '营销',
    icon: 'i-iconoir:bookmark-book',
    children: [
      {
        path: '/code-group',
        name: '代码组',
        icon: '',
        children: []
      },
      {
        path: '/global-code',
        name: '全局代码',
        icon: '',
        children: []
      }
    ]
  },
  {
    path: '/5',
    name: '权限',
    icon: 'i-iconoir:settings',
    children: [
      {
        path: '/system-setting',
        name: '用户列表',
        icon: '',
        children: []
      },
      {
        path: '/user-manage',
        name: '角色列表',
        icon: '',
        children: []
      },
      {
        path: '/role-permission',
        name: '菜单列表',
        icon: '',
        children: []
      },
      {
        path: '/role-permission',
        name: '资源列表',
        icon: '',
        children: []
      }
    ]
  }
]

export default data
