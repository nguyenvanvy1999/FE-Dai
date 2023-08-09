import { Button, Form, Input, Select, Table } from 'antd'

function ProductOrders() {
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
      title: 'Mã đơn hàng',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Người mua',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Gian hàng',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Mặt hàng',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Số lượng',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Giá',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Đã giảm',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Hoàn tiền',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Reseller',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Sàn',
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
    <div className="m-4 max-w-full bg-slate-50 pl-2">
      <div className="inline-block items-center">
        <p className="text-md	font-bold	mb-2 mt-3 w-full ">Sản phẩm đã bán</p>

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
  )
}

export default ProductOrders
