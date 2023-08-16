import AdminLayout from '../../../../Layout/AdminLayout'
import { Button, Table } from 'antd'
export interface ManagerReviewShopPageProps {}

export default function ManagerShopEvalution() {
  // const [isOpenModalAddStall, setIsOpenModalAddStall] = useState(false)
  const columns = [
    {
      title: 'Tên cửa hàng',
      dataIndex: 'shopId',
      key: 'shopId',
    },
    {
      title: 'Nội dung ',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Điểm đánh giá',
      dataIndex: 'reviewPoint',
      key: 'reviewPoint',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    },
    {
      title: 'Tạo bởi',
      dataIndex: 'createdBy',
      key: 'createdBy',
    }, 
    
  ]
  return (
    <AdminLayout>
      <div className="p-3 max-w-full bg-[#ffff] pl-2">
        <div className="flex items-center justify-between">
          <p className="text-md	font-bold	mb-2 mt-3">Evaluation shop</p>
          <div>
            <Button
              className="bg-red-600 mr-3 text-white"
              // onClick={() => setIsOpenModalAddStall(true)}
            >
              Thùng rác
            </Button>
            <Button
              className="bg-blue-700 mr-3 text-white"
              // onClick={() => setIsOpenModalAddStall(true)}
            >
              Thêm mới
            </Button>
          </div>
        </div>
        <Table dataSource={[]} columns={columns} />
        {/* <ModalAddStall
          isOpenModalAddStall={isOpenModalAddStall}
          setIsOpenModalAddStall={setIsOpenModalAddStall}
        /> */}
      </div>
    </AdminLayout>
  )
}