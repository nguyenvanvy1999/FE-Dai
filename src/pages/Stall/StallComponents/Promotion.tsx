import { Button, Table } from 'antd'

function Promotion() {
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
  return (
    <div className="m-4 bg-[#ffff] pt-1">
      <div className="flex mb-3 mt-3 items-center justify-between">
        <p className="text-3xl">Mã giảm giá</p>
        <Button type="primary" className="bg-blue-700 mr-3 rounded-xl">
          Thêm mới
        </Button>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default Promotion
