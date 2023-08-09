import { Table } from 'antd'

function Complain() {
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
      title: 'STT',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Thao tác',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Ngày',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Mã',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Gian hàng',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Người mua',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Số lượng',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tổng',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Nội dung',
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
        <p className="text-md	font-bold	mb-2 mt-3 w-full">Đơn hàng khiếu nại</p>
      </div>
      <p className="text-red-500">Xin lưu ý:</p>
      <span className="text-green-300">
        -Đơn khiếu nại sẽ có 2 trạng thái. 1.Khiếu nại: Khách hàng khiếu nại về đơn hàng của bạn.
        2.Tranh chấp: Bạn không đồng ý với khiếu nại trên và chủ động chuyển sang trạng thái 2 bên
        tranh chấp.
        <br /> -Khi đơn hàng ở trạng thái "Khiếu nại", nếu trong vòng 72h, khách không hủy khiếu
        nại, hoặc bạn không chủ động chuyển sang tranh chấp, thì đơn hàng sẽ tự động hoàn tiền.
        <br /> -Đa phần khách khiếu nại là đợi các bạn bảo hành, nên hãy chủ động liên hệ và xử lý
        cho khách nhé.
        <br /> -Nếu tỷ lệ khiếu nại quá cao (so với tổng số đơn hàng), hệ thống sẽ tự động đóng gian
        hàng, các bạn hãy kiểm tra lại hàng trước khi mở bán lại nhé.
      </span>
      <Table indentSize={15} className="max-w-full" dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default Complain
