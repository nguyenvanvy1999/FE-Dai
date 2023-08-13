import { Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'
import { BiSolidDownArrow } from 'react-icons/bi'
import { FaRegCommentDots } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { MdMenu } from 'react-icons/md'
import useAuth from '../../../hooks/useAuth'
import { ROLE } from '../../../models'
import authStorage from '../../../utils/authStorage'

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
    <div className="flex justify-between w-full bg-[#ffffff] items-center">
      <MdMenu size={24} className="hover:cursor-pointer" />
      <div className="flex items-center">
        <FaRegCommentDots size={24} className="hover:cursor-pointer mr-5 " />
        <div className="flex hover:cursor-pointer hover:bg-sky-100 p-2 w-40 items-center gap-2">
          <img
            className="w-8 h-8 rounded-full "
            src="https://taphoammo.net/administrator/img/user.svg"
          />
          <Dropdown className="w-32" menu={{ items }} trigger={['click']}>
            <a className="w-32" onClick={(e) => e.preventDefault()}>
              <Space className="flex gap-2">
                {user?.fullName || user?.role === ROLE.ADMIN ? 'Admin' : 'Người dùng'}
                <BiSolidDownArrow />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
