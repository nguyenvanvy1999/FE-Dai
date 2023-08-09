import { Button, Table } from 'antd'
import { useState } from 'react'
import ModalAddStall from '../Modal/ModalAddStall'

function StallManage() {
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

  const [isOpenModalAddStall, setIsOpenModalAddStall] = useState(false)

  return (
    <div className="m-4 max-w-full bg-[#ffff] pl-2">
      <div className="flex items-center justify-between">
        <p className="text-md	font-bold	mb-2 mt-3">Gian hàng</p>
        <Button
          type="primary"
          className="bg-blue-700 mr-3"
          onClick={() => setIsOpenModalAddStall(true)}
        >
          Thêm mới
        </Button>
      </div>
      <span>Bạn được tạo tối đa 5 gian hàng</span>
      <Table dataSource={dataSource} columns={columns} />
      <ModalAddStall
        isOpenModalAddStall={isOpenModalAddStall}
        setIsOpenModalAddStall={setIsOpenModalAddStall}
      />
    </div>
  )
}

export default StallManage
