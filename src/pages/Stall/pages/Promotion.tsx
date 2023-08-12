import { Button, Table } from 'antd'
import ModalAddPromotion from '../Modal/ModalAddPromotion'
import { useState } from 'react'
import { StallLayout } from '../../../components/Layout'

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
  const [isOpenModalAddPromotion, setIsOpenModalAddPromotion] = useState(false)
  return (
    <StallLayout>
      <div className="m-4 max-w-full bg-[#ffff] pl-2">
        <div className="flex items-center justify-between">
          <p className="text-md	font-bold	mb-2 mt-3">Mã giảm giá</p>
          <Button
            onClick={() => setIsOpenModalAddPromotion(true)}
            type="primary"
            className="bg-blue-700 mr-3 rounded-xl"
          >
            Thêm mới
          </Button>
        </div>
        <Table dataSource={dataSource} columns={columns} />
        <ModalAddPromotion
          isOpenModalAddPromotion={isOpenModalAddPromotion}
          setIsOpenModalAddPromotion={setIsOpenModalAddPromotion}
        />
      </div>
    </StallLayout>
  )
}

export default Promotion
