import { Button, Form, Input, Select, Table } from 'antd'
import { StallLayout } from '../../../Layout'
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
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Tên gian hàng',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Loại',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Trùng',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Reseller',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Đơn giá',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Sàn',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Kho',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'address',
    key: 'address',
  },
]
function OrdersService() {
  return (
    <StallLayout>
      <div className="m-4 max-w-full bg-slate-50 pl-2">
        <div className="inline-block items-center">
          <p className="text-md	font-bold	mb-2 mt-3 w-full ">Đơn hàng dịch vụ</p>

          <div className="flex w-full">
            <Form className="flex mr-3 items-center">
              <Form.Item className="mr-3">
                <Input size="large" placeholder="Nhập mã đơn hàng" />
              </Form.Item>
              <Form.Item className="mr-3">
                <Input size="large" placeholder="Nhập tên người mua" />
              </Form.Item>
              <Form.Item>
                <Select />
              </Form.Item>
            </Form>
            <Button className="bg-green-300 mr-3 hover:bg-green-200 hover:text-black text-white h-full">
              Tìm đơn hàng
            </Button>
          </div>
        </div>
        <Table indentSize={15} className="max-w-full" dataSource={dataSource} columns={columns} />
      </div>
    </StallLayout>
  )
}

export default OrdersService
