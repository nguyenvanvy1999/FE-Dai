import AdminLayout from '../../../../Layout/AdminLayout'
import { Button, Table } from 'antd'
export interface ManagerReviewShopPageProps {}

export default function ManagerUserPage() {
  // const [isOpenModalAddStall, setIsOpenModalAddStall] = useState(false)
  const columns = [
    {
      title: 'Telegram',
      dataIndex: 'telegram',
      key: 'telegram',
    },
    {
      title: 'Google',
      dataIndex: 'google_2fa',
      key: 'google_2fa',
    },
    {
      title: 'Đang hoạt động',
      dataIndex: 'isOnline',
      key: 'isOnline',
    },
    {
      title: 'Username',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Tên đầy đủ',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Mật khẩu',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Số dư',
      dataIndex: 'balance',
      key: 'balance',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Facebook',
      dataIndex: 'facebook',
      key: 'facebook',
    },
    {
      title: 'Quyền',
      dataIndex: 'role',
      key: 'role',
    },
  ]
  return (
    <AdminLayout>
      <div className="p-3 max-w-full bg-[#ffff] pl-2">
        <div className="flex items-center justify-between">
          <p className="text-md	font-bold	mb-2 mt-3">Quản lí người dùng</p>
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