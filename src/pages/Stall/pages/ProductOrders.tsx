import { Button, Form, Input, Select, Table } from 'antd'
import { StallLayout } from '../../../Layout'
import useOrder from '../../../hooks/useOrder'
import { useEffect } from 'react'
import Column from 'antd/es/table/Column'
import { Order } from '../../../models/Order'
import moment from 'moment'

function ProductOrders() {
  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'Mike',
  //     age: 32,
  //     address: '10 Downing Street',
  //   },
  //   {
  //     key: '2',
  //     name: 'John',
  //     age: 42,
  //     address: '10 Downing Street',
  //   },
  // ]

  const { fetchDataOrder, orders, isLoadingOrder } = useOrder({
    initQuery: { pageIndex: 1, pageSize: 10 },
  })

  useEffect(() => {
    fetchDataOrder()
  }, [])

  console.log(orders)

  return (
    <StallLayout>
      <div className="m-4 max-w-full bg-slate-50 p-4 ">
        <div className="inline-block items-center w-full">
          <p className="text-md	font-bold	mb-2 mt-3">Sản phẩm đã bán</p>

          <Form className="grid grid-cols-4 gap-2">
            <Form.Item className="w-full">
              <Input size="large" placeholder="Nhập mã đơn hàng" />
            </Form.Item>
            <Form.Item className=" w-full">
              <Input size="large" placeholder="Nhập tên người mua" />
            </Form.Item>
            <Form.Item className="w-full">
              <Select
                size="large"
                defaultValue="0"
                placeholder=""
                options={[
                  { value: '0', label: 'Tất cả' },
                  { value: '1', label: 'Tạm giữ tiền' },
                  { value: '2', label: 'Hoàn thành' },
                  { value: '3', label: 'Hủy' },
                  { value: '4', label: 'Thất bại' },
                ]}
              />
            </Form.Item>
            <Button size="large" className="bg-green-100 text-white w-1/2" type="default">
              Tìm đơn hàng
            </Button>
          </Form>
        </div>
        <Table
          indentSize={15}
          className="max-w-full"
          dataSource={orders}
          pagination={false}
          loading={isLoadingOrder}
        >
          <Column title="Thao tác" />
          <Column title="Mã đơn hàng" dataIndex="uid" key="uid" />
          <Column
            title="Ngày bán"
            dataIndex="createdAt"
            key="createdAt"
            render={(_, record: Order) => moment(record.createdAt).format('DD/MM/YYYY')}
          />
          <Column title="Người mua" />
          <Column title="Gian hàng" />
          <Column title="Mặt hàng" />
          <Column title="Số lượng" dataIndex="quantity" key="quantity" />
          <Column title="Giá" dataIndex="price" key="price" />
          <Column title="Đã giảm" dataIndex="discount" key="discount" />
          <Column title="Tổng tiền" dataIndex="totalPayment" key="totalPayment" />
          <Column title="Hoàn tiền" />
          <Column title="Reseller" />
          <Column title="Sàn" />
          <Column title="Trạng thái" />
        </Table>
      </div>
    </StallLayout>
  )
}

export default ProductOrders
