import { ElSwitch } from 'element-plus'
import type { typeColumnList } from '~/types/table'

const data = [
  {
    id: 12,
    memberId: 1,
    couponId: 2,
    orderSn: '201809150101000001',
    createTime: '2018-09-15 04:24:27',
    memberUsername: 'test',
    totalAmount: 18732,
    payAmount: 16377.75,
    freightAmount: 20,
    promotionAmount: 2344.25,
    integrationAmount: 0,
    couponAmount: 10,
    discountAmount: 10,
    payType: 0,
    sourceType: 1,
    status: 4,
    orderType: 0,
    deliveryCompany: '',
    deliverySn: '',
    autoConfirmDay: 15,
    integration: 13284,
    growth: 13284,
    promotionInfo: '单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠',
    billType: null,
    billHeader: null,
    billContent: null,
    billReceiverPhone: null,
    billReceiverEmail: null,
    receiverName: '大梨',
    receiverPhone: '18033441849',
    receiverPostCode: '518000',
    receiverProvince: '江苏省',
    receiverCity: '常州市',
    receiverRegion: '天宁区',
    receiverDetailAddress: '东晓街道',
    note: '111',
    confirmStatus: 0,
    deleteStatus: 0,
    useIntegration: null,
    paymentTime: null,
    deliveryTime: null,
    receiveTime: null,
    commentTime: null,
    modifyTime: '2019-11-09T08:50:28.000+00:00'
  },
  {
    id: 13,
    memberId: 1,
    couponId: 2,
    orderSn: '201809150102000002',
    createTime: '2018-09-15 06:24:29',
    memberUsername: 'test',
    totalAmount: 18732,
    payAmount: 16377.75,
    freightAmount: 0,
    promotionAmount: 2344.25,
    integrationAmount: 0,
    couponAmount: 10,
    discountAmount: 0,
    payType: 1,
    sourceType: 1,
    status: 1,
    orderType: 0,
    deliveryCompany: '',
    deliverySn: '',
    autoConfirmDay: 15,
    integration: 13284,
    growth: 13284,
    promotionInfo: '单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠',
    billType: null,
    billHeader: null,
    billContent: null,
    billReceiverPhone: null,
    billReceiverEmail: null,
    receiverName: '大梨',
    receiverPhone: '18033441849',
    receiverPostCode: '518000',
    receiverProvince: '广东省',
    receiverCity: '深圳市',
    receiverRegion: '福田区',
    receiverDetailAddress: '东晓街道',
    note: null,
    confirmStatus: 0,
    deleteStatus: 0,
    useIntegration: 1000,
    paymentTime: '2018-10-11T06:04:19.000+00:00',
    deliveryTime: null,
    receiveTime: null,
    commentTime: null,
    modifyTime: null
  },
  {
    id: 14,
    memberId: 1,
    couponId: 2,
    orderSn: '201809130101000001',
    createTime: '2018-09-13 08:57:40',
    memberUsername: 'test',
    totalAmount: 18732,
    payAmount: 16377.75,
    freightAmount: 0,
    promotionAmount: 2344.25,
    integrationAmount: 0,
    couponAmount: 10,
    discountAmount: 0,
    payType: 2,
    sourceType: 1,
    status: 3,
    orderType: 0,
    deliveryCompany: '顺丰快递',
    deliverySn: '201707196398345',
    autoConfirmDay: 15,
    integration: 13284,
    growth: 13284,
    promotionInfo: '单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠',
    billType: null,
    billHeader: null,
    billContent: null,
    billReceiverPhone: null,
    billReceiverEmail: null,
    receiverName: '大梨',
    receiverPhone: '18033441849',
    receiverPostCode: '518000',
    receiverProvince: '广东省',
    receiverCity: '深圳市',
    receiverRegion: '福田区',
    receiverDetailAddress: '东晓街道',
    note: null,
    confirmStatus: 1,
    deleteStatus: 0,
    useIntegration: null,
    paymentTime: '2018-10-13T05:44:04.000+00:00',
    deliveryTime: '2018-10-16T05:43:41.000+00:00',
    receiveTime: '2022-11-11T08:19:34.000+00:00',
    commentTime: null,
    modifyTime: null
  },
  {
    id: 29,
    memberId: 1,
    couponId: null,
    orderSn: '202002250100000003',
    createTime: '2020-02-25 08:07:58',
    memberUsername: 'test',
    totalAmount: 540,
    payAmount: 540,
    freightAmount: 0,
    promotionAmount: 0,
    integrationAmount: 0,
    couponAmount: 0,
    discountAmount: 0,
    payType: 0,
    sourceType: 1,
    status: 4,
    orderType: 0,
    deliveryCompany: null,
    deliverySn: null,
    autoConfirmDay: null,
    integration: 0,
    growth: 0,
    promotionInfo: '无优惠,无优惠',
    billType: null,
    billHeader: null,
    billContent: null,
    billReceiverPhone: null,
    billReceiverEmail: null,
    receiverName: '大梨',
    receiverPhone: '18033441849',
    receiverPostCode: '518000',
    receiverProvince: '广东省',
    receiverCity: '深圳市',
    receiverRegion: '南山区',
    receiverDetailAddress: '科兴科学园',
    note: null,
    confirmStatus: 0,
    deleteStatus: 0,
    useIntegration: null,
    paymentTime: null,
    deliveryTime: null,
    receiveTime: null,
    commentTime: null,
    modifyTime: null
  },
  {
    id: 30,
    memberId: 1,
    couponId: null,
    orderSn: '202002250100000004',
    createTime: '2020-02-25 08:50:13',
    memberUsername: 'test',
    totalAmount: 240,
    payAmount: 240,
    freightAmount: 20,
    promotionAmount: 0,
    integrationAmount: 0,
    couponAmount: 0,
    discountAmount: 10,
    payType: 0,
    sourceType: 1,
    status: 3,
    orderType: 0,
    deliveryCompany: '顺丰快递',
    deliverySn: '12333333',
    autoConfirmDay: null,
    integration: 0,
    growth: 0,
    promotionInfo: '无优惠',
    billType: null,
    billHeader: null,
    billContent: null,
    billReceiverPhone: null,
    billReceiverEmail: null,
    receiverName: '大梨',
    receiverPhone: '18033441849',
    receiverPostCode: '518000',
    receiverProvince: '广东省',
    receiverCity: '深圳市',
    receiverRegion: '南山区',
    receiverDetailAddress: '科兴科学园',
    note: null,
    confirmStatus: 1,
    deleteStatus: 0,
    useIntegration: null,
    paymentTime: '2020-02-25T08:53:29.000+00:00',
    deliveryTime: '2020-02-25T08:54:03.000+00:00',
    receiveTime: '2020-05-17T11:38:15.000+00:00',
    commentTime: null,
    modifyTime: '2020-02-25T08:52:51.000+00:00'
  },
  {
    id: 31,
    memberId: 1,
    couponId: 26,
    orderSn: '202005160100000001',
    createTime: '2020-05-16 07:16:54',
    memberUsername: 'test',
    totalAmount: 13623,
    payAmount: 11842.4,
    freightAmount: 0,
    promotionAmount: 1629.6,
    integrationAmount: 1,
    couponAmount: 150,
    discountAmount: 0,
    payType: 0,
    sourceType: 1,
    status: 4,
    orderType: 0,
    deliveryCompany: null,
    deliverySn: null,
    autoConfirmDay: 15,
    integration: 13623,
    growth: 13623,
    promotionInfo: '满减优惠：满5000.00元，减500.00元;打折优惠：满2件，打8.00折;满减优惠：满500.00元，减50.00元',
    billType: null,
    billHeader: null,
    billContent: null,
    billReceiverPhone: null,
    billReceiverEmail: null,
    receiverName: '大梨',
    receiverPhone: '18033441849',
    receiverPostCode: '518000',
    receiverProvince: '广东省',
    receiverCity: '深圳市',
    receiverRegion: '福田区',
    receiverDetailAddress: '东晓街道',
    note: null,
    confirmStatus: 0,
    deleteStatus: 0,
    useIntegration: null,
    paymentTime: null,
    deliveryTime: null,
    receiveTime: null,
    commentTime: null,
    modifyTime: null
  },
  {
    id: 32,
    memberId: 1,
    couponId: null,
    orderSn: '202005170100000001',
    createTime: '2020-05-17 07:00:38',
    memberUsername: 'test',
    totalAmount: 6487,
    payAmount: 6187,
    freightAmount: 0,
    promotionAmount: 300,
    integrationAmount: 0,
    couponAmount: 0,
    discountAmount: 0,
    payType: 1,
    sourceType: 1,
    status: 1,
    orderType: 0,
    deliveryCompany: null,
    deliverySn: null,
    autoConfirmDay: 15,
    integration: 6487,
    growth: 6487,
    promotionInfo: '满减优惠：满3000.00元，减300.00元;无优惠',
    billType: null,
    billHeader: null,
    billContent: null,
    billReceiverPhone: null,
    billReceiverEmail: null,
    receiverName: '大梨',
    receiverPhone: '18033441849',
    receiverPostCode: '518000',
    receiverProvince: '广东省',
    receiverCity: '深圳市',
    receiverRegion: '福田区',
    receiverDetailAddress: '东晓街道',
    note: null,
    confirmStatus: 0,
    deleteStatus: 0,
    useIntegration: null,
    paymentTime: '2020-05-17T07:33:28.000+00:00',
    deliveryTime: null,
    receiveTime: null,
    commentTime: null,
    modifyTime: null
  },
  {
    id: 35,
    memberId: 1,
    couponId: null,
    orderSn: '202005170100000004',
    createTime: '2020-05-17 07:22:03',
    memberUsername: 'test',
    totalAmount: 3788,
    payAmount: 3488,
    freightAmount: 0,
    promotionAmount: 300,
    integrationAmount: 0,
    couponAmount: 0,
    discountAmount: 0,
    payType: 2,
    sourceType: 1,
    status: 3,
    orderType: 0,
    deliveryCompany: '顺丰快递',
    deliverySn: '123',
    autoConfirmDay: 15,
    integration: 3788,
    growth: 3788,
    promotionInfo: '满减优惠：满3000.00元，减300.00元',
    billType: null,
    billHeader: null,
    billContent: null,
    billReceiverPhone: null,
    billReceiverEmail: null,
    receiverName: '大梨',
    receiverPhone: '18033441849',
    receiverPostCode: '518000',
    receiverProvince: '广东省',
    receiverCity: '深圳市',
    receiverRegion: '福田区',
    receiverDetailAddress: '东晓街道',
    note: null,
    confirmStatus: 1,
    deleteStatus: 0,
    useIntegration: null,
    paymentTime: '2020-05-17T07:29:07.000+00:00',
    deliveryTime: '2020-05-17T07:30:24.000+00:00',
    receiveTime: '2020-05-17T07:41:45.000+00:00',
    commentTime: null,
    modifyTime: null
  },
  {
    id: 36,
    memberId: 1,
    couponId: null,
    orderSn: '202005170100000005',
    createTime: '2020-05-17 08:59:26',
    memberUsername: 'test',
    totalAmount: 10275,
    payAmount: 9775,
    freightAmount: 0,
    promotionAmount: 500,
    integrationAmount: 0,
    couponAmount: 0,
    discountAmount: 0,
    payType: 0,
    sourceType: 1,
    status: 4,
    orderType: 0,
    deliveryCompany: null,
    deliverySn: null,
    autoConfirmDay: 15,
    integration: 10275,
    growth: 10275,
    promotionInfo: '满减优惠：满5000.00元，减500.00元;无优惠',
    billType: null,
    billHeader: null,
    billContent: null,
    billReceiverPhone: null,
    billReceiverEmail: null,
    receiverName: '大梨',
    receiverPhone: '18033441849',
    receiverPostCode: '518000',
    receiverProvince: '广东省',
    receiverCity: '深圳市',
    receiverRegion: '福田区',
    receiverDetailAddress: '东晓街道',
    note: null,
    confirmStatus: 0,
    deleteStatus: 0,
    useIntegration: null,
    paymentTime: null,
    deliveryTime: null,
    receiveTime: null,
    commentTime: null,
    modifyTime: null
  },
  {
    id: 37,
    memberId: 1,
    couponId: null,
    orderSn: '202005170100000006',
    createTime: '2020-05-17 11:33:48',
    memberUsername: 'test',
    totalAmount: 6487,
    payAmount: 6187,
    freightAmount: 0,
    promotionAmount: 300,
    integrationAmount: 0,
    couponAmount: 0,
    discountAmount: 0,
    payType: 1,
    sourceType: 1,
    status: 3,
    orderType: 0,
    deliveryCompany: '顺丰快递',
    deliverySn: 'aadd',
    autoConfirmDay: 15,
    integration: 6487,
    growth: 6487,
    promotionInfo: '满减优惠：满3000.00元，减300.00元;无优惠',
    billType: null,
    billHeader: null,
    billContent: null,
    billReceiverPhone: null,
    billReceiverEmail: null,
    receiverName: '大梨',
    receiverPhone: '18033441849',
    receiverPostCode: '518000',
    receiverProvince: '广东省',
    receiverCity: '深圳市',
    receiverRegion: '福田区',
    receiverDetailAddress: '东晓街道',
    note: null,
    confirmStatus: 1,
    deleteStatus: 0,
    useIntegration: null,
    paymentTime: '2020-05-17T11:33:59.000+00:00',
    deliveryTime: '2020-05-17T11:34:59.000+00:00',
    receiveTime: '2020-05-17T11:35:50.000+00:00',
    commentTime: null,
    modifyTime: null
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
    label: '订单编号',
    value: 'orderSn',
    attr: {
      align: 'center'
    }
  },
  {
    label: '提交时间',
    value: 'createTime',
    attr: {
      align: 'center'
    }
  },
  {
    label: '用户账号',
    value: 'memberUsername',
    attr: {
      align: 'center'
    }
  },
  {
    label: '订单金额',
    value: 'totalAmount',
    attr: {
      width: 100,
      align: 'center'
    },
    renderFn: (row: any) => {
      return (
        <div>
          <div>¥{row.totalAmount}</div>
        </div>
      )
    }
  },
  {
    label: '订单状态',
    value: 'status',
    attr: {
      width: 120,
      align: 'center'
    },
    renderFn: (row: any) => {
      return (
        <div>
          <div>{['待发货', '', '已完成', '已关闭'][row.status - 1]}</div>
        </div>
      )
    }
  }
]

export {
  data,
  columnList
}