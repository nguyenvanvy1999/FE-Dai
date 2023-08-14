import { Select, Table } from 'antd'
import { StallLayout } from '../../../Layout'

function ReplyComment() {
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
      title: 'Mã đơn hàng',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tên gian hàng',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Comment',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Trả lời',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Rating(Sao)',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'address',
      key: 'address',
    },
  ]
  return (
    <StallLayout>
      <div className="m-4 max-w-full bg-slate-50 pl-2">
        <div className="inline-block items-center">
          <p className="text-md	font-bold	mb-2 mt-3 w-full ">Trả lời đánh giá</p>

          <div className="">
            <Select />
          </div>
        </div>

        <Table indentSize={15} className="max-w-full" dataSource={dataSource} columns={columns} />
      </div>
    </StallLayout>
  )
}

export default ReplyComment
