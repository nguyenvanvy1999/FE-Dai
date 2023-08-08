import { FaRegCommentDots } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'

export default function Header() {
  return (
    <div className="flex justify-between w-full bg-[#ffffff] items-center">
      <MdMenu size={24} className="hover:cursor-pointer" />
      <div className="flex items-center">
        <FaRegCommentDots size={24} className="hover:cursor-pointer mr-5 " />
        <div className="flex hover:cursor-pointer hover:bg-sky-100 p-2 w-40 items-center">
          <img className="w-8 h-8" src="https://taphoammo.net/administrator/img/user.svg" />
          <span>My Name</span>
        </div>
      </div>
    </div>
  )
}
