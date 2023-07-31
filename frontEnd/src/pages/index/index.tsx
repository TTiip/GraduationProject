import { ElCard } from 'element-plus'

export default defineComponent({
  name: 'index',
  setup () {
    const tabsList = [
      {
        id: 1,
        icon: 'i-iconoir:database-script',
        name: '今日订单总数',
        count: '157'
      },
      {
        id: 2,
        icon: 'i-iconoir-coin',
        name: '今日交易总额',
        count: '5475'
      },
      {
        id: 3,
        icon: 'i-iconoir-group',
        name: '今日活跃用户',
        count: '286'
      }
    ]
    const tabsList1 = [
      {
        id: 1,
        name: '待付款订单',
        count: '10'
      },
      {
        id: 2,
        name: '已完成订单',
        count: '12'
      },
      {
        id: 3,
        name: '待确认收货订单',
        count: '0'
      },
      {
        id: 4,
        name: '待发货订单',
        count: '1'
      },
      {
        id: 5,
        name: '待付款订单',
        count: '4'
      },
      {
        id: 6,
        name: '待发货订单',
        count: '31'
      },
      {
        id: 7,
        name: '待处理退款申请',
        count: '5'
      },
      {
        id: 8,
        name: '已发货订单',
        count: '79'
      }
    ]
    const tabsList2 = [
      {
        id: 1,
        name: '本月订单数',
        count: 451,
        compareLabel: '同比上月',
        compare: 11
      },
      {
        id: 2,
        name: '本周订单数',
        count: 67,
        compareLabel: '同比上周',
        compare: -7
      },
      {
        id: 3,
        name: '本月销售总额',
        count: 18672,
        compareLabel: '同比上月',
        compare: 7
      },
      {
        id: 4,
        name: '本周销售总额',
        count: 672,
        compareLabel: '同比上周',
        compare: -19
      }
    ]
    return () => (
      <div class="p-20px">
        <div class="flex">
          {
            tabsList.map(item => (
              <ElCard class="w-30% mr-30px" key={item.id}>
                <div class="flex items-center">
                  <i class={`${item.icon} text-54px`}/>
                  <div class="flex flex-col flex-start ml-16px">
                    <span>{item.name}</span>
                    <span>{item.count}</span>
                  </div>
                </div>
              </ElCard>
            ))
          }
        </div>
        <div class="mt-16px">
          <ElCard>
            {{
              header: () => (
                <div>待处理事务</div>
              ),
              default: () => (
                <div class="flex flex-wrap">
                  {
                    tabsList1.map(item => (
                      <div class="flex items-center w-30% justify-between mr-30px mb-10px border-b border-b-[#999]" key={item.id}>
                        <span>{item.name}</span>
                        <span class="color-red">({item.count})</span>
                      </div>
                    ))
                  }
                </div>
              )
            }}
          </ElCard>
        </div>
        <div class="mt-16px">
          <ElCard>
            {{
              header: () => (
                <div>订单统计</div>
              ),
              default: () => (
                <div>
                  <div>

                  </div>
                </div>
              )
            }}
          </ElCard>
        </div>
      </div>
    )
  }
})
