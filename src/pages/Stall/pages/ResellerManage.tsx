import { Select, Table } from 'antd'
import { StallLayout } from '../../../components/Layout'

function ResellerManage() {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ]

  const columns = [
    {
      title: 'Thao tác',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gian hàng',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tên reseller',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Chiết khấu',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Ngày yêu cầu',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Lời giới thiệu',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'address',
      key: 'address',
    },
  ]
  return (
    <StallLayout>
      <div className="m-4 max-w-full bg-slate-50 pl-2">
        <div className="inline-block items-center">
          <p className="text-md	font-bold	mb-2 mt-3 w-full ">Đơn hàng khiếu nại</p>

          <div className="">
            <Select />
          </div>
        </div>

        <Table indentSize={15} className="max-w-full" dataSource={dataSource} columns={columns} />
      </div>
    </StallLayout>
  )
}

export default ResellerManage
