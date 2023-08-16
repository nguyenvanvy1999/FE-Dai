import AdminLayout from '../../../../Layout/AdminLayout'
import { Button, Table } from 'antd'
export interface ManagerReviewShopPageProps {}

export default function ManagerShopTypePage() {
  // const [isOpenModalAddStall, setIsOpenModalAddStall] = useState(false)
  const columns = [
    {
      title: 'Tên loại cửa hàng',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Tên doanh nghiệp',
      dataIndex: 'business_typeId',
      key: 'business_typeId',
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
  ]
  return (
    <AdminLayout>
      <div className="p-3 max-w-full bg-[#ffff] pl-2">
        <div className="flex items-center justify-between">
          <p className="text-md	font-bold	mb-2 mt-3">Loại cửa hàng</p>
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