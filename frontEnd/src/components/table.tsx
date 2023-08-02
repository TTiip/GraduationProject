import { ElSwitch, ElTable, ElTableColumn } from 'element-plus'

export default defineComponent({
  name: 'table-com',
  setup () {
    const data = [
      {
        id: 26,
        brandId: 3,
        productCategoryId: 19,
        feightTemplateId: 0,
        productAttributeCategoryId: 3,
        name: '华为 HUAWEI P20 ',
        pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf58Ndefaac16.jpg',
        productSn: '6946605',
        deleteStatus: 0,
        publishStatus: true,
        newStatus: true,
        recommandStatus: true,
        verifyStatus: 0,
        sort: 100,
        sale: 100,
        price: 3788,
        promotionPrice: 3659,
        giftGrowth: 3788,
        giftPoint: 3788,
        usePointLimit: 0,
        subTitle: 'AI智慧全面屏 6GB +64GB 亮黑色 全网通版 移动联通电信4G手机 双卡双待手机 双卡双待',
        originalPrice: 4288,
        stock: 1000,
        lowStock: 0,
        unit: '件',
        weight: 0,
        previewStatus: 1,
        serviceIds: '2,3,1',
        keywords: '',
        note: '',
        albumPics: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ab46a3cN616bdc41.jpg,http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf5fN2522b9dc.jpg',
        detailTitle: '',
        promotionStartTime: '2023-01-10T07:49:38.000+00:00',
        promotionEndTime: '2023-01-30T16:00:00.000+00:00',
        promotionPerLimit: 0,
        promotionType: 1,
        brandName: '华为',
        productCategoryName: '手机通讯',
        description: null,
        detailDesc: null,
        detailHtml: null,
        detailMobileHtml: null
      },
      {
        id: 27,
        brandId: 6,
        productCategoryId: 19,
        feightTemplateId: 0,
        productAttributeCategoryId: 3,
        name: '小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待',
        pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/xiaomi.jpg',
        productSn: '7437788',
        deleteStatus: 0,
        publishStatus: true,
        newStatus: true,
        recommandStatus: true,
        verifyStatus: 0,
        sort: 0,
        sale: 99,
        price: 2699,
        promotionPrice: null,
        giftGrowth: 2699,
        giftPoint: 2699,
        usePointLimit: 0,
        subTitle: '骁龙845处理器，红外人脸解锁，AI变焦双摄，AI语音助手小米6X低至1299，点击抢购',
        originalPrice: 2699,
        stock: 100,
        lowStock: 0,
        unit: '',
        weight: 0,
        previewStatus: 0,
        serviceIds: '1',
        keywords: '',
        note: '',
        albumPics: '',
        detailTitle: '',
        promotionStartTime: null,
        promotionEndTime: null,
        promotionPerLimit: 0,
        promotionType: 3,
        brandName: '小米',
        productCategoryName: '手机通讯',
        description: null,
        detailDesc: null,
        detailHtml: null,
        detailMobileHtml: null
      },
      {
        id: 28,
        brandId: 6,
        productCategoryId: 19,
        feightTemplateId: 0,
        productAttributeCategoryId: 3,
        name: '小米 红米5A 全网通版 3GB+32GB 香槟金 移动联通电信4G手机 双卡双待',
        pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5a9d248cN071f4959.jpg',
        productSn: '7437789',
        deleteStatus: 0,
        publishStatus: true,
        newStatus: true,
        recommandStatus: true,
        verifyStatus: 0,
        sort: 0,
        sale: 98,
        price: 649,
        promotionPrice: null,
        giftGrowth: 649,
        giftPoint: 649,
        usePointLimit: 0,
        subTitle: '8天超长待机，137g轻巧机身，高通骁龙处理器小米6X低至1299，点击抢购',
        originalPrice: 649,
        stock: 100,
        lowStock: 0,
        unit: '',
        weight: 0,
        previewStatus: 0,
        serviceIds: '',
        keywords: '',
        note: '',
        albumPics: '',
        detailTitle: '',
        promotionStartTime: null,
        promotionEndTime: null,
        promotionPerLimit: 0,
        promotionType: 4,
        brandName: '小米',
        productCategoryName: '手机通讯',
        description: null,
        detailDesc: null,
        detailHtml: null,
        detailMobileHtml: null
      },
      {
        id: 29,
        brandId: 51,
        productCategoryId: 19,
        feightTemplateId: 0,
        productAttributeCategoryId: 3,
        name: 'Apple iPhone 8 Plus 64GB 红色特别版 移动联通电信4G手机',
        pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5acc5248N6a5f81cd.jpg',
        productSn: '7437799',
        deleteStatus: 0,
        publishStatus: true,
        newStatus: true,
        recommandStatus: true,
        verifyStatus: 0,
        sort: 0,
        sale: 97,
        price: 5499,
        promotionPrice: 4799,
        giftGrowth: 5499,
        giftPoint: 5499,
        usePointLimit: 0,
        subTitle: '【限时限量抢购】Apple产品年中狂欢节，好物尽享，美在智慧！速来 >> 勾选[保障服务][原厂保2年]，获得AppleCare+全方位服务计划，原厂延保售后无忧。',
        originalPrice: 5499,
        stock: 100,
        lowStock: 0,
        unit: '',
        weight: 0,
        previewStatus: 0,
        serviceIds: '1,2,3',
        keywords: '',
        note: '',
        albumPics: '',
        detailTitle: '',
        promotionStartTime: '2020-05-04T07:12:54.000+00:00',
        promotionEndTime: '2020-05-29T16:00:00.000+00:00',
        promotionPerLimit: 0,
        promotionType: 1,
        brandName: '苹果',
        productCategoryName: '手机通讯',
        description: null,
        detailDesc: null,
        detailHtml: null,
        detailMobileHtml: null
      },
      {
        id: 30,
        brandId: 50,
        productCategoryId: 8,
        feightTemplateId: 0,
        productAttributeCategoryId: 1,
        name: 'HLA海澜之家简约动物印花短袖T恤',
        pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5ad83a4fN6ff67ecd.jpg!cc_350x449.jpg',
        productSn: 'HNTBJ2E042A',
        deleteStatus: 0,
        publishStatus: true,
        newStatus: true,
        recommandStatus: true,
        verifyStatus: 0,
        sort: 0,
        sale: 0,
        price: 98,
        promotionPrice: null,
        giftGrowth: 0,
        giftPoint: 0,
        usePointLimit: 0,
        subTitle: '2018夏季新品微弹舒适新款短T男生 6月6日-6月20日，满300减30，参与互动赢百元礼券，立即分享赢大奖',
        originalPrice: 98,
        stock: 100,
        lowStock: 0,
        unit: '',
        weight: 0,
        previewStatus: 0,
        serviceIds: '',
        keywords: '',
        note: '',
        albumPics: '',
        detailTitle: '',
        promotionStartTime: null,
        promotionEndTime: null,
        promotionPerLimit: 0,
        promotionType: 0,
        brandName: '海澜之家',
        productCategoryName: 'T恤',
        description: null,
        detailDesc: null,
        detailHtml: null,
        detailMobileHtml: null
      }
    ]

		interface typeColumnList {
			label: string
			value: string
			attr?: any
			renderFn?: (...row: any) => void
		}
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
		    label: '商品图片',
		    value: 'pic',
		    attr: {
		      width: 120,
		      align: 'center'
		    },
		    renderFn: (row: any) => {
		      return <img class="h-80px" src={row.pic} alt="" />
		    }
		  },
		  {
		    label: '商品名称',
		    value: 'name',
		    attr: {
		      align: 'center'
		    },
		    renderFn: (row: any) => {
		      return (
		        <div>
		          <div>{row.name}</div>
		          <div>品牌: {row.brandName}</div>
		        </div>
		      )
		    }
		  },
		  {
		    label: '价格/货号',
		    value: 'name',
		    attr: {
		      width: 140,
		      align: 'center'
		    },
		    renderFn: (row: any) => {
		      return (
		        <div>
		          <div>价格: ¥{row.price}</div>
		          <div>货号: {row.productSn}</div>
		        </div>
		      )
		    }
		  },
		  {
		    label: '标签',
		    value: 'name',
		    attr: {
		      width: 140,
		      align: 'center'
		    },
		    renderFn: (row: any) => {
		      console.log(row, 'row111')
		      return (
		        <div>
		          <div>上架: <ElSwitch v-model={row.publishStatus} /></div>
		          <div>新品: <ElSwitch v-model={row.newStatus} /></div>
		          <div>推荐: <ElSwitch v-model={row.recommandStatus} /></div>
		        </div>
		      )
		    }
		  },
		  {
		    label: '排序',
		    value: 'name',
		    attr: {
		      width: 100,
		      align: 'center'
		    }
		  },
		  {
		    label: '销量',
		    value: 'name',
		    attr: {
		      width: 120,
		      align: 'center'
		    }
		  }
		]
		return () => (
		  <div>
		    <ElTable data={data}>
		      {
		        columnList.map(item => (
		          <ElTableColumn key={item.value} prop={item.value} label={item.label} {...item.attr}>
		            {{
		              default: ({ row }: { row: any }) => item?.renderFn ? item?.renderFn(row) : row[item.value]
		            }}
		          </ElTableColumn>
		        ))
		      }
		      <ElTableColumn label="操作" width="180" align="center">
						112233
		      </ElTableColumn>
		    </ElTable>
		  </div>
		)
  }
})
