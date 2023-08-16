import AdminLayout from '../../../../Layout/AdminLayout'
import { Button, Table } from 'antd'
export interface ManagerReviewShopPageProps {}

export default function ManagerProductTypePage() {
  // const [isOpenModalAddStall, setIsOpenModalAddStall] = useState(false)
  const columns = [
    {
      title: 'Loại sản phẩm',
      dataIndex: 'productTypeId',
      key: 'productTypeId',
    },
    {
      title: 'Loại doanh nghiệp',
      dataIndex: 'businessTypeId',
      key: 'businessTypeId',
    },
    {
      title: 'Loại cửa hàng',
      dataIndex: 'shopTypeId',
      key: 'shopTypeId',
    },
  ]
  return (
    <AdminLayout>
      <div className="p-3 max-w-full bg-[#ffff] pl-2">
        <div className="flex items-center justify-between">
          <p className="text-md	font-bold	mb-2 mt-3">Loại sản phẩm</p>
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