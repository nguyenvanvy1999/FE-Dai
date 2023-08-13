import { Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'
import { BiSolidDownArrow } from 'react-icons/bi'
import { FaRegCommentDots } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { MdMenu } from 'react-icons/md'

const items: MenuProps['items'] = [
  {
    label: (
      <div style={{ width: 200 }} className="flex ">
        <img
          className="w-12 h-12 rounded-full "
          src="https://taphoammo.net/administrator/img/user.svg"
        />
        <div className="w-full flex text-md items-center">
          <p>My Name</p>
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
      <div className="flex text-red-600">
        <FiLogOut size={20} />
        <p>Đăng xuất</p>
      </div>
    ),
    key: '3',
  },
]

export default function Header() {
  return (
    <div className="flex justify-between w-full bg-[#ffffff] items-center">
      <MdMenu size={24} className="hover:cursor-pointer" />
      <div className="flex items-center">
        <FaRegCommentDots size={24} className="hover:cursor-pointer mr-5 " />
        <div className="flex hover:cursor-pointer hover:bg-sky-100 p-2 w-40 items-center">
          <img
            className="w-8 h-8 rounded-full "
            src="https://taphoammo.net/administrator/img/user.svg"
          />
          <Dropdown className="w-32" menu={{ items }} trigger={['click']}>
            <a className="w-32" onClick={(e) => e.preventDefault()}>
              <Space>
                My Name
                <BiSolidDownArrow />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
