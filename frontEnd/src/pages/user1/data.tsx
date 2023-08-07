import { ElSwitch } from 'element-plus'
import type { typeColumnList } from '~/types/table'

const data = [
  {
    id: 1,
    username: 'test',
    password: '$2a$10$NZ5o7r2E.ayT2ZoxgjlI.eJ6OEYqjH7INR/F.mXDbjZJi9HF0YCVG',
    icon: 'https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/icon/github_icon_02.png',
    email: 'test@qq.com',
    nickName: '测试账号',
    note: null,
    createTime: '2018-09-29 05:55:30',
    loginTime: '2018-09-29T05:55:39.000+00:00',
    status: true
  },
  {
    id: 3,
    username: 'admin',
    password: '$2a$10$.E1FokumK5GIXWgKlg.Hc.i/0/2.qdAwYFL1zc5QHdyzpXOr38RZO',
    icon: 'https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/icon/github_icon_01.png',
    email: 'admin@163.com',
    nickName: '系统管理员',
    note: '系统管理员',
    createTime: '2018-10-08 05:32:47',
    loginTime: '2019-04-20 04:45:16',
    status: true
  },
  {
    id: 4,
    username: 'macro',
    password: '$2a$10$Bx4jZPR7GhEpIQfefDQtVeS58GfT5n6mxs/b4nLLK65eMFa16topa',
    icon: 'https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/icon/github_icon_01.png',
    email: 'macro@qq.com',
    nickName: 'macro',
    note: 'macro专用',
    createTime: '2019-10-06 07:53:51',
    loginTime: '2020-02-03 06:55:55',
    status: true
  },
  {
    id: 6,
    username: 'productAdmin',
    password: '$2a$10$6/.J.p.6Bhn7ic4GfoB5D.pGd7xSiD1a9M6ht6yO0fxzlKJPjRAGm',
    icon: 'https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/icon/github_icon_03.png',
    email: 'product@qq.com',
    nickName: '商品管理员',
    note: '只有商品权限',
    createTime: '2020-02-07 08:15:08',
    loginTime: null,
    status: true
  },
  {
    id: 7,
    username: 'orderAdmin',
    password: '$2a$10$UqEhA9UZXjHHA3B.L9wNG.6aerrBjC6WHTtbv1FdvYPUI.7lkL6E.',
    icon: 'https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/icon/github_icon_04.png',
    email: 'order@qq.com',
    nickName: '订单管理员',
    note: '只有订单管理权限',
    createTime: '2020-02-07 08:15:50',
    loginTime: null,
    status: true
  },
  {
    id: 8,
    username: 'test123',
    password: '$2a$10$M1qJguEzwoAN0la7PB8UO.HOGe1xZGku7xw1iTaUUpY0ZVRCxrxoO',
    icon: 'string',
    email: 'abc@qq.com',
    nickName: 'string',
    note: 'string',
    createTime: '2022-08-07 06:45:42',
    loginTime: null,
    status: true
  },
  {
    id: 9,
    username: 'test256',
    password: '$2a$10$kTMBrt8mkXcO8T4eHThFWOf3KuNK6tqevkiAf4YbtXtaCJ6ocYkJa',
    icon: 'string',
    email: 'abc@qq.com',
    nickName: 'string',
    note: 'string',
    createTime: '2022-08-07 06:52:57',
    loginTime: null,
    status: true
  },
  {
    id: 10,
    username: 'test1267',
    password: '$2a$10$VUywDhXVPY13YZxMD/uPWeDqkzSozN7o8u/3MX6sBig2NK2VaTJZ2',
    icon: null,
    email: 'test1267@qq.com',
    nickName: 'test1267',
    note: 'test1267',
    createTime: '2023-01-04 08:13:34',
    loginTime: null,
    status: true
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
    label: '账号',
    value: 'username',
    attr: {
      align: 'center'
    }
  },
  {
    label: '姓名',
    value: 'nickName',
    attr: {
      align: 'center'
    }
  },
  {
    label: '邮箱',
    value: 'email',
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
    label: '最后登录',
    value: 'loginTime',
    attr: {
      align: 'center'
    },
    renderFn: (row: any) => {
      return (
        <div>
          <div>{row.loginTime ? row.loginTime : 'N/A'}</div>
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
