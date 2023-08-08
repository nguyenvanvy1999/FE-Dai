import { Button, Input, Table } from 'antd'

function PreOrders() {
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
      title: 'Ngày đặt',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Thời gian',
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
    <div className="m-4 max-w-full bg-slate-50">
      <div className="flex mb-3 mt-3 items-center justify-between">
        <div className="">
          <p>Đơn hàng đặt trước</p>
          <div className="flex">
            <Input />
          </div>
        </div>
        <Button className="bg-green-300 mr-3 hover:bg-green-200 hover:text-black text-white mt-4">
          Tìm đơn hàng
        </Button>
      </div>
      <span className="text-red-500">
        * Thời gian hoàn thành đơn hàng tính bằng ngày, trong thời gian đó, nếu kho hàng đủ số lượng
        thì đơn hàng sẽ tự động hoàn thành. Ngược lại đơn sẽ tự hủy và hoàn tiền cho khách.
      </span>
      <Table indentSize={15} className="max-w-full" dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default PreOrders
