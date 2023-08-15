import { Link } from 'react-router-dom'
import { RoutePath } from '../../../constants'
import ListCategory from './ListCategory'

interface CategoryList {
  label: string
  categories: {
    path: string
    icon: React.ReactNode
    label: string
  }[]
}

interface SideBarProps {
  categoryLists: CategoryList[]
}

const SideBar: React.FC<SideBarProps> = ({ categoryLists }) => {
  return (
    <div className="top-0 left-0 bottom-0">
      <div className="flex flex-col bg-slate-800 w-64 text-white h-full">
        <div>
          <Link to={RoutePath.Sales} className="flex items-center gap-2 py-2 justify-center">
            <img
              src={'https://taphoammo.net/administrator/img/logo.svg'}
              alt=""
              className="w-10 h-10"
            />
            <span className="text-neutral-50 text-md">taphoammo.net</span>
          </Link>
        </div>
        {/* Your logo and branding JSX here */}
        {categoryLists.map((categoryList, index) => (
          <ListCategory
            key={index}
            label={categoryList.label}
            categories={categoryList.categories}
          />
        ))}
      </div>
    </div>
  )
}

export default SideBar
