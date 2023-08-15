import { Link, useLocation } from 'react-router-dom';

const linkClasses =
  'flex items-center gap-2 font-bold px-3 py-2 hover:no-underline active:bg-neutral-600 rounded-sm text-base hover:cursor-pointer hover:text-white';

interface SidebarItem {
  path: string;
  icon: React.ReactNode;
  label: string;
}

interface ListCategoryProps {
  label: string;
  categories: SidebarItem[];
}

const ListCategory: React.FC<ListCategoryProps> = ({ label, categories }) => {
  const location = useLocation();

  return (
    <ul>
      <li className="px-3 py-2 text-white-opacity font-medium">{label}</li>
      {categories.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            className={`${linkClasses} ${
              item.path === location.pathname
                ? 'shadow-inset bg-grey-50 text-white'
                : 'text-white-opacity'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListCategory;
