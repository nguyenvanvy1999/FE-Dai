import AdminLayout from '../../../../Layout/AdminLayout'
import { Button, Table } from 'antd'
export interface ManagerReviewShopPageProps {}

export default function ManagerShopPage() {
  // const [isOpenModalAddStall, setIsOpenModalAddStall] = useState(false)
  const columns = [
    {
      title: 'Tên cửa hàng',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Loại doanh nghiệp',
      dataIndex: 'business_typeId',
      key: 'business_typeId',
    },
    {
      title: 'Loại cửa hàng',
      dataIndex: 'shop_typeId',
      key: 'shop_typeId',
    },
    {
      title: 'Loại sản phẩm',
      dataIndex: 'product_typeId',
      key: 'product_typeId',
    },
    {
      title: 'Hoàn trả',
      dataIndex: 'refund',
      key: 'refund',
    },
    {
      title: 'Là người bán',
      dataIndex: 'isReseller',
      key: 'isReseller',
    },
    {
      title: 'Là kho hàng',
      dataIndex: 'isOwnWarehouse',
      key: 'isOwnWarehouse',
    },
    {
      title: 'Mô tả ngắn gọn',
      dataIndex: 'short_description',
      key: 'short_description',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
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
          <p className="text-md	font-bold	mb-2 mt-3">Quản lí cửa hàng</p>
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