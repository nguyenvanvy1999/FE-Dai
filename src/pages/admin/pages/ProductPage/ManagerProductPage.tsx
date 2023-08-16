import AdminLayout from '../../../../Layout/AdminLayout'
import { Button, Table } from 'antd'
export interface ManagerReviewShopPageProps {}

export default function ManagerProductPage() {
  // const [isOpenModalAddStall, setIsOpenModalAddStall] = useState(false)
  const columns = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'nameProduct',
      key: 'nameProduct',
    },
    {
      title: 'Shop',
      dataIndex: 'shop',
      key: 'shop',
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Giá thành',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Số lượng đã bán',
      dataIndex: 'soldQuantity',
      key: 'soldQuantity',
    },
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
          <p className="text-md	font-bold	mb-2 mt-3">Danh sách sản phẩm</p>
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
