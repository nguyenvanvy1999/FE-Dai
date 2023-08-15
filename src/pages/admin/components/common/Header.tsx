import { Button, Dropdown, MenuProps, Space } from 'antd'
import { HiBars3 } from 'react-icons/hi2'
import useAuth from '../../../../hooks/useAuth'
import { ROLE } from '../../../../models'
import { FiLogOut } from 'react-icons/fi'
import authStorage from '../../../../utils/authStorage'
import { BiSolidDownArrow } from 'react-icons/bi'

export interface HeaderProps {}

export default function Header() {
  const { user, handleLogout } = useAuth()
  const items: MenuProps['items'] = [
    {
      label: (
        <div style={{ width: 200 }} className="flex gap-2">
          <img
            className="w-12 h-12 rounded-full "
            src="https://taphoammo.net/administrator/img/user.svg"
          />
          <div className="w-full flex text-md items-center">
            <p>{user?.fullName || user?.role === ROLE.ADMIN ? 'Admin' : 'Người dùng'}</p>
          </div>
        </div>
      ),
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <div
          className="flex text-red-600 gap-2"
          onClick={() => handleLogout({ refreshToken: authStorage.getRefreshToken() })}
        >
          <FiLogOut size={20} />
          <p>Đăng xuất</p>
        </div>
      ),
      key: '3',
    },
  ]

  return (
    <div className="border-b border-x-grey-100 w-full py-4 pl-3 flex justify-between">
      <Button type="text" className="text-black-100 h-full">
        <HiBars3 size={24} />
      </Button>
      <Dropdown className="w-32" menu={{ items }} trigger={['click']}>
        <a className="w-32" onClick={(e) => e.preventDefault()}>
          <Space className="flex gap-2">
            {user?.fullName || user?.role === ROLE.ADMIN ? 'Admin' : 'Người dùng'}
            <BiSolidDownArrow />
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}
